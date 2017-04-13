<template>
  <ul class="paging row w">
    <li class="col v-m">
      <span class="info">当前第{{current}}页，总计{{pages}}页</span>
    </li>
    <li class="col v-m t-r">
      <span>首页</span>
      <span v-on:click="prev">上一页</span>
      <span v-on:click="next(pages)">下一页</span>
      <span>末页</span>
    </li>
  </ul>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'paging',
  props: {
    pages: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapMutations({
      next: 'next',
      prev: 'prev'
    })
  }
}
</script>
<style>
.paging span{font-size:14px;color:#777;margin:0 1em;cursor:pointer;}
</style>
