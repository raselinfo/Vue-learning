<template>
  <h2>Login With Email & Password</h2>
  <form @submit.prevent="login">
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="form-control"
    />
    <span class="text-danger">{{ errors.email }}</span>
    <div class="input-group my-3">
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
      <span class="input-group-text prepent" id="basic-addon1">@</span>
    </div>
    <span class="text-danger">{{ errors.pass }}</span>
    <input
      :disabled="isError"
      type="submit"
      value="Login"
      class="btn btn-primary d-block mx-auto"
    />
  </form>
  <div class="d-flex">
    <button @click="loginWithGoogle" class="btn btn-warning m-2">
      Login with Google
    </button>
    <button class="btn btn-danger m-2">Login with Facebook</button>
    <button class="btn btn-info m-2">Login with Twitter</button>
    <button class="btn btn-dark m-2">Login with Github</button>
  </div>
  <hr />
  <h2>Login With Phone</h2>
  <form @submit.prevent="login">
    <input
      type="text"
      placeholder="Phone Number"
      value="+880"
      class="form-control"
    />
    <input
      type="submit"
      value="Send OTP"
      class="mt-2 btn btn-primary d-block mx-auto"
    />
    <div class="crepture"></div>
    <input type="text" placeholder="OTP" class="form-control my-3" />
    <input
      type="submit"
      value="Verify"
      class="mt-2 btn btn-primary d-block mx-auto"
    />
  </form>
</template>

<script>
import { watch,onMounted } from "vue";
import { comState } from "../assets/comState";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let { email, password, errors, isError } = comState();
    const auth = getAuth();

    onMounted(()=>{
      let userEmail=JSON.parse(localStorage.getItem("userInfo"))
      if(userEmail?.email){
        router.push("/")
      }
    })
    // Login With Google
    const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((user) => {
          const {displayName,email,photoURL}=user.user
          const userInfo={
            name:displayName,
            email:email,
            photo:photoURL
          }
          localStorage.setItem("userInfo", JSON.stringify(userInfo))
          store.dispatch("getUserInfo",userInfo)
          router.push("/")
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    // Login With Email & Password
    const login = () => {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
          let name = user.user.email.split("@")[0];
          updateUserInfo(name);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    const updateUserInfo = (name) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          const { displayName, email, uid } = auth.currentUser;
          const userInfo = {
            name: displayName,
            email: email,
            id: uid,
          };
          store.dispatch("getUserInfo", userInfo);
          router.push("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    watch([email, password], ([currentEmail, currentPass]) => {
      let emailRegex = /\S+@\S+\.\S+/;
      if (currentEmail.length > 0) {
        if (!emailRegex.test(currentEmail)) {
          errors.value.email = "Email Not Valid";
        } else {
          errors.value.email = "";
        }
      }
      if (currentPass.length > 0) {
        if (!(currentPass.length >= 6)) {
          errors.value.pass = "Password must be more than 5 letter";
        } else {
          errors.value.pass = "";
        }
      }

      Object.values(errors.value).forEach((error) => {
        if (currentEmail && currentPass) {
          if (error.length > 0) {
            isError.value = true;
          } else {
            isError.value = false;
          }
        }
      });
    });
    return {
      email,
      password,
      errors,
      isError,
      login,
      loginWithGoogle,
    };
  },
};
</script>

<style></style>
