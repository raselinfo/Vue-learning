import { createRouter, createWebHistory } from "vue-router"
let usrDetails = JSON.parse(localStorage.getItem("userDetails"))
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: { requiresAuth: true },
        
    }, {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: { requiresAuth: true }
    }, {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
        meta: { requiresAuth: true }

    }, {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    }, {
        path: "/signup",
        name: "Signup",
        component: () => import("../views/Signup.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
       
        if (usrDetails.name) {
            next()
        } else {
            next("/login")
        }
    }
    else {
        next()
    }
})

export default router
