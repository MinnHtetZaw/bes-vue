<template>
  <Master>
    <div class="row">
      <div class="col-10 m-auto">
        <p class="text-title">Payment</p>

      </div>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="row">
          <div class="col-8">
            <div class="card border-0 p-3">
              <table class="table table-bordered">
                <thead>
                <tr>
                  <th class="text-center">Description</th>
                  <th class="text-center">Amount ( MMK )</th>
                </tr>
                </thead>
                <tbody>
                <tr class="">
                  <td>Hospital Charges</td>
                  <td class="text-end">{{admission.hospital_charges}}</td>
                </tr>
                <tr class="">
                  <td>Service Charges</td>
                  <td class="text-end">{{admission.service_charges}}</td>
                </tr>
                <tr class="">
                  <td>Medicine Charges</td>
                  <td class="text-end">{{admission.medicine_charges}}</td>
                </tr>
                <tr class="">
                  <td>Laboratory Charges</td>
                  <td class="text-end">{{admission.laboratory_charges}}</td>
                </tr>
                <tr class="">
                  <td>Radiology Charges</td>
                  <td class="text-end">{{admission.radiology_charges}}</td>
                </tr>
                <tr class="">
                  <td>Total Charges</td>
                  <td class="text-end">{{admission.hospital_charges + admission.medicine_charges}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-4">
            <form @submit.prevent="" ref="storeVoucher">
              <div>
                <div class="bg-white rounded-3 p-3 mb-3">
                  <p class="text-title">Patient Information</p>
                  <input type="hidden" name="patient_id"  :value="discharge.patient_id" >
                  <input type="hidden" name="discharge_id" :value="discharge.id">
                  <input type="hidden" name="admission_id" :value="admission.id">

                  <div class="row">
                    <div class="col-6">
                      <p>Patient ID</p>
                    </div>
                    <div class="col-6">
                      <p>{{discharge.p_ID}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>Patient Name</p>
                    </div>
                    <div class="col-6">
                      <p>{{discharge.patient_name}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>Approve Doctor</p>
                    </div>
                    <div class="col-6">
                      <p>{{discharge.approve_doctor}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>Room ID</p>
                    </div>
                    <div class="col-6">
                      <p>{{discharge.room_ID}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>Bed ID</p>
                    </div>
                    <div class="col-6">
                      <p>{{discharge.bed_ID}}</p>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-3 rounded-3 mb-3">
                  <p class="text-title">Payment Information</p>
                  <input type="hidden" name="hospital_charges" :value="admission.hospital_charges">
                  <input type="hidden" name="service_charges" :value="admission.service_charges">
                  <input type="hidden" name="medicine_charges" :value="admission.medicine_charges">
                  <input type="hidden" name="laboratory_charges" :value="admission.laboratory_charges">
                  <input type="hidden" name="radiology_charges" :value="admission.radiology_charges">
                  <div class="row mb-1">
                    <div class="col-6">
                      <p class="">Total Amount</p>
                    </div>
                    <div class="col-6">
                      <input type="number" class="form-control form-control-sm" readonly name="total_amount" :value="admission.hospital_charges + admission.medicine_charges">
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col-6">
                      <p class="">Payment Type</p>
                    </div>
                    <div class="col-6">
                      <select name="payment_type" class="form-select form-select-sm" id="">
                        <option value="">Select Payment</option>
                        <option value="Cash Down">Cash Down</option>
                        <!--                      <option value="">Select Payment</option>-->
                        <!--                      <option value="">Select Payment</option>-->
                      </select>
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col-6">
                      <p class="">Date</p>
                    </div>
                    <div class="col-6">
                      <input type="date" class="form-control form-control-sm" name="date">
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col-6">
                      <p class="">Pay Amount</p>
                    </div>
                    <div class="col-6">
                      <input type="number" class="form-control form-control-sm" name="pay_amount">
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col-6">
                      <p class="">Balance Amount</p>
                    </div>
                    <div class="col-6">
                      <input type="number" class="form-control form-control-sm"  name="balance_amount">
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col-6">
                      <p class="">Refund Amount</p>
                    </div>
                    <div class="col-6">
                      <input type="number" class="form-control form-control-sm"  name="refund_amount">
                    </div>
                  </div>
                </div>
                <div>
                  <button @click="storeAdmissionVoucher" class="btn btn-primary w-100">Store Voucher</button>
                </div>
              </div>
            </form>

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
import router from "@/router";
export default {
  name: "Discharge",
  components: {Master},
  data() {
    return {
      discharge: {},
      admission: {},
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getDischarges: function () {
      axios.get(this.getUrl('discharge/'+this.$route.query.id))
          .then(res => {
            this.discharge = res.data.data
            this.admission = res.data.data.admission
          })
          .catch(err => {
            console.log(err)
          })
    },
    storeAdmissionVoucher: function (){
      let formData = new FormData(this.$refs.storeVoucher)
      axios.post(this.getUrl('admission-voucher'),formData)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
      })
      .catch(err => console.log(err))
    }

  },
  mounted() {
    this.getDischarges()
  }
}
</script>


<style scoped>

</style>