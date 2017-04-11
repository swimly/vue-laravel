<template>
  <div class="header">
    <div class="mid-layout row h">
      <h1 class="logo col v-m"></h1>
      <div class="nav col v-m t-l">
        <router-link to="/home">首页</router-link>
        <router-link to="/projects">项目</router-link>
        <router-link to="/articles">文章</router-link>
        <router-link to="/aboutUs">关于</router-link>
        <router-link to="/contact">联系</router-link>
      </div>
      <div class="col v-m user">
        <router-link to="/aboutUs" class="iconfont icon-signup"></router-link>
        <router-link to="/contact" class="iconfont icon-signin"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
