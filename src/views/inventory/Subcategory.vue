<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <p class="text-title mb-3">Subcategory Lists</p>
      </div>
      <div v-if="is_create == true" class="row">
        <div class="col-3 m-auto">

        </div>
      </div>
      <div v-if="is_edit == true" class="row">
        <div class="col-3 m-auto">

        </div>
      </div>
      <div v-if="is_create == false && is_edit == false" class="col-10 m-auto">

      </div>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="row">
          <div class="col-9">
            <div class="card p-0 border-0">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">Name</th>
                  <th class="text-center">Related Category</th>
                  <th class="text-center">Description</th>
                  <th class="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-center" v-for="subcategory in subcategories">
                  <td class="text-center">{{subcategory.id}}</td>
                  <td class="">{{subcategory.name}}</td>
                  <td class="">{{subcategory.category_name}}</td>
                  <td class="">{{subcategory.description}}</td>
                  <td>
                    <div class="d-flex mt-2 gap-4 align-items-center justify-content-center">
                      <i @click="editSubCategory(subcategory)" type="button" class="fa-solid fa-pen text-warning"></i>
                      <i @click="deleteSubCategory(subcategory.id)" type="button" class="fa-solid fa-trash text-danger"></i>
                    </div>

                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-3">
            <div v-if="is_create === true" class="card p-3 shadow-sm border-0 rounded">
              <div class="">
                <h6 class="fw-normal mb-3 text-secondary mb-0">Create Subcategory</h6>
              </div>
              <form @submit.prevent="" ref="createSubcategory">
                <text-area label-name="Name" rows="1" name="name"></text-area>
                <Select label-name="Choose Category" option_name="Select Category" name="category_id">
                  <option :value="category.id" v-for="category in categories">{{category.name}}</option>
                </Select>
                <text-area label-name="Description" name="description"></text-area>
                <button @click="storeSubcategory" class="w-100 btn btn-primary btn-sm">Save</button>
              </form>
            </div>
            <div v-if="is_create === false" class="card p-3 shadow-sm border-0 rounded">
              <div class="">
                <h6 class="fw-normal mb-3 text-secondary mb-0">Edit Subcategory</h6>
              </div>
              <form @submit.prevent="" ref="updateSubcategory">
                <text-area label-name="Name" rows="1" name="name" :value="edit_subcategory.name"></text-area>
                <Select label-name="Choose Category" option_name="Select Category" name="category_id">
                  <option :selected="edit_subcategory.category_id === category.id" :value="category.id" v-for="category in categories">{{category.name}}</option>
                </Select>
                <text-area label-name="Description" name="description" :value="edit_subcategory.description"></text-area>
                <div class="d-flex justify-content-center align-items-center gap-4">
                  <button @click="is_create = true" class=" btn btn-danger btn-sm">Cancel</button>
                  <button @click="updateSubcategory(edit_subcategory.id)" class=" btn btn-success btn-sm">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Master>
</template>

<script>
import TextArea from "@/components/form-element/TextArea";
import Input from "@/components/form-element/Input";
import Select from "@/components/form-element/Select";
import Master from "@/components/Master";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "Subcategory",
  components: {TextArea, Input, Select, Master},
  data() {
    return {
      is_create : true,
      categories : {},
      subcategories : {},
      edit_subcategory : {},
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getCategory: function (){
      axios.get(this.getUrl('category'))
          .then(res=>{
            this.categories = res.data.data
          })
          .catch(err=>{
            console.log(err)
          })
    },
    getSubcategory: function (){
      axios.get(this.getUrl('subcategory'))
          .then(res=>{
            this.subcategories = res.data.data
          })
          .catch(err=>{
            console.log(err)
          })
    },
    storeSubcategory: function (){
      let formData = new FormData(this.$refs.createSubcategory)
      axios.post(this.getUrl('subcategory'),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.createSubcategory.reset()
            this.is_create = false
            this.getSubcategory()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    editSubCategory: function (data){
      this.edit_subcategory = data
      this.is_create = false
    },
    updateSubcategory: function (id){
      let formData = new FormData(this.$refs.updateSubcategory)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('subcategory/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.updateSubcategory.reset()
            this.edit_subcategory = ''
            this.is_create = true
            this.getSubcategory()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteSubCategory : function (id){
      axios.delete(this.getUrl('subcategory/'+id))
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.getSubcategory()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
  },
  mounted() {
    this.getCategory()
    this.getSubcategory()
  }

}
</script>

<style scoped>

</style>