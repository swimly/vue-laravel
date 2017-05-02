import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    name: 'main',
    component: resolve => require(['@/views/Navigation'], resolve),
    children: [{
      path: '/signIn',
      name: 'signIn',
      components: {
        nav: resolve => require(['@/views/SignIn'], resolve)
      }
    }, {
      path: '/logout',
      name: 'logout',
      components: {
        nav: resolve => require(['@/views/Logout'], resolve)
      }
    }, {
      path: '/projects',
      name: 'projects',
      redirect: '/projects/all',
      components: {
        nav: resolve => require(['@/views/Projects'], resolve)
      }
    }, {
      path: '/projects/all',
      name: 'projectall',
      components: {
        nav: resolve => require(['@/views/Projects'], resolve)
      }
    }, {
      path: '/projects/:type',
      name: 'project',
      components: {
        nav: resolve => require(['@/views/Projects'], resolve)
      }
    }, {
      path: '/project/:id',
      name: 'project',
      components: {
        nav: resolve => require(['@/views/Project'], resolve)
      }
    }, {
      path: '/articles',
      name: 'articles',
      redirect: '/articles/all',
      components: {
        nav: resolve => require(['@/views/Articles'], resolve)
      }
    }, {
      path: '/articles/:type',
      name: 'articleall',
      components: {
        nav: resolve => require(['@/views/Articles'], resolve)
      }
    }, {
      path: '/articles/:id',
      name: 'article',
      components: {
        nav: resolve => require(['@/views/Article'], resolve)
      }
    }, {
      path: '/center',
      name: 'center',
      redirect: 'center/info',
      components: {
        nav: resolve => require(['@/views/Center'], resolve)
      },
      children: [{
        path: 'info',
        name: 'info',
        components: {
          center: resolve => require(['@/views/Center_Info'], resolve)
        }
      }, {
        path: 'project',
        redirect: 'project/mine',
        name: 'project',
        components: {
          center: resolve => require(['@/views/Center_Project'], resolve)
        }
      }, {
        path: 'project/mine',
        name: 'myproject',
        components: {
          center: resolve => require(['@/views/Center_Project_List'], resolve)
        }
      }, {
        path: 'project/add',
        name: 'addproject',
        components: {
          center: resolve => require(['@/views/Center_Project_Add'], resolve)
        }
      }, {
        path: 'article',
        redirect: 'article/mine',
        name: 'article',
        components: {
          center: resolve => require(['@/views/Center_Article'], resolve)
        }
      }, {
        path: 'article/mine',
        name: 'myarticle',
        components: {
          center: resolve => require(['@/views/Center_Article_List'], resolve)
        }
      }, {
        path: 'article/add',
        name: 'addarticle',
        components: {
          center: resolve => require(['@/views/Center_Article_Add'], resolve)
        }
      }, {
        path: 'foot',
        name: 'foot',
        components: {
          center: resolve => require(['@/views/Center_Foot'], resolve)
        }
      }, {
        path: 'collection',
        name: 'collection',
        components: {
          center: resolve => require(['@/views/Center_Collection'], resolve)
        }
      }, {
        path: 'record',
        name: 'views',
        components: {
          center: resolve => require(['@/views/Center_Views'], resolve)
        }
      }, {
        path: 'reback',
        name: 'reback',
        components: {
          center: resolve => require(['@/views/Center_Reback'], resolve)
        }
      }]
    }]
  }, {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/views/Home'], resolve)
  }]
})
