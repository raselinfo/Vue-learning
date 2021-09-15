<template>
  <section class="nav__bar ">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">RaselOfficial</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="userEmail" class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li v-if="userEmail" class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li v-if="userEmail" class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li v-if="!fullName" class="nav-item">
              <router-link class="nav-link btn btn-primary mx-3" to="/login"
                >Login</router-link
              >
            </li>
            <li v-if="!fullName" class="nav-item">
              <router-link class="nav-link btn btn-primary" to="/signup"
                >Signup</router-link
              >
            </li>
            <li v-if="email">
              <button class="btn btn-warning ms-3">Admin</button>
            </li>
            <li class="list-item">
              <span v-if="fullName" class="text-light bg-danger p-3 ms-3 mt-3"
                >{{ fullName }}
              </span>
              <span v-if="photo" class="avater">
                <img :src="photo" alt="" />
              </span>
            </li>
            <li>
              <button
                v-if="fullName"
                @click="logOut"
                class="btn btn-danger ms-3"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const fullName = computed(() => store.getters.getFullName);
    const email = computed(() => store.getters.getAdminEmail);
    const userEmail = computed(() => store.getters.userEmail);
    const photo = computed(() => store.getters.getPhoto);
    const auth = getAuth();
    // User Log Out
    const logOut = () => {
      signOut(auth)
        .then(() => {
          store.dispatch("getUserInfo", null);
          router.push("/login");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    return {
      fullName,
      email,
      photo,
      logOut,
      userEmail
    };
  },
};
</script>

<style>
.avater > img {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  padding: 5px;
  margin-left: 20px;
}
</style>
