import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/styles/main.scss";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faBorderAll,
  faDownload,
  faHeadset,
  faComments,
  faShieldHalved,
  faPaintRoller,
  faGlobe,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

/* /* add each imported icon to the library */
library.add(
  faBorderAll,
  faDownload,
  faHeadset,
  faComments,
  faShieldHalved,
  faPaintRoller,
  faGlobe,
  faPenToSquare
);

const app = createApp(App);
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
