<template>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button>Login</button>
    <p>Need an account? <router-link to="/register">Register</router-link></p>
  </form>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    return {
      login,
      email,
      password,
    };
  },
};
</script>

<style></style>
