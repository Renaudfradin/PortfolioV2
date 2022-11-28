import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)
  .use(router)
  .use(createMetaManager ())

app.mount('#app')
