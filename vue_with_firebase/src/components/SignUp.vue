<template>
  <div>
    <h2 class="display-4 text-center">Singup</h2>
    <form @submit.prevent="signUp" novalidate>
      <input
        type="email"
        placeholder="Email"
        class="form-control"
        v-model="email"
        autoComplete="nope"
      />
      <span class="text-danger">{{ errors.email }}</span>
      <div class="input-group my-3">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
        <span class="input-group-text prepent" id="basic-addon1">@</span>
      </div>
      <span class="text-danger">{{ errors.pass }}</span>
      <div class="input-group my-3">
        <input
          type="password"
          class="form-control"
          placeholder="Confirme Password"
          v-model="confirmPass"
        />
        <span class="input-group-text prepent" id="basic-addon1">@</span>
      </div>
      <span class="text-danger">{{ errors.comPass }}</span>
      <input
        type="submit"
        value="Sign Up"
        class="btn btn-primary d-block mx-auto"
        :disabled="isError"
      />
    </form>

  </div>
</template>

<script>
import { watch } from "vue";
import { comState } from "../assets/comState";
import {useRouter} from "vue-router"
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default {
  setup() {
    let router=useRouter()
    let { email, password, confirmPass, errors, isError } = comState();
    const auth = getAuth();
    const signUp = () => {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
         if(user){
           router.push("/login")
         }
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    watch(
      [email, password, confirmPass],
      ([currentEmail, currentPass, currentComfirmPass]) => {
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
        if (currentComfirmPass.length > 0) {
          if (currentPass !== currentComfirmPass) {
            errors.value.comPass = "Password Not Matched";
          } else {
            errors.value.comPass = "";
          }
        }

        Object.values(errors.value).forEach((error) => {
          if (currentEmail && currentPass && currentComfirmPass) {
            if (error.length > 0) {
              isError.value = true;
            } else {
              isError.value = false;
            }
          }
        });
      }
    );
    return {
      email,
      password,
      confirmPass,
      errors,
      isError,
      signUp,
    };
  },
};
</script>

<style></style>
