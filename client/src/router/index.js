import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    name: 'main',
    component: require('@/views/Navigation'),
    children: [{
      path: '/projects',
      name: 'projects',
      components: {
        nav: require('@/views/Projects')
      }
    }]
  }, {
    path: '/home',
    name: 'home',
    component: require('@/views/Home')
  }]
})
