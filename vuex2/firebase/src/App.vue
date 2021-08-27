<template>
  <router-view></router-view>
</template>

<script>
import {onBeforeMount} from "vue";
import firebase from 'firebase'
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
          router.replace("/login")
        }else if(route.path=="/login" || route.path=="register"){
          router.replace("/")
        }
      })
    })
  },
};
</script>

<style>
body {
  background: rgb(28, 28, 92);
  color: #fff;
}
a,
p,
h1,
h2,
h3 {
  color: inherit;
}
</style>
