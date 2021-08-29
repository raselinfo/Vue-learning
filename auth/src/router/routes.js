import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
        path:"/",
        name:"Home",
        component:()=> import ("../views/Home.vue")
    },{
        path:"/about",
        name:"About",
        component:()=> import ("../views/About.vue")
    },{
        path:"/login",
        name:"Login",
        component:()=> import ("../views/Login.vue")
    },{
        path:"/signup",
        name:"Sung UP",
        component:()=> import ("../views/SignUp.vue")
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})