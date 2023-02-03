import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import VCalendar from 'v-calendar';
window.$ = window.jquery = require("jquery")
import * as bootstrap from 'bootstrap';

window.bootstrap = bootstrap.Modal;
createApp(App).use(store).use(router).use(VCalendar, {}).mount('#app')



