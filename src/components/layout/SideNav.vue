<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 px-0 col-md-2 shadow-lg side-nav">
        <ul class="nav mx-3 mt-3 flex-column">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/dashboard">
              <i class="fa-solid fa-chart-pie me-2"></i>
              Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/department">
              <i class="fa-solid fa-hospital me-2"></i>
              Department Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/employee">
              <i class="fa-solid fa-user-tie me-2"></i>
              Employee Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/patientRegister">
              <i class="fa-solid fa-user-edit me-2"></i>
              Patient Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/floor">
              <i class="fa-solid fa-building me-2"></i>
              Floor Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/room">
              <i class="fa-solid fa-house-medical me-2"></i>
              Room Register</router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" aria-current="page" to="/bed">-->
<!--              <i class="fa-solid fa-bed me-2"></i>-->
<!--              Bed Register</router-link>-->
<!--          </li>-->
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/bed">
              <i class="fa-solid fa-bed me-2"></i>
              Bed Management</router-link>
          </li>




        </ul>
      </div>
      <div class="col-10 main" style="overflow: scroll;">
        <div class="row">
          <div class="col-12">
            <div class="card border-0 shadow-sm rounded py-2 px-3 my-3 top-nav">
              <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex gap-3 align-items-center">
                  <button class="btn btn-primary" title="Back">
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                  <div class="d-flex align-items-center gap-2">
<!--                    <img src="../../assets/vlogo.png" style="width: 35px;" alt="">-->
                    <h5 class="fw-normal mb-0"> BES Hospital EMR</h5>

                  </div>
                </div>

<!--                <div v-if="auth != null" class="d-flex gap-3 align-items-center">-->


<!--                  <button @click="notification" type="button" class="btn btn-primary rounded-circle position-relative">-->
<!--                    <i class="fa-solid fa-bell"></i>-->
<!--                    <span v-if="noti_length > 0" style="font-size: 10px;" class="small position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">-->
<!--                    {{noti_length}}-->
<!--                    </span>-->
<!--                  </button>-->
<!--                  <div>-->
<!--&lt;!&ndash;                    <img src="../../assets/icon-doctor.png" style="width: 40px;height: 40px;border: 1.5px solid rgba(196,197,248,0.85);border-radius: 50%;object-fit: cover;" alt="">&ndash;&gt;-->
<!--                  </div>-->
<!--                  <div class="dropdown" style="color:#ffffff;">-->
<!--                    <a style="text-decoration: none;" class="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-30,30">-->
<!--                      {{auth.name}}-->
<!--                    </a>-->

<!--                    <ul class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">-->
<!--                      <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--                      <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--                      <li><hr class="dropdown-divider"></li>-->
<!--                      <li>-->
<!--                        <a class="dropdown-item text-danger" href="#" @click="logout">-->
<!--                        <i class="fa-solid fa-power-off me-3"></i>-->
<!--                        Logout</a>-->
<!--                      </li>-->
<!--                    </ul>-->
<!--                  </div>-->
<!--                </div>-->


              </div>
            </div>
          </div>
        </div>
        <slot></slot>
        <div class="row">
          <div class="col-12">
            <footer class="footer mt-3 py-2 rounded">
              <div class="">
                <div class="d-flex justify-content-between">
                  <span style="font-size: 12px;" class="text-start text-muted mb-0"> Development By Min Khant | May Myat Moe </span>
                  <span style="font-size: 12px;" class="text-center text-muted mb-0"> © 2022 K-Win Technologies </span>
                  <span style="font-size: 12px;" class="text-end text-muted mb-0"> All right reserved. </span>
                </div>

              </div>
            </footer>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import axios from "axios";
import router from "@/router";

export default {
  name: "SideNav",
  // data() {
  //   return {
  //     role: '',
  //     user_name : sessionStorage.getItem('user_name'),
  //   }
  // },
  // computed: {
  //   ...mapState([
  //      'auth',
  //      'token',
  //       'noti_length'
  //   ]),
  //   ...mapGetters([
  //       'getUrl'
  //   ]),
  // },
  // methods: {
  //   notification: function (){
  //     router.push({path: '/notification'})
  //   },
  //   logout() {
  //     let config = {
  //       method: 'post',
  //       url: this.getUrl('logout'),
  //       headers: {
  //         'Accept': 'application/json',
  //         'Authorization': 'Bearer '+sessionStorage.getItem('token'),
  //       },
  //     };
  //     axios(config)
  //         .then(res=> res.data.data)
  //         .then(data=>{
  //           if (data == 'Success') {
  //             this.$store.dispatch('setLogOut')
  //             sessionStorage.clear()
  //             router.push({path: '/'})
  //             Swal.fire(
  //                 'Logout Successful!',
  //                 '',
  //                 'success'
  //             )
  //           }
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //   },
  //   getNotifications: function (url){
  //     axios.get(url)
  //         .then(response => response.data)
  //         .then(data=>{
  //           this.$store.dispatch('setNoti',data.data.length)
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //   },
  //   back: function (){
  //     window.history.back()
  //   }
  //
  // },
  // mounted() {
  // let role = sessionStorage.getItem('Role')
  // this.role = role
  // this.getNotifications(this.getUrl('notification'))
  // }
}
</script>

<style scoped>
router-link.active{
  color: #42b983;
}
.nav-item{
  padding: 0.3px;
  margin-bottom: 5px;
  border-radius: 5px;
}


</style>