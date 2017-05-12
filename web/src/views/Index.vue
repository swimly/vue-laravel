<template>
  <div class="page view">
    <page-header></page-header>
    <page-aside :data="menu"></page-aside>
    <router-view name="sub" class="content"></router-view>
  </div>
</template>
<script>
import config from '../config'
export default {
  name: 'index',
  data () {
    return {
      menu: config.menu
    }
  },
  components: {
    'page-header': require('@/components/Header'),
    'page-aside': require('@/components/Aside')
  }
}
</script>
<style>
.view{padding:0 0 0 200px;overflow:hidden;}
.content{padding:50px 10px 10px;height:100%;}
</style>

