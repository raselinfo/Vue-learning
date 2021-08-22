import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Profile from "../views/Profile.vue"
const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Profile",
        path: "/profile",
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router