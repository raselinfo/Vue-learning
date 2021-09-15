import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
        name:"Home",
        path:"/",
        component:()=> import ("../Views/Home.vue")
    }, {
        name:"About",
        path:"/about",
        component:()=> import ("../Views/About.vue")
    },
    {
        name:"Login",
        path:"/login",
        component:()=> import ("../Views/LoginPage.vue")
    },
    {
        name: "Signup",
        path: "/signup",
        component: () => import("../Views/SignUp.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
   
})

export default router