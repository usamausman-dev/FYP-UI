import { createApp } from 'vue'
import App from './App.vue'
import MyKeyboard from "./components/my-keyboard.vue"
import KeyboardKeys from "./components/keyboard-keys.vue"
import WordCorrection from "./components/word-correction.vue"
import "../src/assets/style.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App);
app.component('my-keyboard', MyKeyboard);
app.component('keyboard-keys', KeyboardKeys);
app.component('word-correction', WordCorrection);
app.mount('#app')

