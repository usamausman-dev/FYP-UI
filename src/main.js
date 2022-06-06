import { createApp } from 'vue'
import App from './App.vue'
import MyKeyboard from "./components/my-keyboard.vue"
import KeyboardKeys from "./components/keyboard-keys.vue"
import "../src/assets/style.css"
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

const app = createApp(App);
app.component('my-keyboard', MyKeyboard);
app.component('keyboard-keys', KeyboardKeys);

app.mount('#app')

