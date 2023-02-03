<template>
<Master>
  <div class="row">
    <div class="col-12">
      <div>
        <h6>Edit Medical </h6>
      </div>
     <div class="card border-0 p-3">
       <p>{{medical_record}}</p>
       <br>

     </div>
    </div>
  </div>

  <div class="row">
    <div class="col-10 m-auto">
      <div class="card border-0 p-3">
        <ul class="nav nav-tabs" id="myTab" role="tablist">

          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Vital Signs</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Medication</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Procedure Items</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Surgeon Fee</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div class="my-3">
              <div class="row">
                <div class="col-6">
                  <form @submit.prevent="" ref="updateRecord">
                    <input type="hidden" name="patient_id" :value="medical_record.patient_id">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input type="date" class="form-control" name="date" :value="medical_record.date">
                    </div>
<!--                    <div class="mb-3">-->
<!--                      <label class="form-label">Choose Doctor</label>-->
<!--                      <select name="doctor_id" class="form-select">-->
<!--                        <option :value="doctor.id" v-for="doctor in doctors">{{doctor.name}}</option>-->
<!--                      </select>-->
<!--                    </div>-->
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">T</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="t" :value="vital_sign.t">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">BP</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="bp" :value="vital_sign.bp">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">SPO2</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="spo2" :value="vital_sign.spo2">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Body Weight</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="b_w" :value="vital_sign.b_w">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">PR</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="pr" :value="vital_sign.pr">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">HR</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="hr" :value="vital_sign.hr">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">RR</label>
                      <div class="col-6">
                        <input type="text" class="form-control form-control-sm" name="rr" :value="vital_sign.rr">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Complaint H/OO</label>
                      <div class="col-6">
                        <textarea name="complaint" rows="3" class="form-control form-control-sm" :value="vital_sign.complaint"></textarea>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Physical Examination</label>
                      <div class="col-6">
                        <textarea name="physical_examination" rows="3" class="form-control form-control-sm" :value="vital_sign.physical_examination"></textarea>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Procedure & etc</label>
                      <div class="col-6">
                        <textarea name="procedure" rows="3" class="form-control form-control-sm" :value="vital_sign.procedure"></textarea>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Diagnosis</label>
                      <div class="col-6">
                        <textarea name="diagnosis" rows="3" class="form-control form-control-sm" :value="vital_sign.diagnosis"></textarea>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Next Appointment Date</label>
                      <div class="col-6">
                        <input type="date" name="next_appointment_date" class="form-control form-control-sm" :value="vital_sign.next_appointment_date">
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-4 small text-secondary col-form-label">Use OT Room</label>
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
                    <div>
                      <button @click="storeRecord" class="btn btn-sm btn-primary">Save</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <form @submit.prevent="" ref="storeMedication">
              <div class="col-4">
                <div class="mb-3">
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
                <button @click="updateRecord" class="btn btn-primary px-5 btn-sm">Save Medicine</button>
              </div>
            </form>
          </div>
          <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div class="row">
              <div class="col-6">
                <h6 class=" my-3">Procedure Items</h6>
                <div>
                  <h6 class="text-secondary fw-normal ">Needles</h6>
                  <div v-for="procedure in procedure_items">
                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="select_procedure_items" type="checkbox" :value="procedure" id="flexCheckDefault">
                      <div class="d-flex align-items-center gap-3">
                        <label class="form-check-label text-secondary" for="flexCheckDefault">
                          {{procedure.name}}
                        </label>
                        <input @change="changeQty(procedure.id)" type="number" class="form-control w-25 form-control-sm" :value="procedure.qty">
                      </div>

                    </div>
                  </div>
                  <div>{{select_procedure_items}}</div>

                </div>
                <div class="d-flex justify-content-center">
                  <button @click="updateRecord" class="btn btn-primary btn-sm">Save Procedure Items</button>
                </div>
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
                      <textarea @keyup="addSurgeonName(surgeon.id)" :id="'surgeon_name'+surgeon.id" name="" rows="1" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <label class="form-label text-secondary">Charges</label>
                      <input @keyup="addSurgeonCharges(surgeon.id)" :id="'surgeon_price'+surgeon.id" type="number" class="form-control">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>{{surgeon_array}}</p>
            </div>
            <div class="d-flex justify-content-center">
              <button @click="updateRecord" class="btn btn-primary btn-sm">Save</button>
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
import {mapGetters} from "vuex";
import axios from "axios";
import TextArea from "@/components/form-element/TextArea";
export default {
  name: "EditTreatment",
  components: {TextArea, Master},
  data() {
    return {
      medicines: {},
      medicine_items: [],//ရွေးထားတဲ့ဆေးများ
      medical_record : {},
      vital_sign : {},
      procedure_items: [
        {
          id: 1,
          name: '500cc Syringe',
          price: 1000,
          type: 'Syringe',
          qty: 1,
        },
        {
          id: 2,
          name: '300cc Syringe',
          price: 1000,
          type: 'Syringe',
          qty: 1,
        },
        {
          id: 3,
          name: '200cc Syringe',
          price: 1000,
          type: 'Syringe',
          qty: 1,
        },{
          id: 4,
          name: '500cc Suture',
          price: 1000,
          type: 'Suture',
          qty: 1,
        },{
          id: 5,
          name: '800cc Suture',
          price: 1000,
          type: 'Suture',
          qty: 1,
        },
      ],
      select_procedure_items: [],
      surgeon_array : [],

    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getMedicalRecord: function (){
      axios.get(this.getUrl('medical-record/'+this.$route.query.id))
      .then(res => {
        this.medical_record = res.data.data
        this.vital_sign = res.data.data.vital_sign
      })
      .catch(err => {
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
    storeMedicine: function (){
      let formData = new FormData(this.$refs.storeMedication);
      let medicine_items = localStorage.getItem('ls_medicine') //local storage
      formData.append('medicine_items',medicine_items)
      axios.post(this.getUrl('medicine-item'),formData)
          .then(res=>{
            console.log(res)
            this.$refs.storeMedication.reset()
            localStorage.removeItem('ls_medicine')
            this.$store.dispatch('showSuccessAlert')
          })
          .catch(err=>{
            console.log(err)
            this.$store.dispatch('showErrorAlert')
          })
    },
    updateRecord: function (){
      let formData = new FormData();
      let medicine_items = localStorage.getItem('ls_medicine') //local storage
      // formData.append('medicine_items',medicine_items)
      // formData.append('procedure_items',JSON.stringify(this.select_procedure_items))
      formData.append('surgeon_services',JSON.stringify(this.surgeon_array))
      formData.append('_method','PATCH')
      axios.post(this.getUrl('medical-record/'+this.$route.query.id),formData)
          .then(res=>{
            localStorage.removeItem('ls_medicine')
            this.$store.dispatch('showSuccessAlert')
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
    },
    addSurgeonName: function (id){
      let name = $('#surgeon_name'+id).val()
      let surgeon = this.surgeon_array.filter(el => el.id == id)
      surgeon[0].name = name
    },
    addSurgeonCharges: function (id){
      let name = $('#surgeon_price'+id).val()
      let surgeon = this.surgeon_array.filter(el => el.id == id)
      surgeon[0].charges = name
    }
  },
  mounted() {
    this.getMedicalRecord()
    this.getMedicines()
    this.getLocalStorageMedicine()
  }
}
</script>

<style scoped>

</style>