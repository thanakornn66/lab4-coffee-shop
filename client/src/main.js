import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)

// สร้าง pinia
const pinia = createPinia()

// ใช้ plugin เก็บ state ลง localStorage
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
