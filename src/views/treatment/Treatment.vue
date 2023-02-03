<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <h6 class="text-secondary mb-3">Treatment</h6>
        <div class="card p-3 shadow-sm border-0 rounded">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="vital-tab" data-bs-toggle="tab" data-bs-target="#vital-tab-pane" type="button" role="tab" aria-controls="vital-tab-pane" aria-selected="true">Vital Signs</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="medication-tab" data-bs-toggle="tab" data-bs-target="#medication-tab-pane" type="button" role="tab" aria-controls="medication-tab-pane" aria-selected="false">Medication</button>
            </li>
<!--            *************-->
<!--            <li class="nav-item" role="presentation">-->
<!--              <button class="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Procedure Items</button>-->
<!--            </li>-->
<!--            <li class="nav-item" role="presentation">-->
<!--              <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Surgeon Fee</button>-->
<!--            </li>-->
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="vital-tab-pane" role="tabpanel" aria-labelledby="vital-tab" tabindex="0">
              <div class="my-3">
                <div class="row">
                  <div class="col-6">
                    <form @submit.prevent="" ref="storeRecord">

                      <input type="hidden" name="patient_id" :value="patient.id">
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Date</label>
                        <div class="col-6">
                          <input type="date" class="form-control form-control-sm" name="date">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Choose Doctor</label>
                        <div class="col-6">
                          <select name="doctor_id" class="form-select form-select-sm">
                            <option value="">Select Doctor</option>
                            <option :value="doctor.id" v-for="doctor in doctors">{{doctor.name}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">T</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="t">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">BP</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="bp">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">SPO2</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="spo2">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Body Weight</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="b_w">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">PR</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="pr">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">HR</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="hr">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">RR</label>
                        <div class="col-6">
                          <input type="text" class="form-control form-control-sm" name="rr">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Complaint H/OO</label>
                        <div class="col-6">
                          <textarea name="complaint" rows="2" class="form-control form-control-sm"></textarea>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Physical Examination</label>
                        <div class="col-6">
                          <textarea name="physical_examination" rows="2" class="form-control form-control-sm"></textarea>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Procedure & etc</label>
                        <div class="col-6">
                          <textarea name="procedure" rows="2" class="form-control form-control-sm"></textarea>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Diagnosis</label>
                        <div class="col-6">
                          <textarea name="diagnosis" rows="2" class="form-control form-control-sm"></textarea>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Next Appointment Date</label>
                        <div class="col-6">
                          <input type="date" name="next_appointment_date" class="form-control form-control-sm">
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-4 small text-secondary form-label">Use OT Room</label>
                        <div class="col-6">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="ot_room" value="1">
                            <label class="form-check-label" >Yes</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="ot_room" value="0">
                            <label class="form-check-label">No</label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-10">
                          <button @click="storeRecord" class="btn btn-sm btn-primary w-100">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
            <div class="tab-pane fade" id="medication-tab-pane" role="tabpanel" aria-labelledby="medication-tab" tabindex="0">

                <div class="col-4">
                  <div class="mb-3">
                    <input name="medical_record_id" type="" id="medical_record_id">
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
                <div class="bg-light mb-3 rounded p-2">
                  <table class="table table-borderless table-sm">
                    <thead>
                    <tr>
                      <th class="text-center">Medicine Name</th>
                      <th class="text-center">Qty</th>
                      <th class="text-center">Dose</th>
                      <th class="text-center">Day</th>
                      <th class="text-center">Total Qty</th>
                      <th class="text-center">Sig</th>
                      <th class="text-center"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="medicine in medicine_items">
                      <td>{{medicine.name}}</td>
                      <td style="width: 100px;" class="text-center">
                        <input @change="changeMedicineQty(medicine.id)" :id="'medicine_qty'+medicine.id" type="number" class="form-control form-control-sm" :value="medicine.qty">
                      </td>
                      <td style="width: 200px;">
                        <select @change="chooseDose(medicine.id)" :id="'medicine_dose'+medicine.id" name="" class="form-select form-select-sm">
                          <option :selected="medicine.dose == 'AA'" value="AA">AA</option>
                          <option :selected="medicine.dose == 'BB'" value="BB">BB</option>
                          <option :selected="medicine.dose == 'CC'" value="CC">CC</option>
                          <option :selected="medicine.dose == 'DD'" value="DD">DD</option>
                        </select>
                      </td>
                      <td style="width: 75px;" class="text-center">
                        <input @change="changeMedicineDay(medicine.id)" :id="'medicine_day'+medicine.id" type="number" class="form-control form-control-sm" :value="medicine.day">
                      </td>
                      <td style="width: 150px;" class="text-center">
                        <input :id="'medicine_total_qty'+medicine.id" readonly type="number" class="form-control form-control-sm" :value="medicine.total_qty">
                      </td>
                      <td>
                        <textarea @keyup="chooseSig(medicine.id)" name="" :id="'medicine_sig'+medicine.id" rows="1" class="form-control form-control-sm" :value="medicine.sig"></textarea>
                      </td>
                      <td class="text-center">
                        <i type="button" @click="removeMedicine(medicine.id)" class="fa-solid fa-remove text-danger"></i>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="d-flex justify-content-center">
                  <button @click="storeMedication()" class="btn btn-primary px-5 btn-sm">Save</button>
                </div>
            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
              <div class="row">
                <div class="col-4">
                  <h6 class=" my-3">Procedure Items</h6>
                  <div>
                    <h6 class="text-secondary fw-normal ">Needles</h6>
                    <div v-for="procedure in procedure_items">
                      <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" :value="procedure.id" id="flexCheckDefault">
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                          {{procedure.name}}
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-3">
                  <h6 class=" my-3">Qty</h6>

                </div>
              </div>


            </div>
            <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
              <div class="d-flex justify-content-end my-3">
                <button @click="addSurgeon" class="btn btn-primary btn-sm">Add Surgeon <i class="fa-solid fa-plus ms-2"></i></button>
              </div>
              <div class="row" v-for="surgeon in surgeon_array">
                <div class="col-6 m-auto">
                  <div class="row mb-3">
                    <div class="col-6">
                      <div>
                        <label class="form-label text-secondary">Surgeon Name</label>
                        <textarea name="" rows="1" class="form-control"></textarea>
                      </div>
                    </div>
                    <div class="col-6">
                      <div>
                        <label class="form-label text-secondary">Charges</label>
                        <input type="number" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary btn-sm">Save</button>
              </div>
            </div>
          </div>
<!--          <div class="col-4">-->
<!--            <form @submit.prevent="" ref="storeTreatment">-->
<!--              <Input name="patient_id" type="hidden" :value="this.$route.query.id"></Input>-->
<!--              <Select name="doctor_id" label-name="Select Doctor">-->
<!--                <option :value="doctor.id" v-for="doctor in doctors">{{doctor.name}}</option>-->
<!--              </Select>-->
<!--              <text-area name="diagnosis" label-name="Diagnosis" rows="1"></text-area>-->
<!--              <text-area name="note" label-name="Note"></text-area>-->
<!--              <div class="d-flex justify-content-center">-->
<!--                <button @click="storeTreatment(this.$route.query.id)" class="btn btn-primary">Save</button>-->
<!--              </div>-->
<!--            </form>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </Master>
</template>

<script>
import Master from "@/components/Master";
import Select from "@/components/form-element/Select";
import {mapGetters} from "vuex";
import axios from "axios";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import router from "@/router";

export default {
  name: "Treatment",
  components: {TextArea, Input, Select, Master},
  data() {
    return {
      doctors: {},
      medicines: {},
      medicine_items: [],//ရွေးထားတဲ့ဆေးများ
      surgeon_array : [],
      accept: false,
      patient: {},
      procedure_items: [
        {
          id: 1,
          name: '500cc Syringe',
          price: 1000,
          type: 'Syringe'
        },
        {
          id: 2,
          name: '300cc Syringe',
          price: 1000,
          type: 'Syringe'
        },
        {
          id: 3,
          name: '200cc Syringe',
          price: 1000,
          type: 'Syringe'
        },{
          id: 4,
          name: '500cc Suture',
          price: 1000,
          type: 'Suture'
        },{
          id: 5,
          name: '800cc Suture',
          price: 1000,
          type: 'Suture'
        },
      ],
      medical_record_id: ''
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    addskill: function (e){
      console.log(e)
    },
    changeTab: function (){
      $("#vital-tab").removeClass('active')
      $("#vital-tab-pane").removeClass('show active')
      $("#medication-tab").addClass('active')
      $("#medication-tab-pane").addClass('show active')
    },
    getPatient: function (){
      axios.get(this.getUrl('patient/'+this.$route.query.id))
      .then(res => {
        this.patient = res.data.data
      })
      .catch(err =>{
        console.log(err)
      })
    },
    getDoctors: function (){
      axios.get(this.getUrl('employee'))
          .then(res=>{
            this.doctors = res.data.data
          })
          .catch(err=>{
            console.log(err)
          })
    },
    storeVitalSign: function (){
      let formData = new FormData(this.$refs.storeVitalSigns)
      axios.post(this.getUrl('vital-sign'),formData)
          .then(res=>{
            this.$refs.storeVitalSigns.reset()
            this.$store.dispatch('showSuccessAlert')

          })
          .catch(err=>{
            console.log(err)
          })
    },
    storeTreatment: function (id){
      let formData = new FormData(this.$refs.storeTreatment)
      axios.post(this.getUrl('treatment'),formData)
      .then(res=>{
        this.$refs.storeTreatment.reset()
        this.$store.dispatch('showSuccessAlert')
        router.push({path: '/patient/detail/'+id,query: {id: id}})
      })
      .catch(err=>{
        console.log(err)
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
    //ဆေးပေး
    addMedicine: function (){
      let medicine_id = $('#medicine').find(":selected").val()
      let medicine = this.medicines.filter(el=>el.id == medicine_id)
      let ls_medicine = localStorage.getItem('ls_medicine');
      let ls_medicine_obj = JSON.parse(ls_medicine)


      // local storage

      if (ls_medicine == null){
        ls_medicine = '[]'
        ls_medicine_obj = JSON.parse(ls_medicine)
        let id = 1
        let obj = {
          id : id,
          medicine_id : medicine_id,
          name: medicine[0].name,
          qty: 1,
          day: 1,
          total_qty: 1,
          dose: '',
          sig: '',
          selling_price: medicine[0].selling_price,
        }

        ls_medicine_obj.push(obj)
        localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      }else {
        let obj = {
          id : ls_medicine_obj.length +1,
          medicine_id : medicine_id,
          name: medicine[0].name,
          qty: 1,
          day: 1,
          total_qty: 1,
          dose: '',
          sig: '',
          selling_price: medicine[0].selling_price,

        }
        ls_medicine_obj.push(obj)
      }

      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.getLocalStorageMedicine() //ရွေးထားတဲ့ ဆေးတွေပြန်ပြ
    },
    // local storage ထဲက ဆေးတွေယူ
    getLocalStorageMedicine: function (){
      let ls_medicine = localStorage.getItem('ls_medicine')
      if (ls_medicine == null){
        this.medicine_items = []
      }
      this.medicine_items = JSON.parse(ls_medicine)
    },
    // ဆေးအရေအတွက်ပြောင်း
    changeMedicineQty : function (id){
      let ls_medicine = localStorage.getItem('ls_medicine')
      let ls_medicine_obj = JSON.parse(ls_medicine)
      let qty = $('#medicine_qty'+id).val()
      let medicine = ls_medicine_obj.filter(el=>el.id == id)
      medicine[0].qty = qty
      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.calcMedicineTotalQty(id)
    },
    //dose ရွေးတာကို local storage ထဲထည့်
    chooseDose : function (id){
      let ls_medicine = localStorage.getItem('ls_medicine')
      let ls_medicine_obj = JSON.parse(ls_medicine)
      let medicine = ls_medicine_obj.filter(el=>el.id == id)
      medicine[0].dose = $('#medicine_dose'+id).find(':selected').val()
      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.getLocalStorageMedicine()
    },
    //sig ရွေးတာကို local storage ထဲထည့်
    chooseSig : function (id){
      let ls_medicine = localStorage.getItem('ls_medicine')
      let ls_medicine_obj = JSON.parse(ls_medicine)
      let medicine = ls_medicine_obj.filter(el=>el.id == id)
      medicine[0].sig = $('#medicine_sig'+id).val()
      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.getLocalStorageMedicine()
    },
    //duration change (ရက်ပြောင်း)
    changeMedicineDay : function (id){
      let ls_medicine = localStorage.getItem('ls_medicine')
      let ls_medicine_obj = JSON.parse(ls_medicine)
      let day = $('#medicine_day'+id).val()
      let medicine = ls_medicine_obj.filter(el=>el.id == id)
      medicine[0].day = day
      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.calcMedicineTotalQty(id)
    },
    //calc medicine total qty
    calcMedicineTotalQty: function (id){
      let ls_medicine = localStorage.getItem('ls_medicine')
      let ls_medicine_obj = JSON.parse(ls_medicine)
      let medicine = ls_medicine_obj.filter(el=>el.id == id)
      let qty = medicine[0].qty
      let day = medicine[0].day
      medicine[0].total_qty = qty * day
      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.getLocalStorageMedicine()
    },
    removeMedicine: function (id){
      let ls_medicine = localStorage.getItem('ls_medicine')
      let ls_medicine_obj = JSON.parse(ls_medicine)
      //remove from obj
      ls_medicine_obj = ls_medicine_obj.filter(el=> el.id != id)
      localStorage.setItem('ls_medicine',JSON.stringify(ls_medicine_obj))
      this.getLocalStorageMedicine()

    },
    storeMedication: function (){
      let medical_record_id = $('#medical_record_id').val()
      let formData = new FormData();
      let medicine_items = localStorage.getItem('ls_medicine') //local storage
      formData.append('medicine_items',medicine_items)
      // formData.append('procedure_items',JSON.stringify(this.select_procedure_items))
      // formData.append('surgeon_services',JSON.stringify(this.surgeon_array))
      formData.append('_method','PATCH')
      axios.post(this.getUrl('medical-record/'+ Number(medical_record_id)),formData)
          .then(res=>{
            localStorage.removeItem('ls_medicine')
            this.$store.dispatch('showSuccessAlert')
            // router.push({path: 'patient/detail/'+this.$route.query.id ,query: {id: this.$route.query.id}})
          })
          .catch(err=>{
            console.log(err)
            this.$store.dispatch('showErrorAlert')
          })
    },
    storeRecord: function (){
      let formData = new FormData(this.$refs.storeRecord)
      axios.post(this.getUrl('medical-record'),formData)
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.changeTab()
        $('#medical_record_id').val(res.data.id)
      })
      .catch(err=>{
        console.log(err)
        this.$store.dispatch('showErrorAlert')
      })
    },
    //Surgeon add
    addSurgeon:function (){
      let obj = {
        'id' : this.surgeon_array.length,
        'name' : '',
        'charges' : 0,
      }
      this.surgeon_array.push(obj)
      console.log(this.surgeon_array)
    }
  },
  mounted() {
    this.getPatient()
    this.getDoctors()
    this.getMedicines()
    this.getLocalStorageMedicine()
  }
}
</script>

<style scoped>

</style>