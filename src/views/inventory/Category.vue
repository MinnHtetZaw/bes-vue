<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <h5 class="text-secondary mb-3">Category Lists</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="row">
          <div class="col-9">
            <div class="card mb-3 p-0 border-0">
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
                <tr class="text-center" v-for="category in categories">
                  <td class="text-center">{{category.id}}</td>
                  <td class="">{{category.name}}</td>
                  <td class="">{{category.description}}</td>
                  <td>
                    <div class="d-flex mt-2 gap-4 align-items-center justify-content-center">
                      <i @click="editCategory(category)" type="button" class="fa-solid fa-pen text-warning"></i>
                      <i @click="deleteCategory(category.id)" type="button" class="fa-solid fa-trash text-danger"></i>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-3">
            <div v-if="is_create == true" class="card p-3  border-0 ">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="fw-normal mb-3 text-secondary mb-0">Create Category</h6>
              </div>
              <form @submit.prevent="" ref="createCategory">
                <text-area label-name="Name" rows="1" name="name"></text-area>
                <text-area label-name="Description" name="description"></text-area>
                <button @click="storeCategory" class="w-100 btn btn-primary btn-sm">Save</button>
              </form>
            </div>

            <div v-if="is_create == false" class="card p-3 shadow-sm border-0 rounded">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="fw-normal mb-3 text-secondary mb-0">Edit Category</h6>
              </div>
              <form @submit.prevent="" ref="editCategory">
                <text-area label-name="Name" rows="1" name="name" :value="edit_category.name"></text-area>
                <text-area label-name="Description" name="description" :value="edit_category.description"></text-area>
                <div class="d-flex justify-content-center gap-3">
                  <button @click="is_create = true" class="btn btn-danger btn-sm">Cancel</button>
                  <button @click="updateCategory(edit_category.id)" class="btn btn-success btn-sm">Update</button>
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
import Master from "@/components/Master";
import Select from "@/components/form-element/Select";
import {mapGetters} from "vuex";
import axios from "axios";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import router from "@/router";
export default {
  name: "Category",
  components: {TextArea, Input, Select, Master},
  data() {
    return {
      is_create : true,
      categories : {},
      edit_category : {},
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
    storeCategory: function (){
      let formData = new FormData(this.$refs.createCategory)
      axios.post(this.getUrl('category'),formData)
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.$refs.createCategory.reset()
        this.getCategory()
      })
      .catch(err=>{
        this.$store.dispatch('showErrorAlert')
      })
    },
    editCategory: function (data){
      this.edit_category = data
      this.is_create = false
    },
    updateCategory: function (id){
      let formData = new FormData(this.$refs.editCategory)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('category/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.editCategory.reset()
            this.edit_category = ''
            this.is_create= true
            this.getCategory()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteCategory : function (id){
      axios.delete(this.getUrl('category/'+id))
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.getCategory()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    }
  },
  mounted() {
    this.getCategory()
  }
}
</script>

<style scoped>
.custom-modal{
  width: 300px;
  height: 400px;
  padding: 15px;
  backdrop-filter: blur();
}
</style>