require('./bootstrap');

import App from "./components/App";
import router from "./router.js";

const app = new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
