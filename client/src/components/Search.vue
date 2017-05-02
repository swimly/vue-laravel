<template>
  <div class="input w"><input v-model="search" type="text" placeholder="请输入搜索关键字！"><a href="javascript:;" class="iconfont icon-search right"></a></div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapMutations({
      search: 'search'
    })
  }
}
</script>
<style>

</style>
