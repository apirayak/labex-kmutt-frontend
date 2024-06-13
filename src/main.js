import { createApp, h } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import router from './router/router.js'
import store from './store/store.js'
import axios from 'axios'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
createApp(App)
    .use(store)
    .use(router, axios)
    .use(VueScrollTo)
    .mount('#app')
