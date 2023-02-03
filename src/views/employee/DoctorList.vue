<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="text-secondary mb-0">Doctor Lists</h6>
          <button @click="isCreate = true" class="btn btn-sm btn-primary">Create Doctor <i class="fa-solid fa-plus ms-2"></i></button>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="isCreate == true" class="row">
        <div class="col-4 m-auto">
          <div class="card mb-3 rounded p-3 shadow-sm border-0">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="text-secondary mb-0">Create Doctor</h5>
              <button @click="isCreate = false" class="btn-close"></button>
            </div>
            <div class="">
              <form @submit.prevent="" ref="storeEmployee">
                <text-area name="name" label-name="Name" rows="1" :error-message="error_message"></text-area>
                <div class="row">
                  <div class="col-6">
                    <Input type="number" name="age" label-name="Age" :error-message="error_message"></Input>

                  </div>
                  <div class="col-6">
                    <Input type="date" name="date_of_birth" label-name="Date of Birth" :error-message="error_message"></Input>

                  </div>
                </div>
                <label class="form-label small text-secondary">Gender</label>
                <div class="mb-3">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="0">
                    <label class="form-check-label text-secondary small" for="inlineRadio1">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="1">
                    <label class="form-check-label text-secondary small" for="inlineRadio2">Female</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <text-area name="title" label-name="Title" rows="1" :error-message="error_message"></text-area>
                  </div>
                  <div class="col-6">
                    <text-area name="department" label-name="Department" rows="1" :error-message="error_message"></text-area>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <text-area name="email" label-name="Email" rows="1" :error-message="error_message"></text-area>
                  </div>
                  <div class="col-6">
                    <Input type="number" name="phone" label-name="Phone" :error-message="error_message"></Input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <text-area name="position" label-name="Position" rows="1" :error-message="error_message"></text-area>
                  </div>
                  <div class="col-6">
                    <text-area name="specialization" label-name="Specialization" rows="1" :error-message="error_message"></text-area>
                  </div>
                </div>
                <text-area name="address" label-name="Address" rows="2" :error-message="error_message"></text-area>
                <text-area name="description" label-name="Description" rows="2" :error-message="error_message"></text-area>
                <button @click="storeDoctor" class="btn btn-sm w-100 btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isCreate == false" class="row">
      <div class="col-12">
        <div class="card mb-3 p-0 border-0">
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Name</th>
              <th class="text-center">Age</th>
              <th class="text-center">Gender</th>
              <th class="text-center">Phone</th>
              <th class="text-center">Email</th>
              <th class="text-center">Position</th>
              <th class="text-center">Department</th>
              <th class="text-center">Address</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employees">
              <td class="text-center">{{employee.id}}</td>
              <td class="">{{employee.name}}</td>
              <td class="text-center">{{employee.age}}</td>
              <td class="text-center">{{employee.gender}}</td>
              <td class="text-center">{{employee.phone}}</td>
              <td class="">{{employee.email}}</td>
              <td class="">{{employee.position}}</td>
              <td class="">{{employee.department}}</td>
              <td class="">{{employee.address}}</td>
              <td class="d-flex justify-content-center">
                <button @click="employeeDetail(employee.id)" class="btn btn-primary btn-sm">
                  Detail
                </button>
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
import SideNav from "@/components/layout/SideNav";
import Master from "@/components/Master";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import {mapGetters} from "vuex";
import axios from "axios";
import router from "@/router";
export default {
  name: "DoctorList",
  components: {TextArea, Input, Master, SideNav},
  data() {
    return {
      isEdit: false,
      isCreate: false,
      error_message: {},
      employees: {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getEmployee: function (){
      axios.get(this.getUrl('employee'))
      .then(res=>{
        this.employees = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    storeDoctor: function () {
      let formData = new FormData(this.$refs.storeEmployee)
      axios.post(this.getUrl('employee'), formData)
          .then(res =>{

            this.$refs.storeEmployee.reset()
            this.$store.dispatch('showSuccessAlert')
            this.isCreate = false
            this.getEmployee()

          })
          .catch(err => {
            console.log(err)
          });
    },
    employeeDetail: function (id){
      router.push({path: '/employee/detail/'+id,query: {id:id}})
    }
  },
  mounted() {
    this.getEmployee()
  }
}
</script>

<style scoped>

</style>