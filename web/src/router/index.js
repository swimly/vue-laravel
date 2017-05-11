import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
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
        }, {
          path: '/users/add',
          name: 'usersAdd',
          components: {sub: resolve => require(['@/views/UsersAdd'], resolve)}
        }, {
          path: '/users/analysis',
          name: 'usersAna',
          components: {sub: resolve => require(['@/views/UsersAnalysis'], resolve)}
        }, {
          path: '/projects',
          redirect: 'projects/list'
        }, {
          path: '/projects/list',
          name: 'projects',
          components: {sub: resolve => require(['@/views/Projects'], resolve)}
        }, {
          path: '/projects/add',
          name: 'projectsAdd',
          components: {sub: resolve => require(['@/views/ProjectsAdd'], resolve)}
        }, {
          path: '/projects/analysis',
          name: 'projectsAna',
          components: {sub: resolve => require(['@/views/ProjectsAnalysis'], resolve)}
        }, {
          path: '/articles',
          redirect: 'articles/list'
        }, {
          path: '/articles/list',
          name: 'articles',
          components: {sub: resolve => require(['@/views/Articles'], resolve)}
        }, {
          path: '/articles/add',
          name: 'articlesAdd',
          components: {sub: resolve => require(['@/views/ArticlesAdd'], resolve)}
        }, {
          path: '/articles/analysis',
          name: 'articlesAna',
          components: {sub: resolve => require(['@/views/ArticlesAnalysis'], resolve)}
        }, {
          path: '/photos',
          redirect: 'photos/list'
        }, {
          path: '/photos/list',
          name: 'photos',
          components: {sub: resolve => require(['@/views/Photos'], resolve)}
        }, {
          path: '/photos/add',
          name: 'photosAdd',
          components: {sub: resolve => require(['@/views/PhotosAdd'], resolve)}
        }, {
          path: '/count',
          name: 'count',
          components: {sub: resolve => require(['@/views/Count'], resolve)}
        }, {
          path: '/home',
          name: 'home',
          components: {sub: resolve => require(['@/views/Home'], resolve)}
        }
      ]
    }
  ]
})
