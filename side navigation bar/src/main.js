import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import routes from "./route"
const app = createApp(App)
app.use(routes)
app.use(vuetify)
app.mount('#app')
