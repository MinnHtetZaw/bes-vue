<template>
<Master>
  <div class="row">
    <div class="col-8 m-auto">
      <div class="card border-0 px-5 py-3 mb-3">
        <div class="d-flex mb-3 gap-3 justify-content-between align-items-center">
          <div class="">
            <div>
              <img src="../../assets/bes-logo.jpg" style="width: 50px;height: 50px;" alt="">
            </div>
          </div>
          <div>
            <h5 class="">Hospital Bill</h5>
          </div>
          <div class="d-flex justify-content-center">
            <vue-qrcode
                value="hello"
                @change="onDataUrlChange"
            />
          </div>
        </div>
        <div class="row">

          <div class="bg-light mb-3 p-3 rounded">
            <h5 class="fw-normal mb-3 text-title">Patient Information</h5>
            <div class="row">
              <div class="col-4">
                <p>Patient ID</p>
              </div>
              <div class="col-6">
                <p>{{voucher.patient_id}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p>Patient Name</p>
              </div>
              <div class="col-6">
                <p>{{voucher.patient_name}}</p>
              </div>
            </div>

          </div>

          <div class="bg-light mb-3 p-3 rounded">
            <h5 class="fw-normal mb-3 text-title">Billing Information</h5>
            <div class="row">
              <div class="col-4">
                <p>Hospital Charges</p>
              </div>
              <div class="col-6">
                <p>{{voucher.hospital_charges}} MMK</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p>Service Charges</p>
              </div>
              <div class="col-6">
                <p>{{voucher.service_charges}} MMK</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p>Medicine Charges</p>
              </div>
              <div class="col-6">
                <p>{{voucher.medicine_charges}} MMK</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p>Laboratory Charges</p>
              </div>
              <div class="col-6">
                <p>{{voucher.laboratory_charges}} MMK</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p>Radiology Charges</p>
              </div>
              <div class="col-6">
                <p>{{voucher.radiology_charges}} MMK</p>
              </div>
            </div>
          </div>
          <div class="bg-light mb-3 p-3 rounded">
            <div class="row">
              <div class="col-4">
                <p class="">Total Amount</p>
              </div>
              <div class="col-6">
                <p class="">{{voucher.total_amount }} MMK</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p class="">Pay Amount</p>
              </div>
              <div class="col-6">
                <p class="">{{voucher.pay_amount }} MMK</p>
              </div>
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
import axios from "axios";
import VueQrcode from 'vue-qrcode';
import {mapGetters} from "vuex";


export default {
  name: "AdmissionVoucherDetail",
  components: {Master,VueQrcode},
  data() {
    return {
      voucher: {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getVoucher: function () {
      axios.get(this.getUrl('admission-voucher/'+this.$route.query.id))
      .then(res => {
        this.voucher = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    onDataUrlChange(dataUrl) {
      this.dataUrl = dataUrl
    },
  },
  mounted() {
    this.getVoucher()
  }
}
</script>

<style scoped>

</style>