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
      redirect: '/projects/all',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/all',
      name: 'projectall',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/system',
      name: 'projectsystem',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/app',
      name: 'projectapp',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/web',
      name: 'projectweb',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/pdf',
      name: 'projectpdf',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/swf',
      name: 'projectswf',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/video',
      name: 'projectvideo',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/projects/:id',
      name: 'project',
      components: {
        nav: require('@/views/Project')
      }
    }, {
      path: '/articles',
      name: 'articles',
      redirect: '/articles/all',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/all',
      name: 'articleall',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/visual',
      name: 'articlevisual',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/web',
      name: 'articleweb',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/chat',
      name: 'articlechat',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/group',
      name: 'articlegroup',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/mutual',
      name: 'articlemutual',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/:id',
      name: 'article',
      components: {
        nav: require('@/views/Article')
      }
    }]
  }, {
    path: '/home',
    name: 'home',
    component: require('@/views/Home')
  }]
})
