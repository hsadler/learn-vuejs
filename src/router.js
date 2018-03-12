import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'

import RouterTest from './views/RouterTest/RouterTest.vue'
import NormalRoute from './views/RouterTest/NormalRoute.vue'
import DynamicRoute from './views/RouterTest/DynamicRoute.vue'
import NestedRoute from './views/RouterTest/NestedRoute.vue'
import WithQueryParams from './views/RouterTest/WithQueryParams.vue'
import ToRedirect from './views/RouterTest/ToRedirect.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/router-test',
      name: 'RouterTest',
      component: RouterTest
    },
    {
      path: '/normal-route',
      name: 'NormalRoute',
      component: NormalRoute
    },
    {
      path: '/dynamic-route/:id',
      name: 'DynamicRoute',
      component: DynamicRoute
    },
    {
      path: '/nested-route',
      name: 'NestedRoute',
      component: NestedRoute
    },
    {
      path: '/with-query-params',
      name: 'WithQueryParams',
      component: WithQueryParams
    },
    {
      path: '/to-redirect',
      name: 'ToRedirect',
      component: ToRedirect
    }

  ]
})
