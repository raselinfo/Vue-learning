<template>
  <h1 class="text-center">Form Validation</h1>
  <form novalidate @submit.prevent="registerUser" class="bg-indigo-lighten-4 mx-auto pa-5">
    <p><input  v-model="name" class="bg-white mb-3 pa-5" type="text" placeholder="Name" />
    </p> <p><input  v-model="email" class="bg-white mb-3 pa-5" type="email" placeholder="Email" />
    </p>
    <p>
      <input  v-model="password"
        class="bg-white mb-3 pa-5"
        type="password"
        placeholder="Password"
      />
    </p>
    <p>
      <input  v-model="password2"
        class="bg-white mb-3 pa-5"
        type="password"
        placeholder="Confirm Password"
      />
     
    </p>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </form>
</template>

<script>
import comState from "./assets/comState"
export default {
  setup(){
    const {name,email,password,password2}=comState()


    return{
      name,
      email,
      password,
      password2
    }
  }

};
</script>

<style>
form {
  width: 500px;
}
input {
  width: 100%;
}
</style>
