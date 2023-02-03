<template>
  <Master>
    <div class="col-12 m-auto">
      <div class="d-flex mb-3 align-items-center justify-content-between align-items-center">
        <p class="text-title mb-0">Patient Lists</p>
        <button @click="is_create = true" class="btn btn-sm btn-primary">Add Patient <i class="fa-solid fa-plus ms-2"></i></button>
      </div>
      <div v-if="is_create == true" class="row">
        <div class="col-4 m-auto">
          <div class="card p-3 mb-3 border-0">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="mb-0 text-secondary">Patient Register</h6>
              <button @click="is_create = false" class="btn btn-close"></button>
            </div>
            <form @submit.prevent="" ref="patient">
              <div class="mb-3">
                <div class="row">
                  <div class="col-6 m-auto">
                    <div class="mb-3 ">
<!--                      <label class="form-label text-secondary mb-1">Patient Type</label>-->
                      <div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="type"  value="0">
                          <label class="form-check-label text-secondary fw-bold">IP</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="type" value="1">
                          <label class="form-check-label text-secondary fw-bold" >OP</label>
                        </div>
                      </div>
                      <span v-if="error_message.type" style="font-size: 12px;" class="text-danger">{{error_message.type[0]}}</span>
                    </div>
                  </div>
                </div>

                <text-area name="name" label-name="Name" rows="1" :error-message="error_message.name"></text-area>
                <div class="row">
                  <div class="col-6">
                    <Input name="age" label-name="Age" type="number" :error-message="error_message.age"></Input>
                  </div>
                  <div class="col-6">
                    <Input name="date_of_birth" label-name="Date of Birth" type="date" ></Input>

                  </div>
                </div>
                <label class="form-label text-secondary small">Gender</label>
                <div class="mb-3">
                  <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="0">
                      <label class="form-check-label text-secondary small" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="1">
                      <label class="form-check-label text-secondary small" for="inlineRadio2">Female</label>
                    </div>
                  </div>
                  <span v-if="error_message.gender" style="font-size: 12px;" class="text-danger ">{{error_message.gender[0]}}</span>
                </div>
<!--                <Input name="emergency_phone" label-name="Home Phone" type="number"></Input>-->
                <div class="row">
                  <div class="col-6">
                    <Input name="phone" label-name="Phone" type="number" :error-message="error_message.phone"></Input>
                  </div>
                  <div class="col-6">
                    <Input name="work_phone" label-name="Work Phone ( Optional )" type="number"></Input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <text-area name="nrc" label-name="NRC" rows="1" :error-message="error_message.nrc"></text-area>
                  </div>
                  <div class="col-6">
                    <text-area name="ethnicity" label-name="Ethnicity" rows="1" :error-message="error_message.ethnicity"></text-area>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <text-area name="occupation" label-name="Occupation ( Optional )" rows="1" ></text-area>
                  </div>
                  <div class="col-6">
                    <text-area name="nationality" label-name="Nationality" rows="1" :error-message="error_message.nationality"></text-area>
                  </div>
                </div>
                <text-area name="address" label-name="Address" rows="2" :error-message="error_message.address"></text-area>
                <button @click="storePatient()" class="btn btn-sm w-100 btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div v-if="is_create == false" class="card p-0 mb-3 border-0">
        <div>
          <table class="table table-hover">
            <thead class="">
              <tr>
                <th class="text-center">#</th>
                <th class="text-center">ID</th>
                <th class="text-center">Type</th>
                <th class="text-center">Name</th>
                <th class="text-center">Age</th>
                <th class="text-center">Gender</th>
                <th class="text-center">Date of Birth</th>
                <th class="text-center">Phone</th>
                <th class="text-center">Address</th>
                <th class="text-center">Action</th>
             </tr>
            </thead>
            <tbody>
            <tr v-for="patient in patients">
              <td class="text-center">{{patient.id}}</td>
              <td class="">{{patient.patient_id}}</td>
              <td class="">{{patient.type_name}}</td>
              <td class="">{{patient.name}}</td>
              <td class="text-center">{{patient.age}}</td>
              <td class="text-center">{{patient.gender}}</td>
              <td class="text-center">{{patient.date_of_birth}}</td>
              <td class="">{{patient.phone}}</td>
              <td class="">{{patient.address}}</td>
              <td class="text-center">
                <button @click="patientDetail(patient.id)" class="btn btn-primary btn-sm">Detail <i class="fa-solid fa-info-circle ms-2"></i></button>
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
      is_create : false,
      error_message : {},
      patients : {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getPatients: function () {
      axios.get(this.getUrl('patient'))
          .then(res =>{
            this.patients = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    patientDetail: function (id){
      router.push({path: 'patient/detail/'+id ,query: {id: id}})
    },
    patientRegister : function (){
      router.push('/patientRegister')
    },
    storePatient() {
      let formData = new FormData(this.$refs.patient)
      axios.post(this.getUrl('patient'), formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.patient.reset()
            this.is_create = false
            this.error_message = ''
            this.getPatients()
          })
          .catch(err => {
            this.error_message = err.response.data.errors
          })
    }
  },
  mounted() {
    this.getPatients()
  }
}
</script>

<style scoped>

</style>