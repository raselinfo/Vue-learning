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
        path:"/contact",
        name:"Contact",
        component:()=> import ("../views/Contact.vue")
    },{
        path:"/login",
        name:"Login",
        component:()=> import ("../views/Login.vue")
    },{
        path:"/signup",
        name:"Signup",
        component:()=> import ("../views/signup.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router