import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import underscore from 'vue-underscore'
import App from './App.vue'
import router from './router'
import services from './services'
import store from './services/store'
import httpService from './services/httpService'

Vue.use(Vuetify)
Vue.use(underscore)

services.registerServices({
  store,
  httpService
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
