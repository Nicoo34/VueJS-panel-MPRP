import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons'
import 'boxicons/css/boxicons.min.css'


Vue.config.productionTip = false
Vue.use(Vuesax, {
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
