<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signUp" novalidate>
    <p><input v-model="email" type="email" placeholder="Email" /></p>
    <span>{{ error.email }}</span>
    <p><input v-model="password" type="password" placeholder="Password" /></p>
    <span>{{ error.pass }}</span>
    <p>
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
    </p>
    {{ error.conPass }}
    <button :disabled="isDisabled">Sign Up</button>
  </form>
  <button>Continue with Google</button>
  <button>Continue with Facebook</button>
  <br />
  <router-link to="/login">Alredy have an account?</router-link>
</template>

<script>
import { watch } from "vue";
import { comState } from "../assets/comState";
import firebase from "firebase";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const { email, password, confirmPassword, error, isDisabled } = comState();
    const signUp = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
         
          localStorage.setItem(
            "userDetails",
            JSON.stringify({
              name: user.user.email.split("@")[0],
              email: email.value,
              password: password.value,
              confirmPassword: confirmPassword.value,
            })
          );
          store.dispatch("getUserDetails");
           router.push({name:"Home"});
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    // Form Validation
    watch(
      [email, password, confirmPassword],
      ([currentEmail, currentPaass, currentConPass]) => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (currentEmail) {
          if (!emailRegex.test(currentEmail)) {
            error.value.email = "Not a valid email";
          } else {
            error.value.email = null;
          }
        }
        if (currentPaass) {
          if (currentPaass.length < 6) {
            error.value.pass = "Password Must be more than 6";
          } else {
            error.value.pass = null;
          }
        }
        if (currentConPass) {
          if (currentConPass !== currentPaass) {
            error.value.conPass = "Password Not Match";
          } else {
            error.value.conPass = null;
          }
        }
      }
    );
    return {
      email,
      password,
      confirmPassword,
      error,
      isDisabled,
      signUp,
    };
  },
};
</script>

<style scoped>
a {
  background: none;
  color: rgb(38, 0, 255);
  padding: 0;
  margin: 0;
  text-decoration: underline;
}
</style>
