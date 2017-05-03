export default {
  server: 'http://192.168.4.151/vue-laravel/server/public/',
  storage: 'http://192.168.4.151/vue-laravel/server/app/storage/uploads/',
  pageSize: 3,
  articleCatory: [{
    text: '全部',
    catory: 'all',
    num: 0,
    icon: 'icon-quanbu',
    url: 'all'
  }, {
    text: '视觉设计',
    catory: 'visual',
    num: 0,
    icon: 'icon-visual',
    url: 'visual'
  }, {
    text: '团队活动',
    catory: 'group',
    num: 0,
    icon: 'icon-group',
    url: 'group'
  }, {
    text: '前端技术',
    catory: 'web',
    num: 0,
    icon: 'icon-h5',
    url: 'web'
  }, {
    text: '交互设计',
    catory: 'mutual',
    num: 0,
    icon: 'icon-jiaohu',
    url: 'mulute'
  }, {
    text: '闲话杂谈',
    catory: 'chat',
    num: 0,
    icon: 'icon-chat',
    url: 'chat'
  }],
  projectCatory: [{
    text: '全部',
    catory: 'all',
    icon: 'icon-quanbu',
    num: 0,
    url: '/projects/all'
  }, {
    text: '系统',
    catory: 'system',
    icon: 'icon-system',
    num: 0,
    url: '/projects/system'
  }, {
    text: '移动',
    catory: 'app',
    icon: 'icon-phone',
    num: 0,
    url: '/projects/app'
  }, {
    text: '网站',
    catory: 'web',
    icon: 'icon-website',
    num: 0,
    url: '/projects/web'
  }, {
    text: '纸面',
    catory: 'pdf',
    icon: 'icon-pdf',
    num: 0,
    url: '/projects/pdf'
  }, {
    text: '动画',
    catory: 'swf',
    icon: 'icon-flash',
    num: 0,
    url: '/projects/swf'
  }, {
    text: '视频',
    catory: 'video',
    icon: 'icon-video',
    num: 0,
    url: '/projects/video'
  }],
  centerCatory: [{
    text: '我的信息',
    catory: 'all',
    icon: 'icon-gerenxinxi',
    num: 0,
    url: '/center/info'
  }, {
    text: '项目信息',
    catory: 'system',
    icon: 'icon-xiangmu',
    num: 0,
    url: '/center/project',
    sub: [{
      text: '我的项目',
      url: '/center/project/mine'
    }, {
      text: '新增',
      url: '/center/project/add'
    }]
  }, {
    text: '我的文章',
    catory: 'app',
    icon: 'icon-pdf',
    num: 0,
    url: '/center/article',
    sub: [{
      text: '我的文章',
      url: '/center/article/mine'
    }, {
      text: '新增',
      url: '/center/article/add'
    }]
  }, {
    text: '我的足迹',
    catory: 'web',
    icon: 'icon-207',
    num: 0,
    url: '/center/foot'
  }, {
    text: '我的收藏',
    catory: 'pdf',
    icon: 'icon-shoucang',
    num: 0,
    url: '/center/collection'
  }, {
    text: '浏览记录',
    catory: 'swf',
    icon: 'icon-liulan',
    num: 0,
    url: '/center/record'
  }, {
    text: '信息反馈',
    catory: 'video',
    icon: 'icon-fankui',
    num: 0,
    url: '/center/reback'
  }]
}
