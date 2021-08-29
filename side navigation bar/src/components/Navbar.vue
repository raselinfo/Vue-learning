<template>
      <v-app-bar-nav-icon @click="active=!active" class="hambarger"></v-app-bar-nav-icon>
  <aside  :class="{active:active}" :style="{width: active ? '200px' : '0px'}">
      <br>
      <br>
    <div
      class="item bg-purple-darken-3 text-white my-3"
      v-for="(route, index) in routes"
      :key="index"
    >
      <router-link class="text-white" :to="route.path">{{
        route.text
      }}</router-link>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const routes = ref([
      {
        path: "/",
        text: "Home",
      },
      {
        path: "/about",
        text: "About",
      },
      {
        path: "/contact",
        text: "Contact",
      },
      {
        path: "/sevice",
        text: "Sevice",
      },
    ]);

    const active=ref(true)

    return {
      routes,
      active,
    
    };
  },
};
</script>

<style>
aside {
  width: 200px;
  height: 100vh;
  position:relative;
  left:-201px;
    transition:.3s;
}
.item {
  padding: 5px;
  text-align: center;

    box-shadow: 0px 0px 5px 5px rgb(232 212 244);
    border-radius:20px;
}
.item  a {
  cursor: pointer;
  text-decoration: none;
  display: block;

}
.hambarger{
    cursor:pointer;
    position:absolute;
    z-index: 1111;
}
.active{
    left:10px;
}
</style>
