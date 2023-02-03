<template>
  <SideNav>
    <div v-if="add_bed == false" class="row">
      <div class="col-12">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <h5 class="text-secondary mb-3">Room Details</h5>
          <div class="row">
            <div class="col-4">
              <table class="table table-borderless table-sm">
                <tbody>
                <tr>
                  <td class="text-start">Room No</td>
                  <td class="text-end">{{room.room_no}}</td>
                </tr>
                <tr>
                  <td class="text-start">Room Type</td>
                  <td class="text-end">{{room.type}}</td>
                </tr>
                <tr>
                  <td class="text-start">No of Bed</td>
                  <td class="text-end">{{room.no_of_bed}}</td>
                </tr>
                <tr>
                  <td class="text-start">Department</td>
                  <td class="text-end">{{room.department}}</td>
                </tr>
                <tr>
                  <td class="text-start">Floor</td>
                  <td class="text-end">{{room.floor}}</td>
                </tr>
                <tr>
                  <td class="text-start">Price Per Day</td>
                  <td class="text-end">{{room.price_per_day}}</td>
                </tr>
                <tr>
                  <td class="text-start">Description</td>
                  <td class="text-end">{{room.description}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="col-4 m-auto">
              <div>
                <img src="../../assets/sample_room.jpg" style="width: 300px;" alt="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div>
                <button @click="add_bed = true" class="btn btn-primary">
                  <i class="fa-solid fa-bed"></i>
                  <i class="fa-solid fa-plus ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  v-if="add_bed == true" class="row">
      <div class="col-4 m-auto">
        <div class="card border-0 rounded shadow-sm p-3">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="text-secondary">Add Bed</h6>
            <button type="button" @click="add_bed = false" class="btn-close" aria-label="Close"></button>
          </div>
          <form @submit.prevent="" ref="storeBed">

            <Input class="mb-0" name="room_id" type="hidden"  :value="room.id"></Input>
            <TextArea name="name" label-name="Name" rows="1" :error-message="bed_error_message.name"></TextArea>
            <Select name="type" :error-message="bed_error_message.type" label-name="Bed Type" option_name="Select Bed Type">
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </Select>
            <TextArea name="description" label-name="Description" error-message=""></TextArea>
            <div class="d-flex justify-content-center gap-3 align-items-center">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
              <button @click="storeBed" type="button" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="add_bed == false"  class="row">
      <div class="col-2" v-for="bed in room.beds">
        <div class="card border-0 rounded shadow-sm">
          <img src="../../assets/sample_bed.jpg" class="card-img-top">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="card-subtitle mb-0 text-secondary">{{bed.name}}</p>
                <span style="font-size: 8px;" class="badge bg-success rounded-pill">{{bed.status}}</span>
              </div>

              <button class="btn btn-primary btn-sm">
                <i class="fa-solid fa-info-circle "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SideNav>
</template>

<script>
import SideNav from "@/components/layout/SideNav";
import {mapGetters} from "vuex";
import axios from "axios";
import { Modal } from 'bootstrap'
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import Select from "@/components/form-element/Select";
export default {
  name: "RoomDetails",
  components: {Select, TextArea, Input, SideNav},
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  data() {
    return {
      room: {},
      add_bed: false,
      bed_error_message: {},

    }
  },
  methods: {
    getRoom: function () {
      axios.get(this.getUrl('room/'+this.$route.query.id))
          .then(res =>{
            this.room = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    storeBed: function (){
      this.isLoading = true
      let formData = new FormData(this.$refs.storeBed)
      axios.post(this.getUrl('bed'), formData)
          .then(res =>{
            this.$refs.storeBed.reset()
            this.$store.dispatch('showSuccessAlert')
            this.add_bed = false
            this.getRoom()
          })
          .catch(err => {
            this.bed_error_message = err.response.data.errors
          })
          .finally(_=>{
            this.isLoading = false
          })
      ;
    },
  },
  mounted() {
    this.getRoom()
  }
}
</script>

<style scoped>
.add-bed-btn{
  width: 50px;
  height: 50px;
  border: 1.5px solid rgba(105, 108, 255, 0.85);
  border-radius: 5px;
}
</style>