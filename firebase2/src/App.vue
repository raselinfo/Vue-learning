<template>
  <header>
    <div class="main_menu" v-if="isLogedIn">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="sub_manu" v-if="!isLogedIn">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign UP</router-link>
    </div>
    <span>{{ fullName }}</span>
    <button v-if="isLogedIn" @click="logOut">Log Out</button>
  </header>
  

  <hr />
  <router-view></router-view>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import firebase from "firebase";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const fullName = computed(() => {
      return store.getters.fullName;
    });
    const isLogedIn = computed(() => {
      return Boolean(store.getters.fullName);
    });
    onMounted(() => {
      store.dispatch("getUserDetails");
      if (!store.getters.fullName) {
        router.push("/login");
      }
    });
    // User Log Out
    const logOut = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("userDetails");
          store.dispatch("getUserDetails");
          router.push("/login")
        });
    };

    return {
      fullName,
      logOut,
      isLogedIn,
    };
  },
};
</script>

<style>
a {
  background: blue;
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  margin: 5px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
a:hover {
  background: #000;
}
</style>
