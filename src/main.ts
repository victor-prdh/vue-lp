import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

// URL = https://api.themoviedb.org/3/discover/movie?api_key=00f991e8dde20b13bd9e515bb20c6fdd&sort_by=popularity.desc&language=fr