import {createWebHistory,createRouter} from "vue-router"


const routes=[
    {
        path:"/",
        name:"Home",
        component:()=> import ("../views/Home.vue")
    }, {
        path:"/about",
        name:"About",
        component:()=> import ("../views/About.vue")
    }, {
        path:"/login",
        name:"Login",
        component:()=> import ("../views/Login.vue")
    },{
        path:"/signup",
        name:"SignUP",
        component:()=> import ("../views/SingUp.vue")
    },
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router