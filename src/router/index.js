import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            meta: { auth: true }
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
});