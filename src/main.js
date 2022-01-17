import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-294948247'
});

createApp(App).use(router).mount('#app')
