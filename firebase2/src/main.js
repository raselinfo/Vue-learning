import { createApp } from 'vue'
import firebase from 'firebase/app'
import { firebaseConfig} from "./firebase.config"
import App from './App.vue'
import router from "./routes"
import store from "./store"
firebase.initializeApp(firebaseConfig)
createApp(App).use(store).use(router).mount('#app')
