<template>
<Master>
  <div class="row">
    <div class="col-2">
      <div class="card rounded shadow-sm p-3 border-0">
        <div class="d-flex justify-content-center">
          <div>
            <img class="mb-3" src="../../assets/bes-logo.jpg" style="width: 150px;height: 150px;" alt="">
          </div>
        </div>

        <h6 class="fw-normal text-center">{{employee.name}}</h6>
        <p class="fw-normal text-center">{{employee.title}}</p>
        <div>
          <div class="row">
            <div class="col-6"><p>Age</p></div>
            <div class="col-6"><p>{{employee.age}}</p></div>
          </div>
          <div class="row">
            <div class="col-6"><p>Phone</p></div>
            <div class="col-6"><p>{{employee.phone}}</p></div>
          </div>
          <div class="row">
            <div class="col-6"><p>Date of Birth</p></div>
            <div class="col-6"><p>{{employee.date_of_birth}}</p></div>
          </div>
          <div class="row">
            <div class="col-6"><p>Gender</p></div>
            <div class="col-6"><p>{{employee.gender}}</p></div>
          </div>
          <div class="row">
            <div class="col-6"><p>Position</p></div>
            <div class="col-6"><p>{{employee.position}}</p></div>
          </div>
          <div class="row">
            <div class="col-6"><p>Department</p></div>
            <div class="col-6"><p>{{employee.department}}</p></div>
          </div>
          <div class="row">
            <div class="col-6"><p>Address</p></div>
            <div class="col-6"><p>{{employee.address}}</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-10">
      <div class="row">
        <div class="col-6">
          <div class="card border-0 p-3 shadow-sm rounded">
            <h6 class="fw-normal text-secondary">Treatment List</h6>
            <table class="table table-sm table-striped table-hover table-borderless">
              <thead>
              <tr>
                <td class="text-center fw-normal text-secondary">Date</td>
                <td class="text-center fw-normal text-secondary">Patient</td>
                <td class="text-center fw-normal text-secondary">Diagnosis</td>
                <td class="text-center fw-normal text-secondary">Note</td>
                <td class="text-center fw-normal text-secondary">Action</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="treatment in treatments">
                <td>{{treatment.date}}</td>
                <td>{{treatment.patient_name}}</td>
                <td>{{treatment.diagnosis}}</td>
                <td>{{treatment.note_excerpt}}</td>
                <td>
                  <button class="btn btn-primary btn-sm">Action</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-3">
          <div class="card border-0 p-3 shadow-sm rounded">
            <h6 class="fw-normal text-secondary">Reports</h6>

          </div>
        </div>
        <div class="col-3">
          <div class="card border-0 p-3 shadow-sm rounded">
            <h6 class="fw-normal mb-3 text-secondary">Appointment</h6>
            <div>
              <v-date-picker
                  @dayclick="getDate()"
                 color="teal"
                  is-dark
                 v-model="date" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</Master>
</template>

<script>
import Master from "@/components/Master";
import {mapGetters} from "vuex";
import axios from "axios";
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
export default {
  name: "DoctorDetail",
  components: {Master},
  data() {
    return {
      employee: '',
      treatments: '',
      date: '',
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getDoctor: function () {
      axios.get(this.getUrl('doctor/'+this.$route.query.id))
      .then(res=>{
        this.employee = res.data.data
        this.treatments = res.data.data.treatments
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getDate: function (v){
      alert('hello')
    }
  },
  mounted() {
    this.getDoctor()
  }
}
</script>

<style scoped>

</style>