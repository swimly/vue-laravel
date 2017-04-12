<template>
  <div>
    <div class="mid-layout grid">
      <div class="grid-item v-t w-80 pr-40 content">
        <my-item :data="item" v-for="(item, index) in list" :key="index"></my-item>
      </div>
      <div class="grid-item v-t w-20">
        <h2 class="module-title"><span>搜索</span></h2>
        <my-search class="mt-15 mb-15"></my-search>
        <h2 class="module-title"><span>文章分类</span></h2>
        <my-catory :data="catory" class="vertical"></my-catory>
        <h2 class="module-title"><span>友情链接</span></h2>
        <my-link></my-link>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import api from '../api'
export default {
  name: 'articles',
  data () {
    return {
      catory: [{
        text: '全部',
        catory: 'all',
        num: 0,
        icon: '',
        url: {name: 'articleall'}
      }, {
        text: '视觉设计',
        catory: 'visual',
        num: 0,
        icon: 'icon-visual',
        url: {name: 'articlevisual'}
      }, {
        text: '团队活动',
        catory: 'group',
        num: 0,
        icon: 'icon-group',
        url: {name: 'articlegroup'}
      }, {
        text: '前端技术',
        catory: 'web',
        num: 0,
        icon: 'icon-h5',
        url: {name: 'articleweb'}
      }, {
        text: '交互设计',
        catory: 'mutual',
        num: 0,
        icon: 'icon-jiaohu',
        url: {name: 'articlemutual'}
      }, {
        text: '闲话杂谈',
        catory: 'chat',
        num: 0,
        icon: 'icon-chat',
        url: {name: 'articlechat'}
      }],
      list: []
    }
  },
  components: {
    'my-item': require('@/components/ArticleItem'),
    'my-catory': require('@/components/Catory'),
    'my-footer': require('@/components/Footer'),
    'my-search': require('@/components/Search'),
    'my-link': require('@/components/Link')
  },
  created () {
    api.articles(this)
  }
}
</script>
