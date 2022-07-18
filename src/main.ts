import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from "./router"

import Home from "./pages/Home.vue"
import About from "./pages/About.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    routes
})
createApp(App).use(router).mount('#app')
