import Vue from 'vue'
import App from './App.vue'
import router from './router'
import services from './services'
import store from './store'
import underscore from 'vue-underscore'

Vue.use(underscore)

services.registerServices({
  store
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
