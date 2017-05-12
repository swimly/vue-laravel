import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: require('@/views/Index'),
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          components: {sub: require('@/views/Welcome')}
        }, {
          path: '/users',
          redirect: 'users/list'
        }, {
          path: '/users/list',
          name: 'users',
          components: {sub: require('@/views/Users')}
        }, {
          path: '/users/add',
          name: 'usersAdd',
          components: {sub: require('@/views/UsersAdd')}
        }, {
          path: '/users/analysis',
          name: 'usersAna',
          components: {sub: require('@/views/UsersAnalysis')}
        }, {
          path: '/projects',
          redirect: 'projects/list'
        }, {
          path: '/projects/list',
          name: 'projects',
          components: {sub: require('@/views/Projects')}
        }, {
          path: '/projects/add',
          name: 'projectsAdd',
          components: {sub: require('@/views/ProjectsAdd')}
        }, {
          path: '/projects/analysis',
          name: 'projectsAna',
          components: {sub: require('@/views/ProjectsAnalysis')}
        }, {
          path: '/articles',
          redirect: 'articles/list'
        }, {
          path: '/articles/list',
          name: 'articles',
          components: {sub: require('@/views/Articles')}
        }, {
          path: '/articles/add',
          name: 'articlesAdd',
          components: {sub: require('@/views/ArticlesAdd')}
        }, {
          path: '/articles/analysis',
          name: 'articlesAna',
          components: {sub: require('@/views/ArticlesAnalysis')}
        }, {
          path: '/photos',
          redirect: 'photos/list'
        }, {
          path: '/photos/list',
          name: 'photos',
          components: {sub: require('@/views/Photos')}
        }, {
          path: '/photos/add',
          name: 'photosAdd',
          components: {sub: require('@/views/PhotosAdd')}
        }, {
          path: '/count',
          name: 'count',
          components: {sub: require('@/views/Count')}
        }, {
          path: '/home',
          name: 'home',
          components: {sub: require('@/views/Home')}
        }
      ]
    }
  ]
})
