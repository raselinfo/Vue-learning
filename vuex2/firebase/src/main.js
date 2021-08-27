import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDWzqsMJ9h6y5gjmscSUpow4k3TR5Ixe20",
    authDomain: "vue-auth-yt-377e6.firebaseapp.com",
    projectId: "vue-auth-yt-377e6",
    storageBucket: "vue-auth-yt-377e6.appspot.com",
    messagingSenderId: "924072539204",
    appId: "1:924072539204:web:8d127c0e1c3f90e2d67811"
};
firebase.initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')
