<template>
  <div>
    <my-catory :data="catory" class="mid-layout"></my-catory>
    <ul class="grid view mid-layout">
      <li v-for="item in list" class="grid-5 grid-item">
        <my-item :data="item"></my-item>
      </li>
    </ul>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  name: 'articles',
  data () {
    return {
      catory: [{
        text: '全部',
        icon: '',
        url: {name: 'articleall'}
      }, {
        text: '视觉设计',
        icon: '',
        url: {name: 'articlevisual'}
      }, {
        text: '团队活动',
        icon: '',
        url: {name: 'articlegroup'}
      }, {
        text: '前端技术',
        icon: '',
        url: {name: 'articleweb'}
      }, {
        text: '交互设计',
        icon: '',
        url: {name: 'articlemutual'}
      }, {
        text: '闲话杂谈',
        icon: '',
        url: {name: 'articlechat'}
      }],
      list: []
    }
  },
  components: {
    'my-item': require('@/components/ArticleItem'),
    'my-catory': require('@/components/Catory'),
    'my-footer': require('@/components/Footer')
  },
  created () {
    this.$http.jsonp('http://localhost:8000/articles', {
      params: {
        id: 1
      }
    }).then(res => {
      this.list = res.body
      console.log(res)
    })
  }
}
</script>
