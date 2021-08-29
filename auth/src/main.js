import { createApp } from 'vue'
import App from './App.vue'
import routes from "./router/routes"

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDWzqsMJ9h6y5gjmscSUpow4k3TR5Ixe20",
    authDomain: "vue-auth-yt-377e6.firebaseapp.com",
    projectId: "vue-auth-yt-377e6",
    storageBucket: "vue-auth-yt-377e6.appspot.com",
    messagingSenderId: "924072539204",
    appId: "1:924072539204:web:aa78c56eacfb691ed67811"
};
initializeApp(firebaseConfig);


createApp(App).use(routes).mount('#app')
