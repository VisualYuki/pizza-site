import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: () => import("./vue/pages/HomePage"),
            meta: "Home",
        },
        {
            path: "/cart",
            component: () => import("./vue/pages/CartPage"),
            meta: "Cart",
        },
        {
            path: "/order",
            component: () => import("./vue/pages/OrderPage"),
            meta: "Order",
        },
    ],
});

router.afterEach((to) => {
    //Vue.nextTick(() => {
    document.title = to.meta;
    //});
});

export default router;
