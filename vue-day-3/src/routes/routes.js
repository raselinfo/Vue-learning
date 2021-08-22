import {createRouter,createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import NotFound from "../views/NotFount.vue"
const routes=[
    {
        name:"Home",
        path:"/",
        component:Home,
        redirect:"/login"
    },{
        name:"Login",
        path:"/login",
        component:Login
    },{
        name:"Profile",
        path:"/profile",
        component:Profile
    },{
        name:"Profile",
        path:"/profile/:name",
        component:Profile
    },{
        name:"NotFound",
        path:"/:NotFound(.*)*",
        component: NotFound
    },
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router