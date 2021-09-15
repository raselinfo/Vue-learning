<template>

  <nav class="navbar home__navbar navbar-expand-lg p-0">
    <div class="container">
      <router-link class="navbar-brand p-0" to="/">
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_YO8gSl.json"
          background="transparent"
          class="logo"
          speed="2"
          loop
          autoplay
        ></lottie-player>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/about">About</router-link>
          </li>
          <li>
            <div class="user__photo" @click="(e)=>toggle(e,$refs.dropdown.className)">
              <img
                class=""
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                alt="photo"
              />
              <div ref="dropdown" :style="{top: isShowed ? '80px' : ''}" class="dropdown" v-show="isShowed">
                <router-link to="">Dashbord</router-link>
                <router-link to="">Edit Profile</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script>
import "../assets/animation.css"
import {ref} from "vue"
export default {
   setup(){
    let isShowed=ref(false)
    let toggle=()=>{
      isShowed.value=!isShowed.value
    }
    
    return{
      isShowed,
      toggle
    }
  }
};
</script>

<style scoped>
.logo {
  width: 100px;
}
</style>
