<template>
  <Master>
    <div class="row">
      <div class="col-10  m-auto">
        <div class="d-flex mb-3 align-items-center justify-content-between">
          <p class="text-title mb-0">Brand Lists</p>
          <button @click="is_create = true" class="btn btn-sm btn-primary">
            Add Brand
            <i class="fa-solid fa-plus ms-2"></i>
          </button>
        </div>
      </div>

      <div v-if="is_create == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 shadow-sm border-0 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-normal mb-3 text-secondary mb-0">Create Brand</h6>
              <button @click="is_create = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="createBrand">
              <text-area label-name="Name" rows="1" name="name"></text-area>
              <Select label-name="Choose Subcategory" option_name="Select Subcategory" name="subcategory_id">
                <option :value="subcategory.id" v-for="subcategory in subcategories">{{subcategory.name}}</option>
              </Select>
              <text-area label-name="Description" name="description"></text-area>
              <button @click="storeBrand" class="w-100 btn btn-primary btn-sm">Save</button>
            </form>
          </div>
        </div>
      </div>
      <div v-if="is_edit == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 shadow-sm border-0 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-normal mb-3 text-secondary mb-0">Edit Brand</h6>
              <button @click="is_edit = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="editBrand">
              <text-area label-name="Name" rows="1" name="name" :value="edit_brand.name"></text-area>
              <Select name="subcategory_id" option_name="Select Subcategory" label-name="Choose Subcategory">
                <option :selected="edit_brand.subcategory_id == subcategory.id" :value="subcategory.id" v-for="subcategory in subcategories">{{subcategory.name}}</option>
              </Select>
              <text-area label-name="Description" name="description" :value="edit_brand.description"></text-area>
              <button @click="updateBrand(edit_brand.id)" class="w-100 btn btn-success btn-sm">Update</button>
            </form>
          </div>
        </div>
      </div>
      <div v-if="is_create == false && is_edit == false" class="col-10 m-auto">
        <div class="card p-0 border-0">
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Name</th>
              <th class="text-center">Related Subcategory</th>
              <th class="text-center">Description</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="brand in brands">
              <td class="text-center">{{brand.id}}</td>
              <td class="">{{brand.name}}</td>
              <td class="">{{brand.subcategory_name}}</td>
              <td class="">{{brand.description}}</td>
              <td>
                <div class="d-flex mt-2 gap-4 align-items-center justify-content-center">
                  <i @click="editBrand(brand)" type="button" class="fa-solid fa-pen text-warning"></i>
                  <i @click="deleteBrand(brand.id)" type="button" class="fa-solid fa-trash text-danger"></i>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
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
  name: "Brand",
  components: {TextArea, Input, Select, Master},
  data() {
    return {
      is_create : false,
      is_edit : false,
      brands : {},
      subcategories : {},
      edit_brand : {},
    }

  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getBrand: function (){
      axios.get(this.getUrl('brand'))
          .then(res=>{
            this.brands = res.data.data
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
    storeBrand: function (){
      let formData = new FormData(this.$refs.createBrand)
      axios.post(this.getUrl('brand'),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.createBrand.reset()
            this.is_create = false
            this.getBrand()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    editBrand: function (data){
      this.edit_brand = data
      this.is_edit = true
    },
    updateBrand: function (id){
      let formData = new FormData(this.$refs.editBrand)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('brand/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.editBrand.reset()
            this.edit_brand = ''
            this.is_edit= false
            this.getBrand()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteBrand: function (id){
      axios.delete(this.getUrl('brand/'+id))
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.getBrand()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    }
  },
  mounted() {
    this.getSubcategory()
    this.getBrand()
  }

}
</script>

<style scoped>

</style>