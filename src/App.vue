<template>
  <router-view></router-view>
</template>
<script>
import '../src/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import axios from "axios";
// import 'bootstrap/dist/js/bootstrap.bundle.min'
export default {
  created() {
    // if (sessionStorage.getItem('auth') && sessionStorage.getItem('token')){
    //   this.$store.dispatch('setAuth',JSON.parse(sessionStorage.getItem('auth')))
    //   this.$store.dispatch('setToken',sessionStorage.getItem('token'))
    //   axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token');
    // }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}

body{
  background-color: #f6f8f9 !important;
}
</style>
