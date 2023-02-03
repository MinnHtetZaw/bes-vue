<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <p class="text-title mb-3">Symptom  Lists</p>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <div class="card p-0 border-0 ">
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Name</th>
              <th class="text-center">Symptom Category</th>
              <th class="text-center">Description</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="symptom in symptoms">
              <td class="text-center">{{symptom.id}}</td>
              <td class="">{{symptom.name}}</td>
              <td class="">{{symptom.symptom_category_id}}</td>
              <td class="">{{symptom.description}}</td>
              <td>
                <div class="d-flex mt-2 gap-4 align-items-center justify-content-center">
                  <i @click="editSymptom(symptom)" type="button" class="fa-solid fa-pen text-warning"></i>
                  <i @click="deleteSymptom(symptom.id)" type="button" class="fa-solid fa-trash text-danger"></i>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div  class="col-3">
        <div v-if="is_create == true" class="card p-3  border-0 ">
          <div class="d-flex mb-3 justify-content-between align-items-center">
            <p class="text-subtitle mb-0">Create Symptom </p>
          </div>
          <form @submit.prevent="" ref="storeSymptom">
            <text-area label-name="Name" rows="1" name="name"></text-area>
            <Select name="symptom_category_id" label-name="Symptom Category" option_name="Select Symptom Category">
              <option :value="symptom_category.id" v-for="symptom_category in symptom_categories">{{symptom_category.name}}</option>
            </Select>
            <text-area label-name="Description" name="description"></text-area>
            <button @click="storeSymptom" class="w-100 btn btn-primary btn-sm">Save</button>
          </form>
        </div>

        <div v-if="is_create == false" class="card p-3 shadow-sm border-0 rounded">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="fw-normal mb-3 text-secondary mb-0">Edit Symptom </h6>
          </div>
          <form @submit.prevent="" ref="editSymptom">
            <text-area label-name="Name" rows="1" name="name" :value="edit_symptom.name"></text-area>
            <Select name="symptom_category_id" label-name="Symptom Category" option_name="Select Symptom Category">
              <option :selected="edit_symptom.symptom_category_id === symptom_category.id" :value="symptom_category.id" v-for="symptom_category in symptom_categories">{{symptom_category.name}}</option>
            </Select>
            <text-area label-name="Description" name="description" :value="edit_symptom.description"></text-area>

            <div class="d-flex justify-content-center gap-3">
              <button @click="is_create = true" class="btn btn-danger btn-sm">Cancel</button>
              <button @click="updateSymptom(edit_symptom.id)" class="btn btn-success btn-sm">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Master>
</template>

<script>
import Master from "@/components/Master";
import {mapGetters} from "vuex";
import axios from "axios";
import router from "@/router";
import TextArea from "@/components/form-element/TextArea";
import Input from "@/components/form-element/Input";
import Select from "@/components/form-element/Select";
export default {
  name: "Symptom",
  components: {Select, Master,TextArea, Input},
  data() {
    return {
      is_create : true,
      error_message : {},
      symptoms : {},
      symptom_categories : {},
      edit_symptom : {}
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getSymptom: function () {
      axios.get(this.getUrl('symptom'))
          .then(res =>{
            this.symptoms = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    getSymptomCategories: function () {
      axios.get(this.getUrl('symptom-category'))
          .then(res =>{
            this.symptom_categories = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    storeSymptom() {
      let formData = new FormData(this.$refs.storeSymptom)
      axios.post(this.getUrl('symptom'), formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.storeSymptom.reset()
            this.error_message = ''
            this.getSymptom()
          })
          .catch(err => {
            this.error_message = err.response.data.errors
          })
    },
    editSymptom: function (data){
      this.edit_symptom = data
      this.is_create = false
    },
    updateSymptom: function (id){
      let formData = new FormData(this.$refs.editSymptom)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('symptom/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.editSymptom.reset()
            this.edit_symptom = ''
            this.is_create= true
            this.getSymptom()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteSymptom : function (id){
      axios.delete(this.getUrl('symptom/'+id))
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.getSymptom()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    }
  },
  mounted() {
    this.getSymptom()
    this.getSymptomCategories()
  }
}
</script>

<style scoped>

</style>