import {createRouter,createWebHistory} from "vue-router"
// import store from "../store"
// let getUserEmail = JSON.parse(localStorage.getItem("userInfo"))

const routes=[
    {
        path:"/",
        name:"Home",
        component:()=> import ("../views/Home.vue"),
        meta:{ requiresAuth: true}
    },{
        path:"/about",
        name:"About",
        component:()=> import ("../views/About.vue"),
          meta: { requiresAuth: true }
    },{
        path:"/contact",
        name:"Contact",
        component:()=> import ("../views/Contact.vue"),
        meta: { requiresAuth: true }
    },{
        path:"/login",
        name:"Login",
        component:()=> import ("../views/Login.vue"),
        // meta: { requiresAuth: false }
    },{
        path:"/signup",
        name:"Signup",
        component:()=> import ("../views/signup.vue"),
        // meta: { requiresAuth: false }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to,from,next) => {
//     if (to.meta.requiresAuth){   
//         if (getUserEmail?.email){
//             next()
//         }else{
//             next({name:"Login"})
//         }
//      }else{
//          next()
//      }
   
// })

// router.beforeEach((to, from, next) => {
//     // console.log(router.push("/login"))
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (!store.state.userInfo.email) {
//             console.log("Login")
//             next({
//                 name: "Login",
//                 query: { redirect: to.fullPath }

//             });
         
//         } else {
//             console.log("Next 1")
//             next();
//         }
//     } else {
//         console.log("Next 2")
//         next();
//     }
// });
export default router