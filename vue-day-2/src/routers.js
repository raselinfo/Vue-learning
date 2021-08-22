import { createWebHistory, createRouter } from "vue-router";
import Profile from "./views/Profile.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Login",
    Path: "/login",
    component: Login,
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
