<template>
  <div class="page">
    <div class="mid-layout grid info">
      <div class="grid-item w-80 fs-14">
        <div v-if="data.data">
          <h1 class="title">{{data.data.title}}</h1>
          <img src="static/img/banner.jpg" alt="" class="banner">
          <h2 class="sub-title">项目描述：</h2>
          <p>{{data.data.content}}</p>
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
<style>
.info .title{font-size:24px;font-weight:normal;border-bottom:1px solid #eee;padding-bottom:10px;margin:0 0 10px 0;color:#666;position:relative;padding-left:0.5em;}
.info .title:before{content:'';display:inline-block;width:4px;height:28px;background:#E82954;position:absolute;left:0;top:50%;margin-top:-16px;}
.info .sub-title{font-size:16px;font-weight:normal;color:#666;}
.info p{font-size:14px;line-height:1.5;color:#888;text-indent:2em;}
</style>
