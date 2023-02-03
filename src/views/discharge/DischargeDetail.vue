<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="card border-0 p-3">
          <h5 class="text-center mb-3 text-title">Hospital Discharge Information</h5>
          <div>
            <div class="">
              <div class="row">
                <div class="col-4">
                  <p>Patient ID</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.p_ID}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Patient Name</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.patient_name}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Approve Doctor</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.approve_doctor}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Room ID</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.room_ID}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Bed ID</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.bed_ID}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Discharge date</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.date}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Discharge Time</p>
                </div>
                <div class="col-6">
                  <p>{{discharge.time}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Master>
</template>

<script setup>

import Master from "@/components/Master";
import {ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {useRoute} from "vue-router";
const discharge = ref({})
const store = useStore()
const route = useRoute()
const getDischarge = () => {
  axios.get(store.getters.getUrl('discharge/'+route.query.id))
  .then(res => discharge.value = res.data.data)
  .catch(err => console.log(err))
}
getDischarge()

</script>

<style scoped>

</style>