import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import './styles/index.scss'
import './permission'
import i18n from './i18n'
import installFilter from '@/filters'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
app.use(store).use(router).use(i18n).mount('#app')
