import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'vue-loading-overlay/dist/vue-loading.css';
import '@ocrv/vue-tailwind-pagination/dist/vue-tailwind-pagination.es'
import Particles from "particles.vue3";


createApp(App).use(store).use(Particles).use(router).mount('#app')
