<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="d-flex mb-3 justify-content-between align-items-center">
          <h6 class="text-secondary mb-0">Appointment List</h6>
          <button @click="is_create = true" class="btn btn-sm btn-primary">
            Add Appointment <i class="fa-solid fa-plus ms-2"></i>
          </button>

        </div>
      </div>
    </div>
    <div v-if="is_create == true" class="row">
      <div class="col-4 m-auto">
        <div class="card mb-3 border-0 p-3">
          <div class="d-flex mb-3 justify-content-between align-items-center">
            <h6 class="text-secondary mb-0">Create Appointment</h6>
            <button @click="is_create = false" class="btn btn-close"></button>
          </div>
          <div>
            <form @submit.prevent="" ref="storeAppointment">
              <Select name="patient_id" label-name="Choose Patient" option_name="Select Patient">
                <option :value="patient.id" v-for="patient in patients">{{patient.name}}</option>
              </Select>
              <Select name="doctor_id" label-name="Choose Doctor" option_name="Select Doctor">
                <option :value="doctor.id" v-for="doctor in doctors">{{doctor.name}}</option>
              </Select>
              <Input type="date" label-name="Date" name="date"></Input>
              <div class="row">
                <div class="col-6">
                  <Input type="time" label-name="Start Time" name="start"></Input>
                </div>
                <div class="col-6">
                  <Input type="time" label-name="End Time" name="end"></Input>
                </div>
                <text-area name="description" label-name="Description" rows="3"></text-area>
              </div>
              <button @click="storeAppointment" class="btn btn-sm btn-primary w-100">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="is_edit == true" class="row">
      <div class="col-4 m-auto">
        <div class="card mb-3 border-0 p-3">
          <div class="d-flex mb-3 justify-content-between align-items-center">
            <h6 class="text-secondary mb-0">Create Appointment</h6>
            <button @click="is_edit = false" class="btn btn-close"></button>
          </div>
          <div>
            <form @submit.prevent="" ref="updateAppointment">
              <Select name="patient_id" label-name="Choose Patient" option_name="Select Patient">
                <option :selected="editappointment.patient_id == patient.id " :value="patient.id" v-for="patient in patients">{{patient.name}}</option>
              </Select>
              <Select name="doctor_id" label-name="Choose Doctor" option_name="Select Doctor">
                <option :selected="editappointment.doctor_id == doctor.id" :value="doctor.id" v-for="doctor in doctors">{{doctor.name}}</option>
              </Select>
              <Input type="date" label-name="Date" name="date" :value="editappointment.date"></Input>

              <div class="row">
                <div class="col-6">
                  <Input type="time" label-name="Start Time" name="start" :value="editappointment.start "></Input>
                </div>
                <div class="col-6">
                  <Input type="time" label-name="End Time" name="end" :value="editappointment.end"></Input>
                </div>
                <text-area name="description" label-name="Description" rows="3" :value="editappointment.description"></text-area>
              </div>
              <button @click="updateAppointment(editappointment.id)" class="btn btn-sm btn-primary w-100">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-if="is_edit == false && is_create == false" class="col-10 m-auto">
        <div class="card p-0 border-0">
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="text-secondary text-center">Date</th>
              <th class="text-secondary text-center">Patient Name</th>
              <th class="text-secondary text-center">Time</th>
              <th class="text-secondary text-center">Doctor</th>
              <th class="text-secondary text-center">Record</th>
              <th class="text-secondary text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="appointment in appointments">
              <td >{{appointment.date}}</td>
              <td >{{appointment.patient_name}}</td>
              <td >{{appointment.start}} to {{appointment.end}}</td>
              <td >{{appointment.doctor_name}}</td>
              <td >
                <button @click="treatment(appointment.patient_id)" class="btn btn-sm btn-primary">Add Record <i class="fa-solid fa-plus ms-2"></i></button>
              </td>
              <td class="">
                <div class="d-flex justify-content-center gap-3 align-items-center mt-2">
                  <i @click="editAppointment(appointment)" type="button" class="fa-solid fa-pen text-warning"></i>
                  <i @click="deleteAppointment(appointment.id)" type="button" class="fa-solid fa-trash text-danger"></i>
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
import Master from "@/components/Master";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import Select from "@/components/form-element/Select";
import {mapGetters} from "vuex";
import axios from "axios";
import router from "@/router";
export default {
  name: "Appointment",
  components: {Select, TextArea, Input, Master},
  data() {
    return {
      is_create : false,
      is_edit: false,
      patients: {},
      doctors: {},
      appointments: {},
      editappointment :{},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getPatients() {
      axios.get(this.getUrl('patient'))
      .then(res=>{
        this.patients = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getDoctors() {
      axios.get(this.getUrl('employee'))
      .then(res=>{
        this.doctors = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getAppointments() {
      axios.get(this.getUrl('appointment'))
      .then(res=>{
        this.appointments = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    storeAppointment: function (){
      let formData = new FormData(this.$refs.storeAppointment)
      axios.post(this.getUrl('appointment'),formData)
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.getAppointments()
        this.is_create = false
      })
      .catch(err=>{
        console.log(err)
      })
    },
    treatment: function (id){
      router.push({path: '/treatment',query: {id : id}})
    },
    deleteAppointment: function(id){
      axios.delete(this.getUrl('appointment/'+id))
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.getAppointments()
      })
      .catch(err=>{
        console.log(err)
      })
    },
    editAppointment: function(data){
      this.editappointment=data
      this.is_edit= true
    },
    updateAppointment: function(id){
      let formData = new FormData(this.$refs.updateAppointment)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('appointment/'+id),formData)
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.$refs.updateAppointment.reset()
        this.editappointment=''
        this.is_edit=false
        this.getAppointments()
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getPatients()
    this.getDoctors()
    this.getAppointments()
  }
}
</script>

<style scoped>

</style>