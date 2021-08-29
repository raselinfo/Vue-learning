<template>
  <h1>Login</h1>
  {{ email }}
  {{ password }}
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <input type="submit" value="Login" />
  </form>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import stateData from "../assets/state"
import { useRouter } from 'vue-router'
export default {
  setup() {
      let {email,password,userInfo}=stateData()
  const router=useRouter()
    const auth = getAuth();
    const login = () => {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
         const userName= user.user.email.split("@")[0];
         userInfo.value={
             name:userName,
             email:email.value,
             password:password.value
         }
         localStorage.setItem("userInfo",JSON.stringify(userInfo.value))
         
    router.push({name:"Home"})
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return {
      email,
      password,
      login,
      userInfo
    };
  },
};
</script>

<style></style>
