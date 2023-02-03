<template>
  <Master>
    <div class="col-8 m-auto">
      <div class="card p-3 mb-3 rounded shadow-sm border-0">
        <h4 class="text-secondary text-center fw-normal">Patient Register</h4>

        <div class="col-6 m-auto">
          <form @submit.prevent="" ref="patient">
            <div class="mb-3">
              <div class="mb-3 d-flex justify-content-center ">
                <label class="form-label mb-3">Patient Type</label>
                <div class="">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="type"  value="0">
                    <label class="form-check-label">IP</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="type" value="1">
                    <label class="form-check-label" >OP</label>
                  </div>
                </div>
              </div>
              <text-area name="name" label-name="Name" rows="1" :error-message="error_message.name"></text-area>
              <div class="row">
                <div class="col-6">
                  <Input name="age" label-name="Age" type="number" :error-message="error_message.age"></Input>
                </div>
                <div class="col-6">
                  <Input name="date_of_birth" label-name="Date of Birth" type="date" ></Input>
                </div>
              </div>

              <label class="form-label">Gender</label>
              <div class="mb-3">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="0">
                  <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="1">
                  <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
              </div>
              <Input name="emergency_phone" label-name="Home Phone" type="number"></Input>
              <Input name="work_phone" label-name="Work Phone" type="number"></Input>
              <Input name="phone" label-name="Phone" type="number" :error-message="error_message.phone"></Input>
              <text-area name="occupation" label-name="Occupation" rows="1" ></text-area>
              <text-area name="nationality" label-name="Nationality" rows="1"></text-area>
              <text-area name="ethnicity" label-name="Ethnicity" rows="1"></text-area>
              <text-area name="nrc" label-name="NRC" rows="1" :error-message="error_message.nrc"></text-area>
              <text-area name="address" label-name="Address" rows="2" :error-message="error_message.address"></text-area>

              <button @click="storePatient()" class="btn w-100 btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </Master>

</template>

<script>
import SideNav from "@/components/layout/SideNav";
import TopNav from "@/components/layout/TopNav";
import Master from "@/components/Master";
import Input from "@/components/form-element/Input";
import TextArea from "@/components/form-element/TextArea";
import {mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "PatientRegister",
  components: {TextArea, Input, Master},
  data() {
    return {
      error_message: '',
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    storePatient() {
      let formData = new FormData(this.$refs.patient)
      axios.post(this.getUrl('patient'), formData)
          .then(res=>{
            this.$store.dispatch('showSuccessAlert')
            this.$refs.patient.reset()
            this.error_message = ''
          })
          .catch(err => {
            this.error_message = err.response.data.errors
          })
          .finally(_=>{
            this.isLoading = false
          })
      ;
    }
  },

}
</script>

<style scoped>

</style>