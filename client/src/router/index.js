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
      path: '/signIn',
      name: 'signIn',
      components: {
        nav: require('@/views/SignIn')
      }
    }, {
      path: '/logout',
      name: 'logout',
      components: {
        nav: require('@/views/Logout')
      }
    }, {
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
      path: '/projects/:type',
      name: 'project',
      components: {
        nav: require('@/views/Projects')
      }
    }, {
      path: '/project/:id',
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
      path: '/articles/:type',
      name: 'articleall',
      components: {
        nav: require('@/views/Articles')
      }
    }, {
      path: '/articles/:id',
      name: 'article',
      components: {
        nav: require('@/views/Article')
      }
    }, {
      path: '/center',
      name: 'center',
      redirect: 'center/info',
      components: {
        nav: require('@/views/Center')
      },
      children: [{
        path: 'info',
        name: 'info',
        components: {
          center: require('@/views/Center_Info')
        }
      }, {
        path: 'project',
        redirect: 'project/mine',
        name: 'project',
        components: {
          center: require('@/views/Center_Project')
        }
      }, {
        path: 'project/mine',
        name: 'myproject',
        components: {
          center: require('@/views/Center_Project_List')
        }
      }, {
        path: 'project/add',
        name: 'addproject',
        components: {
          center: require('@/views/Center_Project_Add')
        }
      }, {
        path: 'article',
        redirect: 'article/mine',
        name: 'article',
        components: {
          center: require('@/views/Center_Article')
        }
      }, {
        path: 'article/mine',
        name: 'myarticle',
        components: {
          center: require('@/views/Center_Article_List')
        }
      }, {
        path: 'article/add',
        name: 'addarticle',
        components: {
          center: require('@/views/Center_Article_Add')
        }
      }, {
        path: 'foot',
        name: 'foot',
        components: {
          center: require('@/views/Center_Foot')
        }
      }, {
        path: 'collection',
        name: 'collection',
        components: {
          center: require('@/views/Center_Collection')
        }
      }, {
        path: 'record',
        name: 'views',
        components: {
          center: require('@/views/Center_Views')
        }
      }, {
        path: 'reback',
        name: 'reback',
        components: {
          center: require('@/views/Center_Reback')
        }
      }]
    }]
  }, {
    path: '/home',
    name: 'home',
    component: require('@/views/Home')
  }]
})
