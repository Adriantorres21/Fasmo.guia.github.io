import { registerPlugins } from '@/plugins'
// Components
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useCounterStore } from './stores/counter'; // Importa tus stores
// Composables
import { createApp } from 'vue'

// Registra Pinia globalmente en la aplicación
const pinia = createPinia();
const app = createApp(App)

registerPlugins(app)
// Registra tus stores
// pinia.store(useCounterStore);app.use(router);

app.use(router);
app.use(VueAxios, axios)
app.use(pinia)

app.mount('#app')
