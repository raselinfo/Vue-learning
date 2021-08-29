<template>
 <div class="container__fluid">
    <nav>
    <nav-bar></nav-bar>
  </nav>
  <main class="bg-orange-lighten-5">
    <div class="mt-10 ml-5">
      <router-view></router-view>
    </div>
  </main>
 </div>
 
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',

  components: {
   "nav-bar":Navbar
  },

}
</script>

<style scoped>
  .container__fluid{
    display:flex;
    height:100vh;
  }
  nav{
    padding:10px;
  }
  main{
    width:100%;
  }

</style>