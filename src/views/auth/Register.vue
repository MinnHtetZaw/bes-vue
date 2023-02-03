<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
          <div class="row vh-100">
            <div class="col-4 m-auto">
              <div class="card px-5 py-3 border-0">
                <div class="d-flex mb-3 justify-content-center align-items-center">
                  <img style="width: 45px;" src="../../assets/bes-logo.jpg" alt="">
                </div>
                <form @submit.prevent="" ref="register">
                    <Input name="code" type="text" label-name="User Code"></Input>
                    <Input name="name" type="text" label-name="Name"></Input>
                    <Input name="email" type="text" label-name="Email"></Input>
                    <Input name="password" type="password" label-name="Password"></Input>
                    <button @click="register" class="btn mt-2 w-100 mb-3 btn-primary btn-sm">Register</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Input from "@/components/form-element/Input";
import {mapGetters} from "vuex";
import axios from "axios";
import router from "@/router";
import Swal from "sweetalert2";
export default {
  name: "Register",
  components: {Input},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    register : function (){
      let formData = new FormData(this.$refs.register)
      axios.post(this.getUrl('register'), formData)
          .then(res=>
              {
                this.$store.dispatch('showSuccessAlert')
              }
          )
          .catch(err => {
            Swal.fire({
              title: 'Please Try Again!',
              text: err.response.data.message,
              icon: 'error',
            })
          });
    }

  },
}
</script>

<style scoped>

</style>