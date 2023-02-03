<template>
    <Master>
        <div class="row">
            <div class="col-2">
              <div class="card rounded shadow-sm p-3 border-0">

                <div class="text-end">
                    <i @click="is_edit = true" type="button" class="fa-solid fa-pen text-warning"></i>
                </div>
                <div class="d-flex justify-content-center">
                  <div>
                    <img class="mb-3" src="../../assets/bes-logo.jpg" style="width: 150px;height: 150px;" alt="">
                  </div>
                </div>

                <h6 class="fw-normal text-center">{{employee.name}}</h6>
                <p class="fw-normal text-center">{{employee.title}}</p>
                <div>
                  <div class="row">
                    <div class="col-6"><p>Age</p></div>
                    <div class="col-6"><p>{{employee.age}}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6"><p>Phone</p></div>
                    <div class="col-6"><p>{{employee.phone}}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6"><p>Date of Birth</p></div>
                    <div class="col-6"><p>{{employee.date_of_birth}}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6"><p>Gender</p></div>
                    <div class="col-6"><p>{{employee.gender}}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6"><p>Position</p></div>
                    <div class="col-6"><p>{{employee.position}}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6"><p>Department</p></div>
                    <div class="col-6"><p>{{employee.department}}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6"><p>Address</p></div>
                    <div class="col-6"><p>{{employee.address}}</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-10">
                

              <div v-if="is_edit === false" class="row">
                <div class="col-6">
                  <div class="card border-0 p-3 shadow-sm rounded">
                    <h6 class="fw-normal text-secondary">Treatment List</h6>
                    <table class="table table-sm table-striped table-hover table-borderless">
                      <thead>
                      <tr>
                        <td class="text-center fw-normal text-secondary">Date</td>
                        <td class="text-center fw-normal text-secondary">Patient</td>
                        <td class="text-center fw-normal text-secondary">Diagnosis</td>
                        <td class="text-center fw-normal text-secondary">Note</td>
                        <td class="text-center fw-normal text-secondary">Action</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="treatment in treatments">
                        <td>{{treatment.date}}</td>
                        <td>{{treatment.patient_name}}</td>
                        <td>{{treatment.diagnosis}}</td>
                        <td>{{treatment.note_excerpt}}</td>
                        <td>
                          <button class="btn btn-primary btn-sm">Action</button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card border-0 p-3 shadow-sm rounded">
                    <h6 class="fw-normal text-secondary">Reports</h6>

                  </div>
                </div>
                <div class="col-3">
                  <div class="card border-0 p-3 shadow-sm rounded">
                    <h6 class="fw-normal mb-3 text-secondary">Appointment</h6>
                    <div>
                      <v-date-picker
                          @dayclick="getDate()"
                         color="teal"
                          is-dark
                         v-model="date" />
                    </div>

                  </div>
                </div>
              </div>

              <!-- Edit Employee -->
              <div v-if="is_edit === true" class="row">
                <div class="col-6 m-auto">
                  <div class="card shadow-sm mb-3 rounded p-3 border-0">
                    <div class="d-flex mb-3 justify-content-between align-items-center">
                      <h6 class="text-secondary mb-0">Edit Employee Info</h6>
                      <button @click="is_edit = false" class="btn btn-close"></button>
                    </div>
                    <div>

                      <form @submit.prevent="" ref="updateEmployee">
                        <div class="mb-3">
                          <text-area name="name" label-name="Name" rows="1" :value="employee.name" ></text-area>
                          <div class="row">
                            <div class="col-6">
                              <Input name="age" label-name="Age" type="number" :value="employee.age" ></Input>
                            </div>
                            <div class="col-6">
                              <Input name="date_of_birth" label-name="Date of Birth" :value="employee.date_of_birth" type="date" ></Input>
                            </div>
                          </div>
            
                          <Input name="phone" label-name="Phone" type="" :value="employee.phone" ></Input>
                          <text-area name="email" label-name="Email" rows="1" :value="employee.email" ></text-area>
                          <div class="row">
                            <div class="col-6">
                              <text-area name="title" label-name="Title" :value="employee.title" rows="1"></text-area>
                            </div>
                            <div class="col-6">
                              <text-area name="department" label-name="Department" :value="employee.department" rows="1"></text-area>
                            </div>
                          </div>
                          <text-area name="position" label-name="Position" :value="employee.position" rows="1" ></text-area>

                          <text-area name="specializatoin" label-name="Specialization" :value="employee.specialization" rows="1" ></text-area>

                          <text-area name="address" label-name="Address" :value="employee.address" rows="2" ></text-area>

                          <text-area name="description" label-name="Description" :value="employee.description" rows="2" ></text-area>

                          <button @click="updateEmployee(employee.id)" class="btn btn-sm btn-success w-100 btn">Update</button>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>
        
        
    </Master>
    
</template>
<script>

import axios from 'axios';
import { mapGetters } from 'vuex';
import Master from '@/components/Master';
import 'v-calendar/dist/style.css';
import VCalendarLibrary from 'v-calendar';
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import router from "@/router";

export default ({
    components :{
    Master,
    Input,
    TextArea
  },
  data() {
    return {
        is_edit: false,
        employee: {},
        treatments:{},
        date :{}
    }
    
  },
  
  computed:{
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getEmployee: function(id=this.$route.query.id){
        axios.get(this.getUrl('employee/'+id))
        .then (res=>{
            console.log(res)
            this.employee= res.data.data;
            this.treatment=res.data.data.treatments;
        })
        .catch(err=>console.log(err))
    },
    updateEmployee : function (id){
      let formData = new FormData(this.$refs.updateEmployee)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('employee/'+id),formData)
      .then(res=>{
        this.$store.dispatch('showSuccessAlert')
        this.is_edit = false
        this.getEmployee()
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getDate: function(){
        alert('Date');
    }
  },
  mounted() {
    this.getEmployee()
  },
})
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