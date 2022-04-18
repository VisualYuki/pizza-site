import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: () => import("./vue/pages/IndexPage"),
        },
        {
            path: "/some",
            component: () => import("./vue/pages/IndexPage"),
        },
    ],
});

// TODO: add route title page to all
