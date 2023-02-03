<template>
  <SideNav>
    <!--    Edit-->
    <div v-if="isEdit == true" class="row">
      <div class="col-4 m-auto">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="text-secondary mb-3">Edit Category</h5>

            <button @click="isEdit = false" type="button" class="btn-close" aria-label="Close"></button>
          </div>

          <!--          <form @submit.prevent="" ref="updateCategory">-->
          <!--            <div class="mb-3">-->
          <!--              <label class="form-label">Code</label>-->
          <!--              <form-element type="text" class="form-control form-control-sm" name="code" :value="edit_category.code">-->
          <!--              &lt;!&ndash;            <span v-if="error_message.code" class="small my-1 text-danger">{{this.error_message.code[0] }}</span>&ndash;&gt;-->

          <!--            </div>-->
          <!--            <div class="mb-3">-->
          <!--              <label class="form-label">Name</label>-->
          <!--              <form-element type="text" class="form-control form-control-sm" name="name" :value="edit_category.name">-->
          <!--              &lt;!&ndash;            <span v-if="error_message.name" class="small my-1 text-danger">{{this.error_message.name[0] }}</span>&ndash;&gt;-->
          <!--            </div>-->
          <!--            <div class="mb-3">-->
          <!--              <label class="form-label">Description</label>-->
          <!--              <textarea name="description" rows="3" class="form-control form-control-sm" :value="edit_category.description"></textarea>-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <button @click="updateCategory(edit_category.id)" :disabled="isLoading == true" class="btn btn-success w-100">-->
          <!--                  <span v-if="isLoading == true">-->
          <!--                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>-->
          <!--                      Updating...-->
          <!--                  </span>-->
          <!--                <span v-else>-->
          <!--                    Update-->
          <!--                  </span>-->
          <!--              </button>-->
          <!--            </div>-->
          <!--          </form>-->
        </div>
      </div>
    </div>
    <!--    ==========-->
    <!--    Create-->
    <!--    ==============-->
    <div v-else class="row">
      <div class="col-9">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <h5 class="text-secondary mb-3">Room List</h5>
          <div v-if="this.rooms.length > 0">
            <table class="table table-sm table-striped table-hover table-borderless">
              <thead>
              <tr>
                <th class="fw-normal text-secondary text-center">#</th>
                <th class="fw-normal text-secondary text-center">Name</th>
                <th class="fw-normal text-secondary text-center">Type</th>
                <th class="fw-normal text-secondary text-center">No of Bed</th>
                <th class="fw-normal text-secondary text-center">Price Per Day</th>
                <th class="fw-normal text-secondary text-center">Floor</th>
                <th class="fw-normal text-secondary text-center">Department</th>
                <th class="fw-normal text-secondary text-center">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(room,index) in rooms">
                <td class="text-center">{{index + 1}}</td>
                <td class="text-center">{{room.name}}</td>
                <td class="text-start">{{room.type}}</td>
                <td class="text-center">{{room.no_of_bed}}</td>
                <td class="text-end">{{room.price_per_day}}</td>
                <td class="text-center">{{room.floor}}</td>
                <td class="text-start">{{room.department_id}}</td>
                <td class="d-flex justify-content-center gap-3">
                  <button @click="roomDetail(room.id)" class="btn btn-primary btn-sm">
                    Detail
                    <i class="fa-solid fa-circle-info ms-2"></i>
                  </button>

                </td>
              </tr>
              </tbody>
            </table>

          </div>
          <div v-else>
            <div class="d-flex justify-content-center">
              <img src="../../assets/logo.png" style="width: 300px;" class="" alt="">
            </div>
          </div>


        </div>
      </div>
      <div class="col-3">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <h5 class="text-secondary mb-3">Room Register</h5>
          <div>
            <form @submit.prevent="" ref="storeRoom">
              <Input name="name" label-name="Name" :error-message="error_message.name"></Input>
              <Select name="type" label-name="Select Type" option_name="Select Type">
                <option value="Standard Room">Standard Room</option>
                <option value="Double Bedded Room">Double Bedded Room</option>
              </Select>
              <Input type="number" name="price_per_day" label-name="Price Per Day" :error-message="error_message.price_per_day"></Input>
              <Select name="department_id" label-name="Select Department" option_name="Select Department">
                <option value="0">Department 1</option>
                <option value="1">Department 2</option>
                <option value="2">Department 3</option>
              </Select>
              <Select name="floor_id" label-name="Select Floor" :items="floors" option_name="Select Floor"></Select>
              <text-area label-name="Description" name="description"></text-area>
              <div>
                <button @click="storeRoom" :disabled="isLoading == true" class="btn btn-primary w-100">
                  <span v-if="isLoading == true">
                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                      Saving...
                  </span>
                  <span v-else>
                    Save
                  </span>
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  </SideNav>
</template>

<script>
import SideNav from "@/components/layout/SideNav";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import axios from "axios";
import {mapGetters} from "vuex";
import Select from "@/components/form-element/Select";
import router from "@/router";
export default {
  name: "RoomManagement",
  components: {Select, TextArea, Input, SideNav},
  data() {
    return {
      isLoading: false,
      isEdit: false,
      error_message: {},
      rooms: {},
      floors: {},
    }
  },
  computed: {
    ...mapGetters([
      'getUrl'
    ]),
  },
  methods: {
    storeRoom: function (){
      this.isLoading = true
      let formData = new FormData(this.$refs.storeRoom)
      axios.post(this.getUrl('room'), formData)
          .then(res=>{
            this.$refs.storeRoom.reset()
            this.$store.dispatch('showSuccessAlert')
            this.getRoom()
            this.error_message = ''
          })
          .catch(err => {
            this.error_message = err.response.data.errors
          })
          .finally(_=>{
            this.isLoading = false
          })
      ;
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
    getFloor: function () {
      axios.get(this.getUrl('floor'))
          .then(res =>{
            this.floors = res.data.data
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    roomDetail: function (id){
      router.push({path: '/room/details/'+id,query: {id: id}})
    }
  },
  mounted() {
    this.getRoom()
    this.getFloor()
  }
}
</script>

<style scoped>

</style>