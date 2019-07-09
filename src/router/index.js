import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Signin from "@/components/Signin";

Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            meta: { auth: true }
        },
        {
            path: "/signin",
            name: "signin",
            component: Signin
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
});

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    const isLogin = localStorage.login ? true : false;
    if (to.path === "/login") {
        next();
    } else {
        //judge if current status is logined or not
        isLogin ? next() : next("/login");
    }
});

export default router;