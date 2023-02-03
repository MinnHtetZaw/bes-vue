<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <div class="d-flex mb-3 justify-content-between align-items-center">
          <p class="text-title">Floor Lists</p>
          <div class="d-flex gap-3">
            <button @click="isCreate = true" class="btn btn-sm btn-primary">Create Floor <i class="fa-solid fa-plus ms-2"></i></button>
            <div class="btn-group btn-group-sm">
              <button @click="is_card = true" class="btn btn-outline-primary" >
                <i class="fa-solid fa-list"></i>
              </button>
              <button @click="is_card = false" class="btn btn-outline-primary">
                <i class="fa-solid fa-table"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row" v-if="is_card == true && isCreate == false">
      <div class="col-12">
        <div class="d-flex justify-content-center gap-3 flex-wrap" >
          <div @click="enterFloor(floor.id)" type="button" v-for="floor in floors" class="card border-0 mb-3">
            <div class="card-img-top my-3">
              <img style="object-fit: contain;width: 250px;border-radius: 10px" src="../assets/hospital.webp" alt="">
            </div>
            <div>
              <h6 class="fw-normal text-center mb-3">{{floor.name}}</h6>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="isCreate == true" class="row">
        <div class="col-3 m-auto">
          <div class="card p-3 border-0">
            <div class="d-flex justify-content-between mb-3 align-items-center">
              <h5 class="text-secondary mb-0">Create Floor</h5>
              <button @click="isCreate = false" class="btn btn-sm btn-close"></button>
            </div>
            <div>
              <form @submit.prevent="" ref="storeFloor">
                <Input name="name" label-name="Name" :error-message="error_message.name"></Input>
                <text-area label-name="Description" name="description"></text-area>
                <button @click="storeFloor" :disabled="isLoading == true" class="btn btn-primary w-100">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    <div v-if="is_card == false && isCreate == false" class="row">
      <div class="col-10 m-auto">
        <div class="card p-0 border-0">
          <table class="table table-hover">
            <thead>
            <tr>
              <th class="text-secondary text-center">#</th>
              <th class="text-secondary text-center">Name</th>
              <th class="text-secondary text-center">Description</th>
              <th class="text-secondary text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="floor in floors">
              <td class="text-center">{{floor.id}}</td>
              <td class="text-start">{{floor.name}}</td>
              <td class="text-start">{{floor.description}}</td>
              <td >
                <div class="d-flex mt-2 justify-content-center gap-3">
                  <i type="button" @click="editCategory(floor.id)" class="fa-solid text-warning fa-pen"></i>
                  <i type="button" @click="deleteCategory(floor.id)" class="fa-solid text-danger fa-trash"></i>
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
import SideNav from "@/components/layout/SideNav";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import axios from "axios";
import {mapGetters} from "vuex";
import Master from "@/components/Master";
import router from "@/router";
export default {
  name: "FloorList",
  components: {Master, TextArea, Input, SideNav},
  data() {
    return {
      is_card: true,
      isCreate: false,
      isLoading: false,
      isEdit: false,
      error_message: {},
      floors: {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ]),
  },
  methods: {
    storeFloor: function (){
      this.isLoading = true
      let formData = new FormData(this.$refs.storeFloor)
      axios.post(this.getUrl('floor'), formData)
          .then(res=>{
            this.$refs.storeFloor.reset()
            this.$store.dispatch('showSuccessAlert')
            this.isCreate = false
            this.getFloor()
          })
          .catch(err => {
            this.error_message = err.response.data.errors
          })
          .finally(_=>{
            this.isLoading = false
          })
      ;
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
    enterFloor: function (id){
      router.push({path: '/bedManagement',query: {id:id}})
    }
  },
  mounted() {
    this.getFloor()
  }
}
</script>

<style scoped>
.floor-card{
  width: 200px;
  padding: 30px 20px;
}
</style>