<template>
  <div class="page">
    <div class="mid-layout grid">
      <div class="grid-item w-80 fs-14">
        <div v-if="data.data">
          <h1>{{data.data.title}}</h1>
          <p>{{data}}</p>
        </div>
      </div>
      <div class="grid-item w-20 fs-14">
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
  import {mapGetters, mapActions} from 'vuex'
  import api from '../api'
  export default {
    name: 'project',
    data () {
      return {
        info: {}
      }
    },
    components: {
      'my-search': require('@/components/Search'),
      'my-catory': require('@/components/Catory'),
      'my-link': require('@/components/Link'),
      'my-footer': require('@/components/Footer')
    },
    computed: {
      ...mapGetters({
        catory: 'pcatory',
        data: 'projectInfo'
      })
    },
    methods: {
      ...mapActions({
        projectInfo: 'projectInfo'
      })
    },
    created () {
      api.projectInfo(this)
    }
  }
</script>
