<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link v-if="!name?.name" to="/login">Login</router-link>
  <router-link v-if="!name?.name" to="/signup">Signup</router-link>
  <span class="userName">{{ name?.name.toUpperCase() }}</span>
  <hr />
  <button @click="logout">Log out</button>

  <router-view></router-view>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  setup() {
    let name = JSON.parse(localStorage.getItem("userInfo"));
    const logout = () => {
      localStorage.removeItem("userInfo");
      const auth = getAuth();
      signOut(auth)
    };
    return {
      name,
      logout,
    };
  },
};
</script>

<style>
a {
  margin: 5px;
}
.userName {
  background: rgb(109, 241, 20);
  padding: 10px;
  display: inline-block;
}
</style>
