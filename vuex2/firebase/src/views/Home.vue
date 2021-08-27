<template>
  <h1>Welcome , {{name}}</h1>
  <router-link to="/about">Button</router-link>
  <br />
  <button @click="logout">Logout</button>
</template>

<script>
import {ref,onBeforeMount} from "vue"
import firebase from "firebase"

export default {
    setup(){
        const name=ref("")
        onBeforeMount(()=>{
       const user=firebase.auth().currentUser;
            if(user){
                name.value=user.email.split("@")[0]
            }
        })

        const logout=()=>{
            firebase.auth().signOut()
            .then(()=>{
                console.log("Sign Out")
            })
            .catch(err=>{
                console.log(err.message)
            })
        }

        return{
            name,
            logout
        }

    }
}
</script>

<style></style>
