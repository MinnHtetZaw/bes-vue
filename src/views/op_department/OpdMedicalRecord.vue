<template>
<Master>
  <div class="row">
    <div class="col-10 m-auto">
      <h6 class="mb-3 text-secondary">OPD Medical Record List</h6>
    </div>
  </div>
  <div v-if="is_voucher == true" class="row">
    <div class="col-6 m-auto">
      <div class="card p-3 border-0 mb-3">
        <div>
          <h6 class="text-center">Hospital</h6>
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisiiure magnam maxime minus nesciunt nisi nulla ratione reiciendis sed tempora?</p>
        </div>

        <div class="mb-3">
          <div class="row">
            <div class="col-4"><p class="mb-1">Date</p></div>
            <div class="col-4"><p class="mb-1">{{voucher.date}}</p></div>
          </div>
          <div class="row">
            <div class="col-4"><p class="mb-1">Patient ID</p></div>
            <div class="col-4"><p class="mb-1">{{voucher.patient_ID}}</p></div>
          </div>
          <div class="row">
            <div class="col-4"><p class="mb-1">Patient Name</p></div>
            <div class="col-4"><p class="mb-1">{{voucher.patient_name}}</p></div>
          </div>
          <div class="row">
            <div class="col-4"><p class="mb-1">Doctor Name</p></div>
            <div class="col-4"><p class="mb-1">{{voucher.doctor_name}}</p></div>
          </div>
          <div>
            <h6 class="fw-normal">Medicine</h6>
            <table class="table-sm table-borderless table">
              <thead>
              <tr>
                <th class="text-center">Medicine Name</th>
                <th class="text-center">Total Qty</th>
                <th class="text-center">Sub Total</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="medicine in voucher.medicines">
                <td class="">Medicine</td>
                <td class="text-center">{{medicine.total_qty}}</td>
                <td class="text-end">{{medicine.sub_total}} MMK</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="2" class="text-end">Total</td>
                <td class="text-end">{{voucher.medicine_total}} MMK</td>
              </tr>
              </tfoot>
            </table>
          </div>
          <div>
            <h6 class="fw-normal">Procedure Items</h6>
            <table class="table-sm table-borderless table">
              <thead>
              <tr>
                <th class="text-center">Item Name</th>
                <th class="text-center">Total Qty</th>
                <th class="text-center">Sub Total</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in voucher.procedure_items">
                <td class="">{{item.name}}</td>
                <td class="text-center">{{item.qty}}</td>
                <td class="text-end">{{item.sub_total}} MMK</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="2" class="text-end">Total</td>
                <td class="text-end">{{voucher.procedure_total}} MMK</td>
              </tr>
              </tfoot>
            </table>

          </div>
          <div>
            <h6 class=" fw-normal">Doctor Charges</h6>
            <ul>
              <li v-for="charges in voucher.surgeon_services">
                <div class="row">
                  <div class="col-3"><p>{{charges.name}}</p></div>
                  <div class="col-3"><p>{{charges.charges}} MMK</p></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="row text-end">
            <div class="col-4"><p class="mb-1">Total Bill</p></div>
            <div class="col-4"><p class="mb-1">{{voucher.total_bill}}</p></div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-10 m-auto">
      <div class="card p-0 border-0">
        <table class="table table-hover">
          <thead>
          <tr>
            <th class="text-center">Date</th>
            <th class="text-center">Patient ID</th>
            <th class="text-center">Patient Name</th>
            <th class="text-center">Doctor Name</th>
            <th class="text-center">Voucher</th>
            <th class="text-center">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr class="text-center" v-for="record in records">
            <td>{{record.date}}</td>
            <td>{{record.patient_ID}}</td>
            <td>{{record.patient_name}}</td>
            <td>{{record.doctor_name}}</td>
            <td class="text-center">
              <button @click="getVoucher(record)" class="btn btn-primary btn-sm">Voucher</button>
            </td>
            <td>
              <div class="d-flex mt-2 gap-4 align-items-center justify-content-center">
                <i @click="editTreatment(record.id)" type="button" class="fa-solid fa-pen text-warning"></i>
                <i type="button" class="fa-solid fa-trash text-danger"></i>
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
  name: "OpdMedicalRecord",
  components: {Master},
  data() {
    return {
      records: {},
      voucher: {},
      is_voucher : false,
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getOpdMedicalRecords: function (){
      axios.get(this.getUrl('medical-record'))
      .then(res=>{
        this.records = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    editTreatment: function (id){
      router.push({ path: '/edit-treatment', query:{id: id}})
    },
    getVoucher: function (data){
      this.is_voucher = true
      this.voucher = data
    }
  },
  mounted() {
    this.getOpdMedicalRecords()
  }
}
</script>

<style scoped>

</style>