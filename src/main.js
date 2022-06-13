import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./assets/tailwind.css";
import "./mixins";
import mixins from "./mixins";
import VueLazyload from "vue-lazyload";
// import Vue3Progress from "vue3-progress";
// const options = {
//   position: "fixed",
//   height: "3px",
//   color: "#1C2833",
// };
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "flowbite";

import "../node_modules/nprogress/nprogress.css";

const app = createApp(App); //app vue

app.use(store); //gunakan vuex global
app.use(router); // gunakan vue-router
app.use(VueSweetalert2); // gunakan sweetalert2
app.use(VueAxios, axios); //gunakan axios
app.use(mixins); // gunakan plugin mixins
app.use(VueLazyload); //gunakan vuelazy load
// app.use(Vue3Progress, options); //vue progressbar
app.use(Toast); //vue toast
app.config.devtools = true;

app.mount("#app"); //load app di public index
