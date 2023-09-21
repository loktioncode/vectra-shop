import './assets/main.css'

import { createApp} from 'vue'
import { createPinia } from 'pinia'
import { useProductStore } from '@/stores/productStore';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const productStore = useProductStore();


