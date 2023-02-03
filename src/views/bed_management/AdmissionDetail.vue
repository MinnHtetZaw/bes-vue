<template>
  <Master>
    <div v-if="is_discharge == true" class="row">

      <div class="col-6 m-auto">
        <div class="card mb-3 px-5 pb-3 border-0">
          <div class="d-flex mt-3 justify-content-end">
            <button @click="is_discharge = false" class="btn btn-close btn-sm"></button>
          </div>
          <form @submit.prevent="" ref="discharge">
            <input type="hidden" name="patient_id" :value="admission.patient_id"/>
            <input type="hidden" name="admission_id" :value="admission.id"/>
            <input type="hidden" name="doctor_id" :value="admission.doctor_id"/>
            <TextArea :readonly="true" label-name="Patient ID" name="p_ID" rows="1" :value="admission.patient_ID"></TextArea>
            <TextArea :readonly="true" label-name="Patient Name" name="patient_name" rows="1" :value="admission.patient_name"></TextArea>
            <TextArea :readonly="true" label-name="Room ID" name="room_ID" rows="1" :value="admission.room_name"></TextArea>
            <TextArea :readonly="true" label-name="Bed ID" name="bed_ID" rows="1" :value="admission.bed_name"></TextArea>
            <Select label-name="Approve Doctor" name="approve_doctor" option_name="Select Doctor">
              <option :value="doctor.name" v-for="doctor in doctors">{{doctor.name}}</option>
            </Select>
            <div class="row">
              <div class="col-6">
                <Input name="date" label-name="Date" type="date"/>
              </div>
              <div class="col-6">
                <Input name="time" label-name="Time" type="time"/>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button @click="storeDischarge" class="btn btn-primary btn-sm">Approve Discharge</button>
            </div>
          </form>
        </div>
      </div>
    </div>

<!--    <div  class="row">-->
<!--      <div class="col-10 m-auto">-->
<!--        <div class="card border-0 px-5 py-3 mb-3">-->
<!--          <div class="d-flex mb-3 gap-3 justify-content-between align-items-center">-->
<!--            <div class="">-->
<!--              <div>-->
<!--                <img src="../../assets/bes-logo.jpg" style="width: 50px;height: 50px;" alt="">-->
<!--              </div>-->
<!--            </div>-->
<!--            <div>-->
<!--              <h5 class="">Hospital Bill</h5>-->
<!--            </div>-->
<!--            <div class="d-flex justify-content-center">-->
<!--              <vue-qrcode-->
<!--                  value="hello"-->
<!--                  @change="onDataUrlChange"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="row">-->

<!--            <div class="bg-light mb-3 p-3 rounded">-->
<!--              <h5 class="fw-normal mb-3 text-title">Patient Information</h5>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Patient ID</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.patient_ID}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Patient Name</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.patient_name}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Assign Doctor</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.doctor_name}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Room ID</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.room_name}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Bed ID</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.bed_name}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="bg-light mb-3 p-3 rounded">-->
<!--              <h5 class="fw-normal mb-3 text-title">Billing Information</h5>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Hospital Charges</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.hospital_charges}} MMK</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Service Charges</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.service_charges}} MMK</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Medicine Charges</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.medicine_charges}} MMK</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Laboratory Charges</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.laboratory_charges}} MMK</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <p>Radiology Charges</p>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <p>{{admission.radiology_charges}} MMK</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="bg-light mb-3 p-3 rounded">-->
<!--              <div class="row">-->
<!--                <div class="col-4">-->
<!--                  <h6 class="fw-normal mb-0 text-title">Total Charges</h6>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <h6 class="fw-normal mb-0 text-title">{{admission.hospital_charges + admission.medicine_charges }} MMK</h6>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="row">
      <div class="col-10 m-auto">
        <div class="card mb-3 p-3 border-0">
          <div class="">
            <div class="row">
              <div class="col-4"><p>Patient ID</p></div>
              <div class="col-4"><p>{{admission.patient_ID}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p>Patient Name</p></div>
              <div class="col-4"><p>{{admission.patient_name}}</p></div>
            </div>

            <div class="row">
              <div class="col-4"><p>Assign Doctor</p></div>
              <div class="col-4"><p>{{admission.doctor_name}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p>Room</p></div>
              <div class="col-4"><p>{{admission.room_name}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p>Bed</p></div>
              <div class="col-4"><p>{{admission.bed_name}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p>Room Charges (Price Per Day)</p></div>
              <div class="col-4"><p>{{admission.price_per_day}} MMK</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p>Deposit Amount</p></div>
              <div class="col-4"><p>10000 MMK</p></div>
            </div>
            <div class="d-flex gap-3">
              <button @click="patientDetail(admission.patient_id)" class="btn btn-sm btn-primary">
                View Profile <i class="fa-solid fa-user-circle ms-2"></i>
              </button>
              <button @click="storeBill(admission.id)" class="btn btn-sm btn-primary">
                Generate Bill <i class="fa-solid fa-file-invoice-dollar ms-2"></i>
              </button>
              <button @click="is_discharge = true" class="btn btn-sm btn-primary">
                Discharge <i class="fa-solid fa-right-from-bracket ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 m-auto">
        <div class="card mb-5 border-0 p-0">
          <h6 class="text-secondary pt-2 px-3">Daily Hospital Bills</h6>
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="text-center">Date</th>
              <th class="text-center">Room Charges(MMK)</th>
              <th class="text-center">Service Charges(MMK)</th>
              <th class="text-center">Medicine Charges(MMK)</th>
              <th class="text-center">Machine Charges(MMK)</th>
              <th class="text-center">Status</th>
              <th class="text-center">Total Amount(MMK)</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="bill in hospital_bills">
              <td class="">{{bill.date}}</td>
              <td class="">{{bill.room_charges}}</td>
              <td class="">{{bill.service_charges}}</td>
              <td class="">{{bill.medicine_charges}}</td>
              <td class="">{{bill.machine_charges}}</td>
              <td class="">
                <span class="badge bg-warning rounded-pill">{{bill.status_name}}</span>
              </td>
              <td class="">{{bill.total_amount}}</td>
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
import VueQrcode from 'vue-qrcode'
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import Select from "@/components/form-element/Select";
export default {
  name: "AdmissionDetail",
  components: {Select, TextArea, Input, Master,VueQrcode},
  data() {
    return {
      is_discharge: false,
      admission : {},
      doctors : {},
      hospital_bills: {},
      dataUrl: null,
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getAdmission : function (){
      axios.get(this.getUrl('admission/'+this.$route.query.id))
      .then(res => {
        this.admission = res.data.data
        this.hospital_bills = res.data.data.hospital_bills
      })
      .catch(err =>{
        console.log(err)
      })
    },
    getDoctors : function (){
      axios.get(this.getUrl('doctor'))
      .then(res => {
        this.doctors = res.data.data
      })
      .catch(err =>{
        console.log(err)
      })
    },
    storeBill: function (id){
      let data = {
        admission_id : id,
      }
      axios.post(this.getUrl('hospital-bill'),data)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
        this.getAdmission()
      })
      .catch(err => {
        this.$store.dispatch('showErrorAlert')
        console.log(err)
      })
    },
    patientDetail: function (id){
      router.push({path: '/patient/detail/'+id,query: {id: id}})
    },
    onDataUrlChange(dataUrl) {
      this.dataUrl = dataUrl
    },
    storeDischarge: function (){
      let formData = new FormData(this.$refs.discharge)
      axios.post(this.getUrl('discharge'),formData)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
      })
      .catch(err => {
        console.log(err)
      })
    },
  },
  mounted() {
    this.getAdmission()
    this.getDoctors()
  }
}
</script>

<style scoped>
p{
  margin-bottom: 7px;
}
</style>