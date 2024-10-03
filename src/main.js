import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
///import store from './store/storage'
import net from 'net';

import VueSignature from "vue-signature-pad";

const app = createApp(App);
app.use(router);
app.use(net);
app.use(VueSignature);
app.mount('#app')