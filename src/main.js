import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import {Typer} from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Typer)

app.mount('#app')
