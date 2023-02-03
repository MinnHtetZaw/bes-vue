<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <p class="text-title mb-3">Symptom Category Lists</p>
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
              <th class="text-center">Description</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="symptom_category in symptom_categories">
              <td>{{symptom_category.id}}</td>
              <td>{{symptom_category.name}}</td>
              <td>{{symptom_category.description}}</td>
              <td>
                <div class="d-flex mt-2 gap-4 align-items-center justify-content-center">
                  <i @click="editSymptomCategory(symptom_category)" type="button" class="fa-solid fa-pen text-warning"></i>
                  <i @click="deleteSymptomCategory(symptom_category.id)" type="button" class="fa-solid fa-trash text-danger"></i>
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
            <p class="text-subtitle mb-0">Create Symptom Category</p>
          </div>
          <form @submit.prevent="" ref="storeSymptomCategory">
            <text-area label-name="Name" rows="1" name="name"></text-area>
            <text-area label-name="Description" name="description"></text-area>
            <button @click="storeSymptomCategory" class="w-100 btn btn-primary btn-sm">Save</button>
          </form>
        </div>

        <div v-if="is_create == false" class="card p-3 shadow-sm border-0 rounded">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="fw-normal mb-3 text-secondary mb-0">Edit Symptom Category</h6>
          </div>
          <form @submit.prevent="" ref="editSymptomCategory">
            <text-area label-name="Name" rows="1" name="name" :value="edit_symptom_category.name"></text-area>
            <text-area label-name="Description" name="description" :value="edit_symptom_category.description"></text-area>
            <div class="d-flex justify-content-center gap-3">
              <button @click="is_create = true" class="btn btn-danger btn-sm">Cancel</button>
              <button @click="updateSymptomCategory(edit_symptom_category.id)" class="btn btn-success btn-sm">Update</button>
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
export default {
  name: "PatientList",
  components: {Master,TextArea, Input},
  data() {
    return {
      is_create : true,
      error_message : {},
      symptom_categories : {},
      edit_symptom_category : {}
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getSymptomCategories: function () {
      axios.get(this.getUrl('symptom-category'))
          .then(res =>{
            this.symptom_categories = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    storeSymptomCategory() {
      let formData = new FormData(this.$refs.storeSymptomCategory)
      axios.post(this.getUrl('symptom-category'), formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.storeSymptomCategory.reset()
            this.error_message = ''
            this.getSymptomCategories()
          })
          .catch(err => {
            this.error_message = err.response.data.errors
          })
    },
    editSymptomCategory: function (data){
      this.edit_symptom_category = data
      this.is_create = false
    },
    updateSymptomCategory: function (id){
      let formData = new FormData(this.$refs.editSymptomCategory)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('symptom-category/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.editSymptomCategory.reset()
            this.edit_symptom_category = ''
            this.is_create= true
            this.getSymptomCategories()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteSymptomCategory : function (id){
      axios.delete(this.getUrl('symptom-category/'+id))
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.getSymptomCategories()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    }
  },
  mounted() {
    this.getSymptomCategories()
  }
}
</script>

<style scoped>

</style>