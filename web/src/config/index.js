export default {
  server: 'http://192.168.4.151/vue-laravel/server/public/',
  menu: [{
    text: '首页',
    url: '/home',
    icon: 'icon-home'
  }, {
    text: '用户',
    url: '/users',
    icon: 'icon-users',
    sub: [ {
      text: '列表',
      url: '/users/list'
    }, {
      text: '新增',
      url: '/users/add'
    }, {
      text: '分析',
      url: '/users/analysis'
    }]
  }, {
    text: '项目',
    url: '/projects',
    icon: 'icon-projects',
    sub: [ {
      text: '列表',
      url: '/projects/list'
    }, {
      text: '新增',
      url: '/projects/add'
    }, {
      text: '分析',
      url: '/projects/analysis'
    }]
  }, {
    text: '文章',
    url: '/articles',
    icon: 'icon-articles',
    sub: [ {
      text: '列表',
      url: '/articles/list'
    }, {
      text: '新增',
      url: '/articles/add'
    }, {
      text: '分析',
      url: '/articles/analysis'
    }]
  }, {
    text: '图库',
    url: '/photos',
    icon: 'icon-photos',
    sub: [ {
      text: '相册列表',
      url: '/photos/list'
    }, {
      text: '上传图片',
      url: '/photos/add'
    }]
  }, {
    text: '统计',
    url: '/count',
    icon: 'icon-count'
  }, {
    text: '关于',
    url: '/about',
    icon: 'icon-about'
  }]
}
