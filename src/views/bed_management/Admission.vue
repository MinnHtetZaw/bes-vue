<template>
<Master>
  <div class="row">
    <div class="col-10 m-auto">
      <p class="text-title mb-3">Admission Lists</p>
    </div>
  </div>
  <div class="row">
    <div class="col-10 m-auto">
      <div class="card mb-3 p-0 border-0">
        <table class="table table-hover">
          <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Date</th>
            <th class="text-center">Time</th>
            <th class="text-center">Patient ID</th>
            <th class="text-center">Patient Name</th>
            <th class="text-center">Assign Doctor</th>
            <th class="text-center">Bed ID</th>
            <th class="text-center">Status</th>
            <th class="text-center">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="admission in admissions">
            <td class="text-center">{{admission.id}}</td>
            <td class="text-center">{{admission.date}}</td>
            <td class="text-center">{{admission.time}}</td>
            <td class="text-center">{{admission.patient_ID}}</td>
            <td class="text-center">{{admission.patient_name}}</td>
            <td class="text-center">{{admission.doctor_name}}</td>
            <td class="text-center">{{admission.bed_name}}</td>
            <td class="text-center">{{admission.status_name}}</td>
            <td class="">
              <div class="d-flex justify-content-center">
                <div class="btn-group btn-group-sm">
                  <button @click="admissionDetail(admission.id)" class="btn btn-outline-primary btn-sm">
                    <i class="fa-solid fa-info-circle"></i>
                  </button>
                  <button class="btn btn-outline-primary btn-sm" data-bs-toggle="offcanvas" :data-bs-target="'#transfer'+admission.id" aria-controls="transfer">
                    <i class="fa-solid fa-arrow-right-arrow-left" title="Transfer "></i>
                  </button>
                </div>
              </div>
              <div class="offcanvas offcanvas-end" tabindex="-1" :id="'transfer'+admission.id" aria-labelledby="transferLabel">
                <div class="offcanvas-header">
                  <h5 class="text-secondary mb-0">Transfer <i class="fa-solid fa-arrow-right-arrow-left ms-3"></i></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body px-3">
                  <div>
                    <div class="row">
                      <div class="col-5"><p>Date:</p></div>
                      <div class="col-7"><p>{{admission.date}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-5"><p>Time:</p></div>
                      <div class="col-7"><p>{{admission.time}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-5"><p>Patient ID:</p></div>
                      <div class="col-7"><p>{{admission.patient_ID}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-5"><p>Name:</p></div>
                      <div class="col-7"><p>{{admission.patient_name}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-5"><p>Doctor:</p></div>
                      <div class="col-7"><p>{{admission.doctor_name}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-5"><p>Bed ID:</p></div>
                      <div class="col-7"><p>{{admission.bed_name}}</p></div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label text-secondary small">Current Bed ID</label>
                      <input type="text" class="form-control form-control-sm" name="" :value="admission.bed_name" readonly>
                    </div>
                    <div class="mb-3">
                      <label class="form-label text-secondary small">New Bed ID</label>
                      <select v-model="bed" class="form-select form-select-sm" id="">
                        <option value="">Select Bed ID</option>
                        <option :value="bed.id" v-for="bed in beds">{{bed.name}}</option>
                      </select>
                    </div>
                    <button @click="approveTransfer(admission.id)" class="btn btn-sm btn-primary w-100">Approve Transfer</button>
                  </div>
                </div>
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
import {mapGetters} from "vuex";
import axios from "axios";
import router from "@/router";
export default {
  name: "Admission",
  components: {Master},
  data() {
    return {
      admissions: {},
      beds: {},
      bed: '',
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getAdmission: function() {
      axios.get(this.getUrl('admission'))
          .then(res =>{
            this.admissions = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    getBeds: function (){
      axios.get(this.getUrl('bed'))
      .then(res => {
        this.beds = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    admissionDetail: function (id){
      router.push({path: '/admission/detail',query: {id: id}})
    },
    approveTransfer: function (id){
      let data = {
         bed_id : this.bed,
        _method : 'PATCH',
      }
      axios.post(this.getUrl('admission/'+id),data)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
      })
      .catch(err => {
        console.log(err)
        this.$store.dispatch('showErrorAlert')
      })
    },
  },
  mounted() {
    this.getAdmission()
    this.getBeds()
  }
}
</script>

<style scoped>
p{
  margin: 0;
}
.offcanvas{
  width: 300px;
}
</style>