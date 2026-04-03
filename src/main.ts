import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

// Permet de revenir au debut de la page lors de la navigation
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
