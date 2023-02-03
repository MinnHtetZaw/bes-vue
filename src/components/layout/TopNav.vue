<template>
  <nav class="navbar navbar-expand-lg mb-3 shadow">
    <div class="container-fluid">
      <router-link to="/dashboard" class="navbar-brand" href="#">
        <div class="">
          <img src="../../assets/bes-logo.jpg" style="width: 30px;height: 30px;" alt="">
        </div>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Patient
            </a>
            <ul class="dropdown-menu">
<!--              <li>-->
<!--                <router-link class="nav-link" aria-current="page" to="/patientRegister">-->
<!--                  Patient Register</router-link>-->
<!--              </li>-->
              <li>
                <router-link class="nav-link" aria-current="page" to="/patientList">
                  Patient Lists</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bed Management
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="nav-link" aria-current="page" to="/floor">
                  Floor List
                </router-link>
              </li>
<!--              <li>-->
<!--                <router-link class="nav-link" aria-current="page" to="/bedManagement">-->
<!--                  Bed Management-->
<!--                </router-link>-->
<!--              </li>-->
              <li>
                <router-link class="nav-link" aria-current="page" to="/admission">
                  Admission Lists
                </router-link>
              </li>
              <li>
                <router-link class="nav-link" aria-current="page" to="/discharge">
                  Discharge Lists
                </router-link>
              </li>
              <li>
                <router-link class="nav-link" aria-current="page" to="/admission-voucher">
                  Admission Vouchers
                </router-link>
              </li>

            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Employee
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="nav-link" aria-current="page" to="/doctor">
                  Doctor List
                </router-link>
              </li>
              <li>
                <router-link class="nav-link" aria-current="page" to="/nurse">
                  Nurse List
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </a>
            <ul class="dropdown-menu">
              <li>

                <router-link class="nav-link" aria-current="page" to="/category">
                  Category List
                </router-link>
                <router-link class="nav-link" aria-current="page" to="/subcategory">
                  SubCategory List
                </router-link>
                <router-link class="nav-link" aria-current="page" to="/brand">
                  Brand List
                </router-link>
                <router-link class="nav-link" aria-current="page" to="/medicine">
                  Medicine List
                </router-link>
                <router-link class="nav-link" aria-current="page" to="/symptom-category">
                  Symptom Category
                </router-link>
                <router-link class="nav-link" aria-current="page" to="/symptom">
                  Symptom
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pharmacy
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="nav-link" aria-current="page" to="/medication">
                  Medication List
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Appointment
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="nav-link" aria-current="page" to="/appointment">
                  Appointment List
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              OP Department
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="nav-link" aria-current="page" to="/opd-medical-record">
                  Medical Record List
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admin
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="nav-link" aria-current="page" to="/user-list">
                  User Lists
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

      </div>
      <div v-if="user">
        <ul  class="navbar-nav mb-2 me-5">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{user.name}}
            </a>
            <ul class="dropdown-menu dropdown-menu-start profile">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
}
</script>

<style scoped>
.navbar{
  background: #22577a;

}
.dropdown-menu{
  border: none;
  background: #22577a;
}
.dropdown-toggle{
  color: #ffffff;
}
.nav-link{
  color: #ffffff;
}
.profile{
  background: #ffffff;
}
</style>