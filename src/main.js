import { createApp } from 'vue'
import App from './App.vue'
import MyKeyboard from "./components/my-keyboard.vue"
import KeyboardKeys from "./components/keyboard-keys.vue"
import "../src/assets/style.css"

const app = createApp(App);
app.component('my-keyboard', MyKeyboard);
app.component('keyboard-keys', KeyboardKeys);

app.mount('#app')

