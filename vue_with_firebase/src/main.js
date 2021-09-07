import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from "./router/routes"
import store from "./store"
import { config } from "./firebase.config"
import { initializeApp } from "firebase/app";

initializeApp(config)
createApp(App).use(router).use(store).mount('#app')
