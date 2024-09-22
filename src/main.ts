// https://unocss.dev/ 原子 css 库
import { createPinia } from 'pinia'
import { usePersist } from 'pinia-use-persist'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@unocss/reset/tailwind-compat.css' // unocss reset
import 'virtual:uno.css'
import 'virtual:unocss-devtools'
// 你自定义的 css
import './styles/main.css'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(usePersist)

const app = createApp(App)
app.use(pinia)
app.mount('#app')
