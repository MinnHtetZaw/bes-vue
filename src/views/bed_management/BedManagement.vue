<template>
  <Master>

    <div class="row">
      <div class="col-12">
<!--   Create Room     -->
        <div v-if="is_create_room == true" class="row">
          <div class="col-3 m-auto">
            <div class="card mb-3 p-3 border-0">
              <div>
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="fw-normal text-secondary">Create Room</h5>
                  <button @click="is_create_room = false" class="btn-close"></button>
                </div>
                <form @submit.prevent="" ref="storeRoom">
                  <input name="floor_id" type="hidden" :value="floor.id">
                  <Input name="name" label-name="Name" :error-message="room_error_message.name"></Input>
                  <Select name="type" label-name="Select Type" option_name="Select Type">
                    <option value="Dual Room">OT Room</option>
                    <option value="Dual Room">Dual Room</option>
                    <option value="Quad Room">Quad Room</option>
                  </Select>
                  <Input name="price_per_day" type="number" label-name="Price Per Day" :error-message="room_error_message.price_per_day"></Input>
                  <text-area label-name="Description" name="description"></text-area>
                  <div>
                    <button @click="storeRoom" class="btn btn-sm btn-primary w-100">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
<!--        -->
<!--        Create Bed -->
        <div v-if="is_create_bed == true" class="row">
          <div class="col-3 m-auto">
            <div class="card mb-3 p-3 border-0">
              <div>
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="fw-normal text-secondary">Create Bed</h5>
                  <button @click="is_create_bed = false" class="btn-close"></button>
                </div>
                <form @submit.prevent="" ref="storeBed">
                  <Input name="name" label-name="Name" :error-message="bed_error_message.name"></Input>
                  <Select name="room_id" label-name="Select Room" option_name="Select Room">
                    <option :value="room.id" v-for="room in floor.rooms">{{room.name}}</option>
                  </Select>
                  <text-area label-name="Description" name="description"></text-area>
                  <div>
                    <button @click="storeBed" class="btn btn-primary w-100">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div v-if="is_create_floor == false && is_create_room == false && is_create_bed == false" class="row">
          <div class="col-11 m-auto">
            <div class=" border-0 p-3">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 class="fw-normal">{{ floor.name }} | <span class="h6 text-secondary">Total Number of Room : {{floor.total_no_room}}</span></h5>
<!--                  <p>Available : 0 | Occupied : 0 | Isolated : 0 | Lost : 0</p>-->
                </div>
                <div class="d-flex gap-3">
                  <button class="btn btn-sm rounded py-1 btn-success"><span style="font-size: 11px;">Available</span></button>
                  <button class="btn btn-sm rounded py-1 btn-warning"><span style="font-size: 11px;">Occupied</span></button>
                  <button class="btn btn-sm rounded py-1 btn-primary"><span style="font-size: 11px;">Isolated</span></button>
                  <button class="btn btn-sm rounded py-1 btn-danger"><span style="font-size: 11px;">Lost</span></button>
                </div>
              </div>
              <div class="d-flex mb-3 justify-content-end gap-2">
                <button @click="is_create_room = true" class="btn btn-sm btn-primary">Add Room
                <i class="fa-solid fa-plus"></i>
                </button>
                <button @click="is_create_bed = true" class="btn btn-sm btn-primary">Add Bed
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <div class="row">
                <div class="col-12 m-auto">
                  <div class="d-flex mb-5 flex-wrap gap-3">
                    <div style="width: 250px;height: 100px;" class="card mb-3 border-0 p-2 pt-1 " v-for="bed in floor.beds">
                      <div class="d-flex justify-content-between align-items-center">
                        <button v-if="bed.status_int == 0" class="btn px-3 btn-success"></button>
                        <button v-if="bed.status_int == 1" class="btn px-3 btn-warning"></button>
                        <div class="dropup-center">
                          <a type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="text-secondary fa-solid fa-ellipsis-vertical"></i>
                          </a>
                          <div class="dropdown-menu border-0 p-0">
                            <div class="list-group">
                              <button :disabled="bed.status_int == 1" type="button" class="list-group-item list-group-item-action" data-bs-toggle="offcanvas" :data-bs-target="'#admission'+bed.id" aria-controls="admission">
                                <i class="fa-solid me-2 fa-clipboard-user"></i>
                                Admission
                              </button>
                              <button type="button" class="list-group-item list-group-item-action" data-bs-toggle="offcanvas" :data-bs-target="'#detail'+bed.id" aria-controls="detail">
                                <i class="fa-solid me-2 fa-info-circle"></i>
                                Detail
                              </button>

                            </div>
                          </div>
                        </div>
                        <div class="offcanvas offcanvas-end" tabindex="-1" :id="'admission'+bed.id" aria-labelledby="admissionLabel">
                          <div class="offcanvas-header">
                            <h5 class="text-secondary mb-0">Patient Admission</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          <div class="offcanvas-body px-3">
                            <div>
                              <!--                              patient ရှာဖို့-->
                              <textarea class="form-control form-control-sm mb-3" @keyup="searchPatient(patient_search)" v-model="patient_search" rows="1" placeholder="Enter Patient ID"></textarea>
                            </div>
                            <div class="row">
                              <div class="col-5"><p>Room No</p></div>
                              <div class="col-7"><p>{{bed.room.name}}</p></div>
                            </div>
                            <div class="row">
                              <div class="col-5"><p>Bed ID</p></div>
                              <div class="col-7"><p>{{bed.name}}</p></div>
                            </div>
                            <div class="row">
                              <div class="col-5"><p>Price/Day</p></div>
                              <div class="col-7"><p>{{bed.room.price_per_day}}</p></div>
                            </div>
                            <div class="row">
                              <div class="col-5"><p>Status</p></div>
                              <div class="col-7"><p class="badge bg-success rounded-pill">{{bed.status}}</p></div>
                            </div>
                            <form @submit.prevent="" ref="admission">

                              <div v-if="admission_patient != null">
<!--                                Admission Store အတွက်လိုအပ်တဲ့ data -->
                                <input type="hidden" :id="'bed_id'+bed.id" :value="bed.id">
                                <input type="hidden" :id="'patient_id'+bed.id" :value="admission_patient.id">
<!--                                -->
                                <div class="row">
                                  <div class="col-5"><p>Patient ID:</p></div>
                                  <div class="col-7"><p>{{admission_patient.patient_id}}</p></div>
                                </div>
                                <div class="row">
                                  <div class="col-5"><p>Name:</p></div>
                                  <div class="col-7"><p>{{admission_patient.name}}</p></div>
                                </div>
                                <div class="row">
                                  <div class="col-5"><p>Age:</p></div>
                                  <div class="col-7"><p>{{admission_patient.age}}</p></div>
                                </div>
                                <div class="row">
                                  <div class="col-5"><p>NRC:</p></div>
                                  <div class="col-7"><p>{{admission_patient.nrc}}</p></div>
                                </div>
                                <div class="row">
                                  <div class="col-5"><p>Address:</p></div>
                                  <div class="col-7"><p>{{admission_patient.address}}</p></div>
                                </div>
                              </div>

                              <div class="mb-3">
                                <label class="form-label small text-secondary">Assign Doctor</label>
                                <select v-model="admission_doctor" class="form-select form-select-sm" id="">
                                  <option value="">Select Doctor</option>
                                  <option :value="doctor.id" v-for="doctor in doctors">{{doctor.name}}</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label class="form-label small text-secondary">Admission Date</label>
                                <input type="date" v-model="date" class="form-control form-control-sm">
                              </div>
                              <div class="mb-3">
                                <label class="form-label small text-secondary">Admission Time</label>
                                <input type="time" v-model="time" class="form-control form-control-sm">
                              </div>
                              <div v-for="patient in patients">
                                <div type="button" @click="admissionPatient(patient)" class="card rounded-1 shadow-sm p-1 px-2 mb-3">
                                  <p class="mb-0">ID : {{patient.patient_id}}</p>
                                  <p class="mb-0">Name : {{patient.name}}</p>
                                </div>
                              </div>
                              <div>
                                <button @click="admission(bed.id)" class="btn btn-sm btn-success w-100">Admission</button>
                              </div>
                            </form>


                          </div>
                        </div>
                        <div class="offcanvas offcanvas-end" tabindex="-1" :id="'detail'+bed.id" aria-labelledby="detailLabel">
                          <div class="offcanvas-header">
                            <h5 class="text-secondary mb-0">Patient Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          <div class="offcanvas-body px-3">
                            <div>
                              <div class="row">
                                <div class="col-5"><p>Patient ID:</p></div>
                                <div class="col-7"><p>{{bed.patient_ID}}</p></div>
                              </div>
                              <div class="row">
                                <div class="col-5"><p>Name:</p></div>
                                <div class="col-7"><p>{{bed.patient.name}}</p></div>
                              </div>
<!--                              <div class="row">-->
<!--                                <div class="col-5"><p>Assign Doctor:</p></div>-->
<!--                                <div class="col-7"><p>{{bed.patient.name}}</p></div>-->
<!--                              </div>-->
                              <div class="row">
                                <div class="col-5"><p>Room ID:</p></div>
                                <div class="col-7"><p>{{bed.room.name}}</p></div>
                              </div>
                              <div class="row">
                                <div class="col-5"><p>Bed ID:</p></div>
                                <div class="col-7"><p>{{bed.name}}</p></div>
                              </div>
                              <div class="row">
                                <div class="col-5"><p>Price Per Day:</p></div>
                                <div class="col-7"><p>{{bed.room.price_per_day}} MMK</p></div>
                              </div>
<!--                              <button @click="approveDischarge" class="btn btn-sm btn-primary w-100">Approve Discharge</button>-->
                              <button @click="viewProfile(bed.patient_id)" class="btn btn-sm btn-primary w-100">View Profile <i class="fa-solid fa-user-circle"></i> </button>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="">
                        <p class=" text-center">Room No : {{bed.room.name}} | Bed ID: {{bed.name}}</p>
                        <p class=" text-center">Patient ID : {{bed.patient_ID}}</p>
                      </div>
                    </div>
                  </div>
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
import SideNav from "@/components/layout/SideNav";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import axios from "axios";
import {mapGetters} from "vuex";
import Select from "@/components/form-element/Select";
import Master from "@/components/Master";
import router from "@/router";
import FilterNav from "@/components/FilterNav";
export default {
  name: "BedManagement",
  components: {FilterNav, Master, Select, TextArea, Input, SideNav },
  data() {
    return {
      isLoading: false,
      isEdit: false,
      error_message: {},
      room_error_message: {},
      bed_error_message: {},
      rooms: {},
      beds: {},
      floors: {},
      floor: {},
      is_create_floor: false,
      is_create_room: false,
      is_create_bed: false,
      patient_search: '', // Patient ရှာဖို့
      patients: {},
      admission_patient: null,
      patient_id: '',
      bed_id: '',
      date: '',
      time: '',
      doctors: {},
      admission_doctor: '',
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ]),
  },
  methods: {
    getFloor: function () {
      axios.get(this.getUrl('floor/'+this.$route.query.id))
          .then(res =>{
            this.floor = res.data.data
          })
          .catch(err=> {
            console.log(err)
          })
    },
    getDoctor: function () {
      axios.get(this.getUrl('doctor'))
          .then(res =>{
            this.doctors = res.data.data
          })
          .catch(err=> {
            console.log(err)
          })
    },
    storeBed: function (){
      let formData = new FormData(this.$refs.storeBed)
      axios.post(this.getUrl('bed'), formData)
          .then(res =>{
            this.bed_error_message = ''
            this.$refs.storeBed.reset()
            this.$store.dispatch('showSuccessAlert')
            this.getFloor()
            this.is_create_bed = false
          })
          .catch(err => {
            this.bed_error_message = err.response.data.errors
          })

      ;
    },
    storeDoctorSchedule: function (){
      let formData = new FormData(this.$refs.storeDoctorSchedule)
      axios.post(this.getUrl('doctor-schedule'), formData)
          .then(res=>{
            this.$refs.storeDoctorSchedule.reset()
            this.$store.dispatch('showSuccessAlert')
          })
          .catch(err => {
            this.$store.dispatch('showErrorAlert')
          });
    },
    storeRoom: function (){
      let formData = new FormData(this.$refs.storeRoom)
      axios.post(this.getUrl('room'), formData)
          .then(res=>{
            this.$refs.storeRoom.reset()
            this.$store.dispatch('showSuccessAlert')
            this.getFloor()
            this.is_create_room = false
          })
          .catch(err => {
            this.room_error_message = err.response.data.errors
          });
    },
    approveDischarge: function (){
      let formData = new FormData()
      formData.append('_method','PATCH')
      if (confirm('Please Approve Discharge!') == true){
        this.$store.dispatch('showSuccessAlert')
        // axios.post(this.getUrl('admission/'+))
      }
    },
    getBed: function () {
      axios.get(this.getUrl('bed'))
          .then(res =>{
            this.beds = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    getRoom: function () {
      axios.get(this.getUrl('room'))
          .then(res =>{
            this.rooms = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },

    selectFloor: function (floor){
      console.log(floor)
    },
    addFloor: function (){
      router.push('/floor')
    },
    searchPatient:function (v){
      axios.get(this.getUrl('patient?search='+v))
          .then(res =>{
            this.patients = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    admissionPatient:function (v){
      this.admission_patient = v
      this.patient_search = ''
      this.patients = ''
    },
    // admission store
    admission:function (id){
      if (confirm("Please Confirm!") == true) {
        let patient_id = $('#patient_id'+id).val();
        let data = {
          'patient_id': patient_id,
          'bed_id': id,
          'doctor_id': this.admission_doctor,
          'date': this.date,
          'time': this.time,
        }
        axios.post(this.getUrl('admission'), data)
            .then(res=>{
              this.$store.dispatch('showSuccessAlert')
              this.getFloor()
            })
            .catch(err => {
              console.log(err)
            });
      } else {
      }
    },
    viewProfile:function (id){
      router.push({path: 'patient/detail/'+id ,query: {id: id}})
    }
  },
  mounted() {
    this.getBed()
    this.getRoom()
    this.getFloor()
    this.getDoctor()
  }
}
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.offcanvas{
  width: 400px;
}
</style>