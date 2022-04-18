require('./bootstrap');
import Vue from "vue";
import App from "./vue/App";
import router from "./router.js";

const app = new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
