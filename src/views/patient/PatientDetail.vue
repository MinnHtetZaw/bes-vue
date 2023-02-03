<template>
  <Master>
    <div class="col-12 m-auto">
      <div class="row">
        <div class="col-3">
          <div class="card p-3 mb-3 rounded shadow-sm border-0">
            <div class="d-flex justify-content-end">
              <i @click="is_edit = true" type="button" class="fa-solid fa-pen text-warning"></i>
            </div>
            <div class="d-flex justify-content-center mb-3">
              <img src="../../assets/bes-logo.jpg" style="height: 100px;width: 100px;" class="rounded-circle" alt="">
            </div>
            <h6 class="text-center fw-normal">{{patient.name}}</h6>
            <div>
              <div class="row">
                <div class="col-5"><p>Patient ID</p></div>
                <div class="col-7"><p>{{patient.patient_id}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Age</p></div>
                <div class="col-7"><p>{{patient.age}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Gender</p></div>
                <div class="col-7"><p>{{patient.gender}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>DOB</p></div>
                <div class="col-7"><p>{{patient.date_of_birth}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Address</p></div>
                <div class="col-7"><p>{{patient.address}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Occupation</p></div>
                <div class="col-7"><p>{{patient.occupation}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Ethnicity</p></div>
                <div class="col-7"><p>{{patient.ethnicity}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Visit Time</p></div>
                <div class="col-7"><p>{{patient.visit}}</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Deposit Amount</p></div>
                <div class="col-7"><p>{{patient.deposit_amount}} MMK</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Credit Amount</p></div>
                <div class="col-7"><p>{{patient.credit_amount}} MMK</p></div>
              </div>
              <div class="row">
                <div class="col-5"><p>Total Amount</p></div>
                <div class="col-7"><p>{{patient.total_amount}} MMK</p></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
<!--          Edit Patient Info-->
          <div v-if="is_edit == true" class="row">
            <div class="col-6 m-auto">
              <div class="card shadow-sm mb-3 rounded p-3 border-0">
                <div class="d-flex mb-3 justify-content-between align-items-center">
                  <h6 class="text-secondary mb-0">Edit Patient Info</h6>
                  <button @click="is_edit = false" class="btn btn-close"></button>
                </div>
                <div>
                  <form @submit.prevent="" ref="updatePatient">
                    <div class="mb-3">
<!--                      <div class="mb-3 ">-->
<!--                        <label class="form-label mb-1">Patient Type</label>-->
<!--                        <div>-->
<!--                          <div class="form-check form-check-inline">-->
<!--                            <input class="form-check-input" type="radio" name="type"  value="0">-->
<!--                            <label class="form-check-label">IP</label>-->
<!--                          </div>-->
<!--                          <div class="form-check form-check-inline">-->
<!--                            <input class="form-check-input" type="radio" name="type" value="1">-->
<!--                            <label class="form-check-label" >OP</label>-->
<!--                          </div>-->
<!--                        </div>-->

<!--                      </div>-->
                      <text-area name="name" label-name="Name" rows="1" :value="patient.name" :error-message="error_message.name"></text-area>
                      <div class="row">
                        <div class="col-6">
                          <Input name="age" label-name="Age" type="number" :value="patient.age" :error-message="error_message.age"></Input>
                        </div>
                        <div class="col-6">
                          <Input name="date_of_birth" label-name="Date of Birth" :value="patient.date_of_birth" type="date" ></Input>
                        </div>
                      </div>
<!--                      <label class="form-label">Gender</label>-->
<!--                      <div class="mb-3">-->
<!--                        <div class="form-check form-check-inline">-->
<!--                          <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="0">-->
<!--                          <label class="form-check-label" for="inlineRadio1">Male</label>-->
<!--                        </div>-->
<!--                        <div class="form-check form-check-inline">-->
<!--                          <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="1">-->
<!--                          <label class="form-check-label" for="inlineRadio2">Female</label>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <Input name="emergency_phone" label-name="Home Phone" type="number"></Input>-->
<!--                      <Input name="work_phone" label-name="Work Phone" type="number"></Input>-->
                      <Input name="phone" label-name="Phone" type="" :value="patient.phone" :error-message="error_message.phone"></Input>
                      <text-area name="nrc" label-name="NRC" rows="1" :value="patient.nrc" :error-message="error_message.nrc"></text-area>
                      <div class="row">
                        <div class="col-6">
                          <text-area name="nationality" label-name="Nationality" :value="patient.nationality" rows="1"></text-area>
                        </div>
                        <div class="col-6">
                          <text-area name="ethnicity" label-name="Ethnicity" :value="patient.ethnicity" rows="1"></text-area>
                        </div>
                      </div>
                      <text-area name="occupation" label-name="Occupation" :value="patient.occupation" rows="1" ></text-area>

                      <text-area name="address" label-name="Address" :value="patient.address" rows="2" :error-message="error_message.address"></text-area>

                      <button @click="updatePatient(patient.id)" class="btn btn-sm btn-success w-100 btn">Update</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
<!--          Add Medication-->
          <div v-if="is_medication == true" class="row">
            <div class="col-12 m-auto">
              <div class="card mb-3 p-3 border-0">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary mb-0">Add Medication</h6>
                  <button @click="is_medication = false" class="btn btn-close"></button>
                </div>
                <form @submit.prevent="" ref="storeMedication">
                  <div class="col-4">
                    <div class="mb-3">
                      <input name="patient_id" type="hidden" :value="this.$route.query.id">
                      <Input name="date" type="date" label-name="Date"></Input>
                      <label class="form-label text-secondary small">Choose Medicine</label>
                      <div class="d-flex gap-2 align-items-center">
                        <select id="medicine" name="" class="form-select form-select-sm">
                          <option value="">Select Medicine</option>
                          <option :value="medicine.id" v-for="medicine in medicines">{{medicine.name}}</option>
                        </select>
                        <button @click="addMedicine" class="btn btn-primary btn-sm">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-light mb-3 rounded p-2" v-if="medicine_array.length > 0">
                    <table class="table table-borderless table-sm">
                      <thead>
                      <tr>
                        <th class="text-center">Medicine Name</th>
                        <th class="text-center">Qty</th>
                        <th class="text-center">Dose</th>
                        <th class="text-center">Day</th>
                        <th class="text-center">Sig</th>
                        <th class="text-center"></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="medicine in medicine_array">
                        <td>{{medicine.name}}</td>
                        <td class="text-center">{{medicine.qty}}</td>
                        <td>
                          <select name="" class="form-select border-0 form-select-sm">
                            <option value="">AA</option>
                            <option value="">BB</option>
                            <option value="">CC</option>
                            <option value="">DD</option>
                          </select>
                        </td>
                        <td class="text-center">{{medicine.day}}</td>
                        <td>
                          <textarea name="" id="" rows="1" class="form-control form-control-sm border-0"></textarea>
                        </td>
                        <td class="text-center">
                          <i type="button" @click="removeMedicine(medicine.id)" class="fa-solid fa-remove text-danger"></i>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <text-area name="note" label-name="Note" rows="2"></text-area>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button @click="storeMedication" class="btn btn-primary px-5 btn-sm">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

<!--          <div class="row">-->
<!--            <div class="col-6 m-auto">-->
<!--              <div class="card mb-3 p-3 border-0">-->
<!--                <div>-->
<!--                  <h6 class="text-secondary text-center">Medicine Bill</h6>-->
<!--                  <div class="">-->
<!--                    <div class="row">-->
<!--                      <div class="col-3"><p>Patient ID:</p></div>-->
<!--                      <div class="col-6"><p>{{medicine_voucher.patient_ID}}</p></div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                      <div class="col-3"><p>Patient Name:</p></div>-->
<!--                      <div class="col-6"><p>{{medicine_voucher.patient_name}}</p></div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                      <div class="col-3"><p>Doctor Name:</p></div>-->
<!--                      <div class="col-6"><p>{{medicine_voucher.doctor_name}}</p></div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                      <div class="col-3"><p>Date:</p></div>-->
<!--                      <div class="col-6"><p>{{medicine_voucher.date}}</p></div>-->
<!--                    </div>-->

<!--                    <div>-->
<!--                      <table class="table table-borderless">-->
<!--                        <thead>-->
<!--                        <tr>-->
<!--                          <th class="text-center fw-normal">No.</th>-->
<!--                          <th class="text-center fw-normal">Name</th>-->
<!--                          <th class="text-center fw-normal">Total Qty</th>-->
<!--                          <th class="text-center fw-normal">Amount (MMK)</th>-->
<!--                        </tr>-->
<!--                        </thead>-->
<!--                        <tbody>-->
<!--                        <tr v-for="(medicine,index) in medicine_voucher.medicines">-->
<!--                          <td class="text-center">{{index + 1}}</td>-->
<!--                          <td>{{medicine.name}}</td>-->
<!--                          <td class="text-end">{{medicine.total_qty}}</td>-->
<!--                          <td class="text-end">{{medicine.total_price}}</td>-->
<!--                          <td class="text-end">{{medicine.TotalPrice}}</td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                        <tfoot>-->
<!--                        <tr>-->
<!--                          <td class="text-end" colspan="3">Sub Total</td>-->
<!--                          <td>{{}}</td>-->
<!--                        </tr>-->
<!--                        </tfoot>-->
<!--                      </table>-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          General Info-->
          <div class="row">
            <div class="col-12">
              <div class="card mb-3  border-0">
                <div class="d-flex px-3 pt-2 justify-content-between align-items-center">
                  <h6 class="mb-0 text-secondary">Medical Record</h6>
                  <button @click="addTreatment(patient.id)" class="btn btn-sm text-primary">
                    Add Record
                    <i class="fa-solid fa-plus ms-2"></i>
                  </button>
                </div>
                <div>
                </div>
                <table class="table table-hover">
                  <thead>
                  <tr>
                    <th class="text-center text-secondary">Date</th>
                    <th class="text-center text-secondary">Diagnosis</th>
                    <th class="text-center text-secondary">Doctor</th>
                    <th class="text-center text-secondary">Physical Examination</th>
                    <th class="text-center text-secondary">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="text-center" v-for="medical_record in medical_records">
                    <td class="">{{medical_record.date}}</td>
                    <td class="">{{medical_record.vital_sign.diagnosis}}</td>
                    <td class="">{{medical_record.doctor_name}}</td>
                    <td class="">{{medical_record.vital_sign.physical_examination}}</td>
                    <td class="text-center">
                      <div class="d-flex mt-2 justify-content-center gap-4">
                        <i type="button" @click="medicalRecordDetail(medical_record.id)" class="fa-solid fa-info-circle text-primary"></i>
                        <i type="button" class="fa-solid fa-pen text-warning"></i>
                        <i type="button" class="fa-solid fa-trash text-danger"></i>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
          <div v-if="is_edit == false">
<!--          <div class="row mb-3">-->
<!--            <div class="col-6">-->
<!--            </div>-->
<!--            <div class="col-4">-->
<!--              <div class="card shadow-sm rounded p-3 border-0">-->
<!--                <div class="d-flex mb-3 justify-content-between align-items-center">-->
<!--                  <h6 class="text-secondary fw-normal">Vital Signs</h6>-->
<!--                  <div class="dropdown">-->
<!--                    <button type="button" class="btn btn-sm btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">-->
<!--                      <i class="fa-solid fa-plus"></i>-->
<!--                    </button>-->
<!--                    <div class="dropdown-menu p-2">-->
<!--                      <form @submit.prevent="" ref="storeVitalSigns">-->
<!--                        <input type="hidden" name="patient_id" :value="patient.id">-->
<!--                        <Input name="date" type="date"></Input>-->
<!--                        <Input name="bp" type="number" label-name="BP"></Input>-->
<!--                        <Input name="hr" type="number" label-name="HR"></Input>-->
<!--                        <Input name="rr" type="number" label-name="RR"></Input>-->
<!--                        <Input name="spo2" type="number" label-name="SPO2"></Input>-->
<!--                        <Input name="t" type="number" label-name="T"></Input>-->
<!--                        <button @click="storeVitalSign" class="btn btn-sm btn-primary w-100">Save</button>-->
<!--                      </form>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <table class="table table-sm table-borderless table-hover table-striped">-->
<!--                  <thead>-->
<!--                  <tr>-->
<!--                    <th class="fw-normal text-secondary text-center">Date</th>-->
<!--                    <th class="fw-normal text-secondary text-center">BP</th>-->
<!--                    <th class="fw-normal text-secondary text-center">HR</th>-->
<!--                    <th class="fw-normal text-secondary text-center">RR</th>-->
<!--                    <th class="fw-normal text-secondary text-center">SPO2</th>-->
<!--                    <th class="fw-normal text-secondary text-center">T</th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                  <tbody>-->
<!--                  <tr class="text-center" v-for="vitalSign in vitalSigns">-->
<!--                    <td>{{vitalSign.date}}</td>-->
<!--                    <td>{{vitalSign.bp}}</td>-->
<!--                    <td>{{vitalSign.hr}}</td>-->
<!--                    <td>{{vitalSign.rr}}</td>-->
<!--                    <td>{{vitalSign.spo2}}</td>-->
<!--                    <td>{{vitalSign.t}}</td>-->
<!--                  </tr>-->
<!--                  </tbody>-->
<!--                </table>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-2">-->
<!--              <div class="card shadow-sm rounded p-3 border-0">-->
<!--                <div class="d-flex mb-3 justify-content-between align-items-center">-->
<!--                  <h6 class="text-secondary mb-0 fw-normal">Nutrition</h6>-->
<!--                  <button @click="addVitalSign(patient.id)" class="btn btn-sm btn-outline-primary">-->
<!--                    <i class="fa-solid fa-plus"></i></button>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <p>Height : </p>-->
<!--                  <p>BMI : </p>-->
<!--                  <p>BMI Status : </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="row mb-3">-->
<!--            <div class="col-12">-->
<!--              <div class="card p-0 border-0">-->
<!--                <div class="d-flex p-3 pb-0 justify-content-between align-items-center">-->
<!--                  <h6 class="fw-normal mb-0 text-secondary">Medication</h6>-->
<!--                  <button @click="is_medication = true" class="btn btn-sm btn-outline-primary">-->
<!--                    <i class="fa-solid fa-plus"></i></button>-->
<!--&lt;!&ndash;                  <button @click="" class="btn btn-sm btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#medication" aria-controls="medication">&ndash;&gt;-->
<!--&lt;!&ndash;                    <i class="fa-solid fa-plus"></i></button>&ndash;&gt;-->
<!--                </div>-->
<!--&lt;!&ndash;                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="medication" aria-labelledby="medicationLabel">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="offcanvas-header">&ndash;&gt;-->
<!--&lt;!&ndash;                    <h5 class="fw-normal mb-0">Medication</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="offcanvas-body">&ndash;&gt;-->

<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--                <div>-->
<!--                  <table class="table table-hover table-sm">-->
<!--                    <thead>-->
<!--                    <tr>-->
<!--                      <th class="text-center text-secondary">#</th>-->
<!--                      <th class="text-center text-secondary">Date</th>-->
<!--                      <th class="text-center text-secondary">Medicine</th>-->
<!--                      <th class="text-center text-secondary">Note</th>-->
<!--                      <th class="text-center text-secondary">Doctor</th>-->
<!--                      <th class="text-center text-secondary">Action</th>-->
<!--                    </tr>-->
<!--                    </thead>-->
<!--                    <tbody>-->
<!--                    <tr v-for="medication in medications">-->
<!--                      <td class="text-center">{{medication.id}}</td>-->
<!--                      <td class="text-center">{{medication.date}}</td>-->
<!--                      <td>-->
<!--                        <ul class="mb-0">-->
<!--                          <li v-for="medicine in medication.medicines" class="mb-1">{{medicine.name}}</li>-->
<!--                        </ul>-->
<!--                      </td>-->
<!--                      <td style="width: 500px;">{{medication.note}}</td>-->
<!--                      <td>{{medication.doctor_name}}</td>-->
<!--                      <td class="text-center">-->
<!--                        <div class="btn-group btn-group-sm">-->
<!--                          <button @click="medicineVoucher(medication)" class="btn btn-sm btn-outline-primary">-->
<!--                            Voucher-->
<!--                          </button>-->
<!--                          <button class="btn btn-sm btn-outline-primary">-->
<!--                            Action-->
<!--                          </button>-->
<!--                          <button class="btn btn-sm btn-outline-primary">-->
<!--                            Action-->
<!--                          </button>-->
<!--                        </div>-->

<!--                      </td>-->
<!--                    </tr>-->

<!--                    </tbody>-->
<!--                  </table>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="row">-->
<!--            <div class="col-7">-->
<!--                    <div class="card shadow-sm rounded p-3 border-0">-->
<!--                      <h6 class="text-secondary fw-normal">Treatment Progress</h6>-->
<!--                      <div id="content">-->
<!--                        <ul class="timeline">-->
<!--                          <li class="event">-->
<!--                            <h5>Title</h5>-->
<!--                            <p>description.</p>-->
<!--                          </li>-->
<!--                          <li class="event">-->
<!--                            <h5>Title</h5>-->
<!--                            <p>description.</p>-->
<!--                          </li>-->
<!--                          <li class="event">-->
<!--                            <h5>Title</h5>-->
<!--                            <p>description.</p>-->
<!--                          </li>-->

<!--                        </ul>-->
<!--                      </div>-->
<!--                    </div>-->

<!--            </div>-->
<!--          </div>-->
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
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
export default {
  name: "PatientDetail",
  components: {TextArea, Input, Master},
  data() {
    return {
      is_edit : false,
      is_medication : false,
      patient: {},
      medications: {},
      treatments: {},
      vitalSigns: {},
      medicines: {},
      medicine_array: [],
      error_message: {},
      medicine_voucher: {},
      medical_records: [],

    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getPatient() {
      axios.get(this.getUrl('patient/'+this.$route.query.id))
          .then(res =>{
            this.patient = res.data.data
            this.vitalSigns = res.data.data.vitalSigns
            this.treatments = res.data.data.treatments
            this.medical_records = res.data.data.medical_records
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    // getMedicalRecord: function (){
    //   axios.get(this.getUrl('medical-record'))
    //   .then(res => {
    //     this.medical_records = res.data.data
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },
    getMedication() {
      axios.get(this.getUrl('medication/'))
          .then(res =>{
            this.medications = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    getMedicines() {
      axios.get(this.getUrl('medicine-unit'))
          .then(res =>{
            this.medicines = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    medicineVoucher: function (data){
      this.medicine_voucher = data
      let medicine_items = data.medicines
      let medicine_value = []
      medicine_items.map(el=>{
        medicine_value.push(el.total_price)
      })
      let total_price = medicine_items.reduce((pv, cv) => pv + cv.total_price, 0);
      console.log(total_price)
    },
    storeVitalSign: function (){
      let formData = new FormData(this.$refs.storeVitalSigns)
      axios.post(this.getUrl('vital-sign'),formData)
      .then(res=>{
        this.$refs.storeVitalSigns.reset()
        this.$store.dispatch('showSuccessAlert')
        this.getPatient()
      })
      .catch(err=>{
        console.log(errr)
      })
    },
    addTreatment: function (id){
      router.push({path: '/treatment',query: {id: id}})
    },
    addMedicine: function (){
      let medicine_id = $('#medicine').find(":selected").val()
      let medicine = this.medicines.filter(el=>el.id == medicine_id)
      let id = 0;
      if (this.medicine_array.length > 0){
        id = this.medicine_array.length + 1
      }else {
        id = 1
      }
      let obj = {
        id : id,
        medicine_id : medicine_id,
        name: medicine[0].name,
        qty: 1,
        day: 1,
        dose: 'dose',
        sig: '',
      }
      this.medicine_array.push(obj)
    },
    removeMedicine: function (id){
      this.medicine_array = this.medicine_array.filter(el=>el.id != id)
    },
    storeMedication: function (){
      let formData = new FormData(this.$refs.storeMedication);
      formData.append('medicines',JSON.stringify(this.medicine_array))
      axios.post(this.getUrl('medication'),formData)
      .then(res=>{
        this.$refs.storeMedication.reset()
        this.$store.dispatch('showSuccessAlert')
        this.is_medication = false
        this.getMedication()
      })
      .catch(err=>{
        console.log(err)
        this.$store.dispatch('showErrorAlert')
      })
    },
    updatePatient : function (id){
      let formData = new FormData(this.$refs.updatePatient)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('patient/'+id),formData)
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.is_edit = false
        this.getPatient()
      })
      .catch(err=>{
        console.log(err)
      })
    },
    medicalRecordDetail: function (id){
      router.push({path: '/medical-record/detail',query: {id: id}})
    },
  },
  mounted() {
    this.getPatient()
    this.getMedicines()
    this.getMedication()
  }
}
</script>

<style scoped>
li::marker {
  color: #02f86a;
}
.offcanvas{
  height: 450px;
}
.bg-gray{
  background: rgba(71, 76, 80, 0.13);
}
.dropdown-toggle::after {
  display: none;
}
body{margin-top:20px;}
.timeline {
  border-left: 3px solid #5fdaff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(114, 195, 245, 0.09);
  margin: 0 auto;
  letter-spacing: 0.2px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
}

@media (max-width: 767px) {
  .timeline {
    max-width: 98%;
    padding: 25px;
  }
}
.timeline .event {
  border-bottom: 1px dashed #e8ebf1;
  position: relative;
}

@media (max-width: 767px) {
  .timeline .event {
    padding-top: 30px;
  }
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}

@media (max-width: 767px) {
  .timeline .event:before {
    left: 0px;
    text-align: left;
  }
}

.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #5aedfa;
  box-shadow: 0 0 0 3px #46d3fd;
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

@media (max-width: 767px) {
  .timeline .event:after {
    left: -31.8px;
  }
}

.rtl .timeline {
  border-left: 0;
  text-align: right;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 3px solid #727cf5;
}

.rtl .timeline .event::before {
  left: 0;
  right: -170px;
}

.rtl .timeline .event::after {
  left: 0;
  right: -55.8px;
}
</style>