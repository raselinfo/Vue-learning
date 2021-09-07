<template>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <p><input v-model="email" type="email" placeholder="email" /></p>
    <span>{{ error.email }}</span>
    <p><input v-model="password" type="password" placeholder="password" /></p>
    <span>{{ error.pass }}</span>
    <button :disabled="isDisabled">Login</button>
  </form>
  <br />
  <router-link to="/signup">Don't have an account?</router-link>
  <button @click="loginWithGoogle">Continue with Google</button>
  <button @click="loginWithFacebook">Continue with Facebook</button>
</template>

<script>
import { comState } from "../assets/comState";
import { onMounted, watch } from "vue";
import firebase from "firebase";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let { email, password, error, isDisabled } = comState();
    // Login with Facebook
    const loginWithFacebook=()=>{
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(user=>{
        console.log(user.user)
      })
      .catch(error=>{
        console.log(error.message)
      })
    }
    // Login with google
    const loginWithGoogle = () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          localStorage.setItem(
            "userDetails",
            JSON.stringify({
              name: user.user.displayName,
              email: user.user.email,
            })
          );
          store.dispatch("getUserDetails");
          router.push({ path: "/" });
        })
        .catch((error) => {
          console.log("Error", error.message);
        });
    };
    // Login with emai & password
    const login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          localStorage.setItem(
            "userDetails",
            JSON.stringify({
              name: user.user.email.split("@")[0],
              email: email.value,
              password: password.value,
            })
          );
          store.dispatch("getUserDetails");
          router.push("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    // Form Validation
    watch([email, password], ([currentEmail, currentPaass]) => {
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
    });

    onMounted(() => {
      let fullName=JSON.parse(localStorage.getItem("userDetails"))
      if (fullName?.name) {
        router.push("/");
      }
    });

    return {
      email,
      password,
      error,
      isDisabled,
      login,
      loginWithGoogle,
      loginWithFacebook
    };
  },
};
</script>

<style></style>
