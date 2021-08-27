<template>
  <h1>Register</h1>
  <form @submit.prevent="register">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button>Register</button>
    <p>Need an account? <router-link to="/register">Register</router-link></p>
  </form>
</template>

<script>
import firebase from "firebase"
import {ref} from "vue"
export default {
    setup(){
        const email=ref("")
        const password=ref("")

        const register=()=>{
            firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
            .then(user=>{
                console.log(user)
            })
            .catch(err=>{
                alert(err.message)
            })
        }
        return{
            register,
            email,
            password
        }
    }
}
</script>

<style></style>
