<template>
  <Master>
    <div class="row">
      <div class="col-12 m-auto">
        <p class="text-title mb-3">User Lists</p>
        <div class="row">
          <div v-for="user in users" class="col-4">
            <div class="card border-0 p-3">
              <div class="row">
                <div class="col-4">
                  <div class="d-flex justify-content-center mb-1 align-items-center">
                    <img src="../../assets/user-default-img.webp" style="width: 100px;object-fit: cover" class="rounded-circle" alt="">
                  </div>
                  <p class="text-center">{{user.name}} </p>
                  <div class="d-flex justify-content-center">
                    <button @click="detail(user.id)" class="btn small btn-sm btn-primary">User Detail</button>
                  </div>
                </div>
                <div class="col-8">
                  <div>
                    <div class="row">
                      <div class="col-5">
                        <p>User Code</p>
                      </div>
                      <div class="col-6">
                        <p>{{ user.user_code }} </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <p>Email </p>
                      </div>
                      <div class="col-6">
                        <p>{{user.email}} </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <p>Role </p>
                      </div>
                      <div class="col-6">
                        <p> {{user.role}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <p>Phone </p>
                      </div>
                      <div class="col-6">
                        <p>{{user.phone}} </p>
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
import Master from "@/components/Master";
import {mapGetters} from "vuex";
import axios from "axios";
import router from "@/router";
export default {
  name: "Users",
  components: {Master},
  data() {
    return {
      users : {},
    }
  },
  computed: {
    ...mapGetters([
        'getUrl'
    ])
  },
  methods: {
    getUsers: function () {
      axios.get(this.getUrl('get-users'))
      .then(res => this.users = res.data.data)
      .catch(err => console.log(err))
    },
    detail: function (id) {
      router.push({path: 'user-detail',query: {id: id}})
    },

  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style scoped>

</style>