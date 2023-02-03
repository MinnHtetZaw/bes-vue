<template>
  <Master>
    <div class="row">
      <div class="col-12 ">
        <p class="text-title mb-3">Admission Vouchers</p>
        <div class="card p-0 border-0">
          <div>
            <table class="table table-hover">
              <thead>
              <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Patient ID</th>
                <th class="text-center">Name</th>
                <th class="text-center">Phone</th>
                <th class="text-center">Hospital Charges</th>
                <th class="text-center">Service Charges</th>
                <th class="text-center">Medicine Charges</th>
                <th class="text-center">Laboratory Charges</th>
                <th class="text-center">Radiology Charges</th>
                <th class="text-center">Total Amount</th>
                <th class="text-center">Pay Amount</th>
                <th class="text-center">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr class="text-center" v-for="voucher in admissionVouchers">
                <td>{{voucher.date}}</td>
                <td>{{voucher.patient_id}}</td>
                <td>{{voucher.patient_name}}</td>
                <td>{{voucher.phone}}</td>
                <td>{{voucher.hospital_charges}}</td>
                <td>{{voucher.service_charges}}</td>
                <td>{{voucher.medicine_charges}}</td>
                <td>{{voucher.laboratory_charges}}</td>
                <td>{{voucher.radiology_charges}}</td>
                <td>{{voucher.total_amount}}</td>
                <td>{{voucher.pay_amount}}</td>
                <td>
                  <button @click="detail(voucher.id)" class="btn btn-sm btn-primary">Detail</button>
                </td>
              </tr>
              </tbody>
            </table>
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
  components: {Master},
  data() {
    return {
      admissionVouchers: {},
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    getVoucher: function () {
      axios.get(this.getUrl('admission-voucher'))
          .then(res => {
            this.admissionVouchers = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    detail: function (id){
      router.push({path: 'admission-voucher/detail',query: {id : id}})
    }
  },
  mounted() {
    this.getVoucher()
  }
}

</script>

<style scoped>

</style>