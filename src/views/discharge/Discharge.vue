<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <p class="text-title mb-3">Discharge Lists</p>
      </div>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="card p-0 border-0">
          <table class="table table-hover">
            <thead>
              <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Time</th>
                <th class="text-center">Patient ID</th>
                <th class="text-center">Name</th>
                <th class="text-center">Approve Doctor</th>
                <th class="text-center">Bed ID</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="discharge in discharges">
              <td>{{discharge.date}}</td>
              <td>{{discharge.time}}</td>
              <td>{{discharge.p_ID}}</td>
              <td>{{discharge.patient_name}}</td>
              <td>{{discharge.approve_doctor}}</td>
              <td>{{discharge.bed_ID}}</td>
              <td>
                <div class="d-flex justify-content-center gap-3 align-center">
                  <button @click="detail(discharge.id)" class="btn btn-primary btn-sm">Detail</button>
                  <button @click="admissionPayment(discharge.id)" class="btn btn-primary btn-sm">Bill</button>
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
  name: "Discharge",
  components: {Master},
  data() {
    return {
      discharges: {}
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getDischarges: function () {
      axios.get(this.getUrl('discharge'))
      .then(res => {
        this.discharges = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    detail: function (id){
      router.push({path: '/discharge/detail',query: {id: id}})
    },
    admissionPayment: function (id){
      router.push({path: '/admission-payment',query: {id: id}})
    }
  },
  mounted() {
    this.getDischarges()
  }
}
</script>

<style scoped>

</style>