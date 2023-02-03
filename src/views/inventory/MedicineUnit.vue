<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="d-flex mb-3 align-items-center justify-content-between">
          <p class="text-title mb-0">Medicine Unit List</p>
          <button @click="is_create = true" class="btn btn-sm btn-primary">
            Add Unit
            <i class="fa-solid fa-plus ms-2"></i>
          </button>
        </div>
      </div>

      <div v-if="is_create == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 shadow-sm border-0 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-normal mb-3 text-secondary mb-0">Create {{medicine.name}} Unit</h6>
              <button @click="is_create = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="createUnit">
              <input name="medicine_id" type="hidden" :value="this.$route.query.id">
              <text-area label-name="Code" rows="1" name="code"></text-area>
              <text-area label-name="Name" rows="1" name="name"></text-area>
              <Input label-name="Current Qty" type="number" placeholder="0" name="current_qty"></Input>
              <Input label-name="Reorder Qty" type="number" placeholder="0" name="reorder_qty"></Input>
              <Input label-name="Purchase Price" type="number" placeholder="0" name="purchase_price"></Input>
              <Input label-name="Selling Price" type="number" placeholder="0" name="selling_price"></Input>
              <text-area label-name="Description" name="description"></text-area>
              <button @click="storeUnit" class="w-100 btn btn-primary btn-sm">Save</button>
            </form>
          </div>
        </div>
      </div>
      <div v-if="is_edit == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 shadow-sm border-0 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-normal mb-3 text-secondary mb-0">Edit {{medicine.name}} Unit</h6>
              <button @click="is_edit = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="editUnit">
              <text-area label-name="Code" rows="1" name="code" :value="edit_unit.code"></text-area>
              <text-area label-name="Name" rows="1" name="name" :value="edit_unit.name"></text-area>
              <text-area label-name="Current Qty" rows="1" name="current_qty" :value="edit_unit.current_qty"></text-area>
              <text-area label-name="Reorder Qty" rows="1" name="reorder_qty" :value="edit_unit.reorder_qty"></text-area>
              <text-area label-name="Purchase Price" rows="1" name="purchase_price" :value="edit_unit.purchase_price"></text-area>
              <text-area label-name="Selling Price" rows="1" name="selling_price" :value="edit_unit.selling_price"></text-area>
              <text-area label-name="Description" name="description" :value="edit_unit.description"></text-area>
              <button @click="updateUnit(edit_unit.id)" class="w-100 btn btn-success btn-sm">Update</button>
            </form>
          </div>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <div v-if="is_create == false && is_edit == false">
          <div class="card p-0 border-0">
            <table class="table">
              <thead>
              <tr>
                <th class="text-center">#</th>
                <th class="text-center">Code</th>
                <th class="text-center">Name</th>
                <th class="text-center">Current Qty</th>
                <th class="text-center">Reorder Qty</th>
                <th class="text-center">Purchase Price</th>
                <th class="text-center">Selling Price</th>
                <th class="text-center">Description</th>
                <th class="text-center">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr class="text-center" v-for="(unit,index) in units">
                <td >{{index + 1}}</td>
                <td >{{unit.code}}</td>
                <td >{{unit.name}}</td>
                <td >{{unit.current_qty}}</td>
                <td >{{unit.reorder_qty}}</td>
                <td >{{unit.purchase_price}}</td>
                <td >{{unit.selling_price}}</td>
                <td >{{unit.description}}</td>
                <td >
                  <div class="mt-2 d-flex gap-4 align-items-center justify-content-center">
                    <i @click="editUnit(unit)" type="button" class="fa-solid fa-pen text-warning"></i>
                    <i @click="deleteUnit(unit.id)" type="button" class="fa-solid fa-trash text-danger"></i>
                  </div>

                </td>
              </tr>
              </tbody>
            </table>
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
  name: "MedicineUnit",
  components: {TextArea, Input, Select, Master},
  data() {
    return {
      is_create : false,
      is_edit : false,
      medicine : {},
      units : {},
      subcategories : {},
      edit_unit : {},
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getMedicine: function (){
      axios.get(this.getUrl('medicine/'+this.$route.query.id))
      .then(res=>{
        this.medicine = res.data.data
        this.units = this.medicine.units
      })
      .catch(err=>{
        console.log(err)
      })
    },
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
    storeUnit: function (){
      let formData = new FormData(this.$refs.createUnit)
      axios.post(this.getUrl('medicine-unit'),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.createUnit.reset()
            this.is_create = false
            this.getMedicine()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    editUnit: function (data){
      this.edit_unit = data
      this.is_edit = true
    },
    updateUnit: function (id){
      let formData = new FormData(this.$refs.editUnit)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('medicine-unit/'+id),formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.editUnit.reset()
            this.edit_unit = ''
            this.is_edit= false
            this.getMedicine()
          })
          .catch(err=>{
            this.$store.dispatch('showErrorAlert')
          })
    },
    deleteUnit: function(id){
      axios.delete(this.getUrl('medicine-unit/'+id))
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.getMedicine()
      })
      .catch(err=>{
        this.$store.dispatch('showErrorAlert')
      })
    }
  },
  mounted() {
    this.getMedicine()
  }
}
</script>

<style scoped>

</style>