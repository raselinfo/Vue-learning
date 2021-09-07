<template>
  <Navbar />
  <hr />
  <router-view></router-view>
</template>

<script>
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import { useStore } from "vuex";
export default {
  components: { Navbar },
  setup() {
    let store = useStore();
    onMounted(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      userInfo && store.dispatch("updateUserInfo", userInfo);
    });
  },
};
</script>

<style>
form {
  width: 500px;
  margin: 10px auto;
}
.prepent {
  cursor: pointer;
}
</style>
