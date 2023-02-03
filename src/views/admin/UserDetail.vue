<template>
<Master>
  <div class="row">
    <div class="col-10 m-auto">
      <div class="row">
        <div class="col-3">
          <div class="card p-3 border-0">
            <div class="d-flex mb-4 justify-content-center">
              <img src="../../assets/user-default-img.webp" class="rounded-circle" style="width: 150px;" alt="">
            </div>
            <div class="row">
              <div class="col-4"><p class="fw-bold">Name</p></div>
              <div class="col-8"><p>{{user.name}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p class="fw-bold">User Code</p></div>
              <div class="col-8"><p>{{user.user_code}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p class="fw-bold">Email</p></div>
              <div class="col-8"><p>{{user.email}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p class="fw-bold">Role</p></div>
              <div class="col-8"><p>{{user.role}}</p></div>
            </div>
            <div class="row">
              <div class="col-4"><p class="fw-bold">Phone</p></div>
              <div class="col-8"><p>{{user.phone}}</p></div>
            </div>


          </div>

        </div>
        <div class="col-6">
          <div class="card border-0 p-3">
            <div>
              <input type="hidden" :value="roles.id" id="role">
              <h6 class="fw-normal text-secondary mb-4">Permission Management</h6>
              <form @submit.prevent="" ref="permission">
                <div class="form-check mb-3">
                  <input @change="changePermission(roles.id)" class="form-check-input" name="patient" type="checkbox" :checked="roles.patient == true">
                  <label class="form-check-label small text-secondary">
                    Patient List
                  </label>
                </div>
              <div class="form-check mb-3">
                  <input @change="changePermission(roles.id)" class="form-check-input" name="bed_management" type="checkbox" :checked="roles.bed_management == true">
                  <label class="form-check-label small text-secondary">
                    Bed Management
                  </label>
                </div>

                <div class="form-check mb-3">
                  <input @change="changePermission(roles.id)" class="form-check-input" name="employee" type="checkbox" :checked="roles.employee == true">
                  <label class="form-check-label small text-secondary">
                    Employee
                  </label>
                </div>
                  <div class="form-check mb-3">
                  <input @change="changePermission(roles.id)" class="form-check-input" name="inventory" type="checkbox" :checked="roles.inventory == true">
                  <label class="form-check-label small text-secondary">
                    Inventory
                  </label>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
<!--      <p class="text-title mb-3">User Management</p>-->
    </div>
  </div>
</Master>
</template>

<script>
import Master from "@/components/Master";
import {mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "UserManagement",
  components: {Master},
  data() {
    return {
      user: {},
      roles: {},
      check: []
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getUser : function () {
      axios.get(this.getUrl('get-user/'+this.$route.query.id))
      .then(res => {
        this.user = res.data.data
        this.roles = res.data.data.roles
      })
      .catch(err => {
        console.log(err)
      })
    },
    changePermission: function (id) {
      let formData = new FormData(this.$refs.permission)
      formData.append('_method','PATCH')
      axios.post(this.getUrl('role/'+id),formData)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
        this.getUser()
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style scoped>

</style>