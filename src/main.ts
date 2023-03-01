import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import "./assets/main.css";


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(router);
app.use(vuetify)

app.mount("#app");

// URL = https://api.themoviedb.org/3/discover/movie?api_key=00f991e8dde20b13bd9e515bb20c6fdd&sort_by=popularity.desc&language=fr