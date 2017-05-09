import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Index'], resolve)
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: resolve => require(['@/views/Login'], resolve)
    }
  ]
})
