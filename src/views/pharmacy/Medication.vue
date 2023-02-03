<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <h6 class="text-secondary mb-3">Medication List</h6>
        <div v-if="is_detail == true" class="row">
          <div class="col-4 m-auto">
            <div class="mb-3 card border-0 p-3">
              <div class="d-flex justify-content-end">
                <button @click="is_detail = false" class="btn btn-close btn-sm"></button>
              </div>
              <div>
                <div class="row">
                  <div class="col-3">
                    <p>Date </p>
                  </div>
                  <div class="col-6">
                    <p>{{medication.date}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p>Patient ID </p>
                  </div>
                  <div class="col-6">
                    <p>{{medication.patient_ID}}</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-3">
                    <p>Patient Name </p>
                  </div>
                  <div class="col-6">
                    <p>{{medication.patient_name}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p>Doctor Name</p>
                  </div>
                  <div class="col-6">
                    <p>{{medication.doctor_name}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p>Doctor Note</p>
                  </div>
                  <div class="col-6">
                    <p>{{medication.note}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-10">
                    <table class="table ">
                      <thead>
                      <tr>
                        <th class="text-center text-secondary">Medicine</th>
                        <th class="text-center text-secondary">Total Qty</th>
<!--                        <th class="text-center text-secondary">Price</th>-->
<!--                        <th class="text-center text-secondary">Sub Total</th>-->
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="medicine in medication.medicines">
                        <td>{{medicine.name}}</td>
                        <td class="text-center">{{medicine.total_qty}}</td>
<!--                        <td class="text-center">{{medicine.selling_price}}</td>-->
<!--                        <td class="text-center">{{  medicine.total_price}}</td>-->
                      </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div v-else class="card mb-3 border-0 p-0">
          <table class="table table-hover">
            <thead>
              <tr>
                <th class="text-secondary text-center">#</th>
                <th class="text-secondary text-center">Date</th>
                <th class="text-secondary text-center">Patient ID</th>
                <th class="text-secondary text-center">Patient Name</th>
                <th class="text-secondary text-center">Doctor</th>
                <th class="text-secondary text-center">Note</th>
                <th class="text-secondary text-center">Status</th>
                <th class="text-secondary text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="medication in medications">
              <td class="text-center">{{medication.id}}</td>
              <td class="text-center">{{medication.date}}</td>
              <td class="text-center">{{medication.patient_ID}}</td>
              <td>{{medication.patient_name}}</td>
              <td>{{medication.doctor_name}}</td>
              <td style="width: 500px;">{{medication.note}}</td>
              <td class="text-center">
                <span v-if="medication.status == 0" class="badge bg-warning rounded-pill">{{medication.status_text}}</span>
                <span v-if="medication.status == 1" class="badge bg-info rounded-pill">{{medication.status_text}}</span>
                <span v-if="medication.status == 2" class="badge bg-success rounded-pill">{{medication.status_text}}</span>
              </td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                  <button @click="detailMedication(medication)" type="button" class="btn btn-outline-primary">Detail</button>
                    <button v-if="medication.status == '0'" @click="actionMedication(medication.id,'1')" type="button" class="btn btn-outline-primary">Approved</button>
                    <button v-if="medication.status == '1'" @click="actionMedication(medication.id,'2')" type="button" class="btn btn-outline-primary">Received</button>
                  <button type="button" class="btn btn-outline-primary">Voucher</button>
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
export default {
  name: "Medication",
  components: {Master},
  data() {
    return {
      is_detail : false,
      //
      medications: {},
      medication: {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getMedication: function (){
      axios.get(this.getUrl('medication'))
      .then(res=>{
        this.medications = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    detailMedication: function (data){
      this.is_detail = true
      this.medication = data
    },
    actionMedication: function (id,status){

      if (confirm('Please Confirm!') == true){
        let formData = new FormData()
        formData.append('_method','PATCH')
        formData.append('status',status)
        axios.post(this.getUrl('medication/'+id),formData)
            .then(res=>{
              this.$store.dispatch('showSuccessAlert')
              this.getMedication()
            })
            .catch(err=>{
              console.log(err)
            })
      }else {

      }



    },
  },
  mounted() {
    this.getMedication()
  }
}
</script>

<style scoped>
.border-dash tr>td{
  border-style: dashed !important;
}
</style>