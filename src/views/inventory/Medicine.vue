<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="d-flex mb-3 align-items-center justify-content-between">
          <p class="text-title mb-0">Medicine Lists</p>
          <button @click="is_create = true" class="btn btn-sm btn-primary">
            Add Medicine
            <i class="fa-solid fa-plus ms-2"></i>
          </button>
        </div>
      </div>

      <div v-if="is_create == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 shadow-sm border-0 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-normal mb-3 text-secondary mb-0">Create Medicine</h6>
              <button @click="is_create = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="createMedicine">
              <text-area label-name="Code" rows="1" name="code"></text-area>
              <text-area label-name="Name" rows="1" name="name"></text-area>
              <Select label-name="Choose Brand" option_name="Select Brand" name="brand_id">
                <option :value="brand.id" v-for="brand in brands">{{brand.name}}</option>
              </Select>
              <text-area label-name="Description" name="description"></text-area>
              <button @click="storeMedicine" class="w-100 btn btn-primary btn-sm">Save</button>
            </form>
          </div>
        </div>
      </div>
      <div v-if="is_edit == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 shadow-sm border-0 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-normal mb-3 text-secondary mb-0">Edit Medicine</h6>
              <button @click="is_edit = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="editMedicine">
              <text-area label-name="Code" rows="1" name="code" :value="edit_medicine.code"></text-area>
              <text-area label-name="Name" rows="1" name="name" :value="edit_medicine.name"></text-area>
              <Select label-name="Choose Brand" option_name="Select Brand" name="brand_id">
                <option :selected="edit_medicine.brand_id == brand.id" :value="brand.id" v-for="brand in brands">{{brand.name}}</option>
              </Select>
              <text-area label-name="Description" name="description" :value="edit_medicine.description"></text-area>
              <button @click="updateMedicine(edit_medicine.id)" class="w-100 btn btn-success btn-sm">Update</button>
            </form>
          </div>
        </div>
      </div>
      <div v-if="is_create == false && is_edit == false" class="col-10 m-auto">
        <div class="card p-0 border-0">
          <table class="table">
            <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Code</th>
              <th class="text-center">Name</th>
              <th class="text-center">Related Brand</th>
              <th class="text-center">Description</th>
              <th class="text-center">Unit List</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="medicine in medicines">
              <td class="text-center">{{medicine.id}}</td>
              <td class="text-center">{{medicine.code}}</td>
              <td class="">{{medicine.name}}</td>
              <td class="">{{medicine.brand_name}}</td>
              <td class="">{{medicine.description}}</td>
              <td class="text-center">
                <button @click="checkUnit(medicine.id)" class="btn btn-primary p-1 btn-sm">
                  <span style="font-size: 12px;">Check</span>
                </button>
              </td>
              <td>
                <div class="d-flex mt-2 m-auto gap-4 align-items-center justify-content-center">
                  <i @click="editMedicine(medicine)" type="button" class="fa-solid fa-pen text-warning"></i>
                  <i @click="deleteMedicine(medicine.id)" type="button" class="fa-solid fa-trash text-danger"></i>
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
import router from "@/router";

export default {
  name: "Medicine",
  components: {TextArea, Input, Select, Master},
  data() {
    return {
      is_create : false,
      is_edit : false,
      brands : {},
      medicines : {},
      subcategories : {},
      edit_medicine : {},
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
    getMedicine: function (){
      axios.get(this.getUrl('medicine'))
          .then(res=>{
            this.medicines = res.data.data
          })
          .catch(err=>{
            console.log(err)
          })
    },
    storeMedicine: function (){
      let formData = new FormData(this.$refs.createMedicine)
      axios.post(this.getUrl('medicine'),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.createMedicine.reset()
            this.is_create = false
            this.getMedicine()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    editMedicine: function (data){
      this.edit_medicine = data
      this.is_edit = true
    },
    updateMedicine: function (id){
      let formData = new FormData(this.$refs.editMedicine)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('medicine/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.editMedicine.reset()
            this.edit_medicine = ''
            this.is_edit= false
            this.getMedicine()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteMedicine: function(id){
      axios.delete(this.getUrl('medicine/'+id))
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.getMedicine()
      })
      .catch(err=>{
        this.$store.dispatch('showErrorAlert')
      })
    },
    checkUnit: function (id){
      router.push({path: '/medicineUnit',query: {id: id}})
    }

  },
  mounted() {
    this.getBrand()
    this.getMedicine()
  }
}
</script>

<style scoped>

</style>