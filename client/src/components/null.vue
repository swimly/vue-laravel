<template>
  <div class="view row w null">
    <div class="col v-m t-c">
      <h2 class="iconfont icon-null"></h2>
      <p>抱歉，该分类没有内容！</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'null'
  }
</script>
<style>
.null .iconfont{font-size:20em;color:#E5E5E5;font-weight:normal;margin:0;}
.null .iconfont:before{position:relative;top:-50px;}
.null p{font-size:14px;color:#E5E5E5;margin-top:-70px;}
</style>
