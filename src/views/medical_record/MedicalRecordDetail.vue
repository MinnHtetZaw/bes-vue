<template>
<Master>
  <div class="row">
    <div class="col-10 m-auto">
      <div class="card border-0 p-3">
        <div class="mb-3">
          <div class="d-flex justify-content-center gap-3 align-items-center">
            <div>
              <img src="../../assets/bes-logo.jpg" style="width: 50px;height: 50px;" alt="">
            </div>
            <h4 class="text-title">Medical Record</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="bg-light mb-3 p-3 rounded">
              <div class="row">
                <div class="col-4">
                  <p>Treatment Date</p>
                </div>
                <div class="col-6">
                  <p>{{medical_record.date}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Diagnosis</p>
                </div>
                <div class="col-6">
                  <p>{{vital_sign.diagnosis}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Next Appointment Date</p>
                </div>
                <div class="col-6">
                  <p>{{vital_sign.next_appointment_date}}</p>
                </div>
              </div>
            </div>
            <div class="bg-light mb-3 p-3 rounded">
              <h5 class="fw-normal text-title">Patient Information</h5>
              <div class="row">
                <div class="col-4">
                  <p>Patient ID</p>
                </div>
                <div class="col-6">
                  <p>{{medical_record.patient_ID}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Patient Name</p>
                </div>
                <div class="col-6">
                  <p>{{medical_record.patient_name}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Assign Doctor</p>
                </div>
                <div class="col-6">
                  <p>{{medical_record.doctor_name}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6">
            <!--        Treatment Information-->
            <div class="bg-light mb-3 p-3 rounded">
              <h5 class="fw-normal text-title">Treatment Information</h5>
              <div class="">
                <!--            <h6 class="small text-title">Vital Signs</h6>-->
                <div class="row">
                  <div class="col-4">
                    <p>T</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.t}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>BP</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.bp}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>SPO2</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.spo2}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>Body Weight</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.b_w}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>PR</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.pr}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>HR</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.hr}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <p>RR</p>
                  </div>
                  <div class="col-6">
                    <p>{{vital_sign.rr}}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Complaint HO</p>
                </div>
                <div class="col-6">
                  <p>{{vital_sign.complaint}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Physical Examination</p>
                </div>
                <div class="col-6">
                  <p>{{vital_sign.physical_examination}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p>Procedure</p>
                </div>
                <div class="col-6">
                  <p>{{vital_sign.procedure}}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="bg-light p-3 mb-3 rounded">
              <h5 class="fw-normal text-title">Medication</h5>
              <div>
                <table class="table table-borderless">
                  <thead>
                  <tr>
                    <th class="">No.</th>
                    <th class="">Medicine Name</th>
                    <th class="">Qty</th>
                    <th class="">Dose</th>
                    <th class="">Day</th>
                    <th class="">Total Qty</th>
                    <th class="">Sig</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(medicine,index) in medicines">
                    <td>{{index + 1}}</td>
                    <td>{{medicine.name}}</td>
                    <td>{{medicine.qty}}</td>
                    <td>{{medicine.dose}}</td>
                    <td>{{medicine.day}}</td>
                    <td>{{medicine.total_qty}}</td>
                    <td>{{medicine.sig}}</td>
                  </tr>
                  </tbody>
                </table>
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
import {mapGetters} from "vuex";
import axios from "axios";
import Master from "@/components/Master";

export default {
  components: {Master},
  data() {
    return {
      medical_record: {},
      vital_sign : {},
      medicines : {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getMedicalRecord : function (){
      axios.get(this.getUrl('medical-record/'+this.$route.query.id))
      .then(res => {
        this.medical_record = res.data.data
        this.vital_sign = res.data.data.vital_sign
        this.medicines = res.data.data.medicines
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getMedicalRecord()
  }
}


</script>

<style scoped>
p{
  margin-bottom: 5px;
}

</style>