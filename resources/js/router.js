import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export default  new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: () => import("./components/ExampleComponent"),
        },
        {
            path: "/some",
            component: () => import("./components/ExampleComponent"),
        }
    ]
});



