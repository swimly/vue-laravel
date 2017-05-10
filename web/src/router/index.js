import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Index'], resolve),
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          components: {sub: resolve => require(['@/views/Welcome'], resolve)}
        }, {
          path: '/users',
          redirect: 'users/list'
        }, {
          path: '/users/list',
          name: 'users',
          components: {sub: resolve => require(['@/views/Users'], resolve)}
        }
      ]
    }
  ]
})
