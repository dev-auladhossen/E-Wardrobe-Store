import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faXmark,
  faUserSecret,
  faArrowRight,
  faArrowsLeftRightToLine,
} from "@fortawesome/free-solid-svg-icons";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

/* add icons to the library */
library.add(faBars);
library.add(faXmark);
library.add(faUserSecret);
library.add(faArrowRight);
library.add(faArrowsLeftRightToLine);

const app = createApp(App);
app.use(router);
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
});
app.use(VueSweetalert2);
app.component("EasyDataTable", Vue3EasyDataTable);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
