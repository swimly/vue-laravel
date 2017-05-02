<template>
  <div>
    <div class="mid-layout grid">
      <div class="grid-item v-t w-80 pr-40 content">
        <my-item :data="item" v-for="(item, index) in list" :key="index"></my-item>
        <my-paging :pages="pages" :current="current"></my-paging>
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
import {mapGetters, mapActions, mapMutations} from 'vuex'
import api from '../api'
export default {
  name: 'articles',
  data () {
    return {
    }
  },
  components: {
    'my-item': require('@/components/ArticleItem'),
    'my-catory': require('@/components/Catory'),
    'my-footer': require('@/components/Footer'),
    'my-search': require('@/components/Search'),
    'my-link': require('@/components/Link'),
    'my-paging': require('@/components/Paging')
  },
  computed: {
    ...mapGetters({
      catory: 'catory',
      list: 'list',
      pages: 'pages',
      current: 'current',
      search: 'searchText'
    })
  },
  methods: {
    ...mapActions({
      getList: 'getList'
    }),
    ...mapMutations({
      type: 'type'
    })
  },
  created () {
    api.articles(this)
  }
}
</script>
