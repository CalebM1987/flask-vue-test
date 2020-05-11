import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/bootstrap'
import { FlaskPlugin } from '@/services/api'

Vue.config.productionTip = false
Vue.use(FlaskPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
