import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: () => import("./vue/pages/IndexPage"),
        },
        {
            path: "/cart",
            component: () => import("./vue/pages/CartPage"),
        },
        {
            path: "/order",
            component: () => import("./vue/pages/OrderPage"),
        },
    ],
});

// TODO: add route title page to all
