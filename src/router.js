import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'

// getting to know vue-router
import RouterTest from './views/router-test/RouterTest.vue'
import NormalRoute from './views/router-test/NormalRoute.vue'
import DynamicRoute from './views/router-test/DynamicRoute.vue'
import NestedRoute from './views/router-test/NestedRoute.vue'
import NestedA from './views/router-test/nested/NestedA.vue'
import NestedB from './views/router-test/nested/NestedB.vue'
import WithQueryParams from './views/router-test/WithQueryParams.vue'
import ToRedirect from './views/router-test/ToRedirect.vue'
import Redirected from './views/router-test/Redirected.vue'
import To404 from './views/router-test/To404.vue'

// getting to know components and directives
import ComponentsTest from './views/ComponentsTest.vue'
import DirectivesTest from './views/DirectivesTest.vue'

// getting to know store (state managment)
import StoreTest from './views/StoreTest.vue'

// getting to know http (API calls)
import HttpTest from './views/HttpTest.vue'

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
      component: NestedRoute,
      children: [
        {
          path: 'nested-a',
          name: 'NestedA',
          component: NestedA
        },
        {
          path: 'nested-b',
          name: 'NestedB',
          component: NestedB
        }
      ]
    },
    {
      path: '/with-query-params',
      name: 'WithQueryParams',
      component: WithQueryParams
    },
    {
      path: '/to-redirect',
      name: 'ToRedirect',
      component: ToRedirect,
      redirect: { name: 'Redirected' }
    },
    {
      path: '/redirected',
      name: 'Redirected',
      component: Redirected
    },
    {
      path: '*',
      name: 'To404',
      component: To404
    },

    {
      path: '/components-test',
      name: 'ComponentsTest',
      component: ComponentsTest
    },
    {
      path: '/directives-test',
      name: 'DirectivesTest',
      component: DirectivesTest
    },
    {
      path: '/store-test',
      name: 'StoreTest',
      component: StoreTest
    },
    {
      path: '/http-test',
      name: 'HttpTest',
      component: HttpTest
    }

  ]
})
