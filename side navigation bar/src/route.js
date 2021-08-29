import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
        path:"/",
        name:"Home",
        component:()=> import ("./views/Home.vue")
    },  {
        path:"/about",
        name:"About",
        component:()=> import ("./views/About.vue")
    }, {
        path:"/contact",
        name:"Contact",
        component:()=> import ("./views/Contact.vue")
    }, {
        path:"/sevice",
        name:"Service",
        component:()=> import ("./views/Service.vue")
    },
]


export default createRouter({
    history: createWebHistory(),
    routes
})

