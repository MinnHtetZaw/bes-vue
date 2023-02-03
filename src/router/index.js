import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import PatientRegister from "@/views/patient/PatientRegister";
import RoomManagement from "@/views/bed_management/RoomManagement";
import BedManagement from "@/views/bed_management/BedManagement";
import DepartmentManagement from "@/views/department/DepartmentManagement";
import RoomDetails from "@/views/bed_management/RoomDetails";
import PatientList from "@/views/patient/PatientList";
import PatientDetail from "@/views/patient/PatientDetail";
import Admission from "@/views/bed_management/Admission";
import Treatment from "@/views/treatment/Treatment";
import DoctorList from "@/views/employee/DoctorList";
import EmployeeDetail from "@/views/employee/EmployeeDetail";
import Category from "@/views/inventory/Category";
import Subcategory from "@/views/inventory/Subcategory";
import Brand from "@/views/inventory/Brand";
import Medicine from "@/views/inventory/Medicine";
import MedicineUnit from "@/views/inventory/MedicineUnit";
import Medication from "@/views/pharmacy/Medication";
// import NurseList from "@/views/employee/NurseList";
import FloorList from "@/views/FloorList";
import Appointment from "@/views/appointment/Appointment";
import OpdMedicalRecord from "@/views/op_department/OpdMedicalRecord";
import EditTreatment from "@/views/treatment/EditTreatment";
import AdmissionDetail from "@/views/bed_management/AdmissionDetail";
import SymptomCategory from "@/views/symptom/SymptomCategory";
import MedicalRecordDetail from "@/views/medical_record/MedicalRecordDetail";
import Discharge from "@/views/discharge/Discharge";
import DischargeDetail from "@/views/discharge/DischargeDetail";
import AdmissionPayment from "@/views/payment/AdmissionPayment";
import AdmissionVoucher from "@/views/voucher/AdmissionVoucher";
import AdmissionVoucherDetail from "@/views/voucher/AdmissionVoucherDetail";
import Symptom from "@/views/symptom/Symptom";
import Register from "@/views/auth/Register";
import UserDetail from "@/views/admin/UserDetail";
import Users from "@/views/admin/Users";

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/patientRegister',
    name: 'patientRegister',
    component: PatientRegister
  },
  {
    path: '/patientList',
    name: 'patientList',
    component: PatientList
  },
  {
    path: '/patient/detail/:id',
    name: 'patientDetail',
    component: PatientDetail
  },
  {
    path: '/floor',
    name: 'floor',
    component: FloorList
  },
  {
    path: '/room',
    name: 'room',
    component: RoomManagement
  },
  {
    path: '/room/details/:id',
    name: 'room-details',
    component: RoomDetails
  },
  {
    path: '/bedManagement',
    name: 'bedManagement',
    component: BedManagement
  },
  {
    path: '/admission',
    name: 'admission',
    component: Admission
  },
  {
    path: '/discharge',
    name: 'discharge',
    component: Discharge
  },
  {
    path: '/discharge/detail',
    name: 'discharge/detail',
    component: DischargeDetail
  },
  {
    path: '/admission/detail',
    name: 'admissionDetail',
    component: AdmissionDetail
  },
  {
    path: '/department',
    name: 'department',
    component: DepartmentManagement
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: DoctorList
  },
  {
    path: '/employee/detail/:id',
    name: 'employeeDetail',
    component: EmployeeDetail
  },
  {
    path: '/treatment',
    name: 'treatment',
    component: Treatment
  },
  //Inventory
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/subcategory',
    name: 'subcategory',
    component: Subcategory
  },
  {
    path: '/brand',
    name: 'brand',
    component: Brand
  },
  {
    path: '/medicine',
    name: 'medicine',
    component: Medicine
  },
  {
    path: '/medicineUnit',
    name: 'medicineUnit',
    component: MedicineUnit
  },
  {
    path: '/medication',
    name: 'medication',
    component: Medication
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: Appointment
  },
  {
    path: '/opd-medical-record',
    name: 'opd-medical-record',
    component: OpdMedicalRecord
  },
  {
    path: '/edit-treatment',
    name: 'edit-treatment',
    component: EditTreatment
  },
  {
    path: '/symptom-category',
    name: 'symptom-category',
    component: SymptomCategory
  },
  {
    path: '/symptom',
    name: 'symptom',
    component: Symptom
  },
  {
    path: '/medical-record/detail',
    name: 'medical-record/detail',
    component: MedicalRecordDetail
  },

  // Admission Payment
  {
    path: '/admission-payment',
    name: 'admission-payment',
    component:AdmissionPayment
  },
  {
    path: '/admission-voucher',
    name: 'admission-voucher',
    component: AdmissionVoucher
  },
  {
    path: '/admission-voucher/detail',
    name: 'admission-voucher/detail',
    component: AdmissionVoucherDetail
  },
  // Auth
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/user-detail',
    name: 'user-detail',
    component: UserDetail
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: Users
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass : 'active'
})

export default router
