export default {
  menu: [{
    text: '首页',
    url: '/',
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
      url: '/users/count'
    }]
  }, {
    text: '项目',
    url: '/projects',
    icon: 'icon-projects'
  }, {
    text: '文章',
    url: '/articles',
    icon: 'icon-articles'
  }, {
    text: '图库',
    url: '/photos',
    icon: 'icon-photos'
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
