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
        <router-link v-if="!logined" title="登录" to="/signIn" class="iconfont icon-signup"></router-link>
        <dl class="user" v-if="logined">
          <dt><img :src="userInfo.face" alt="">{{userInfo.name}}</dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'header',
  computed: {
    ...mapGetters({
      logined: 'logined',
      userInfo: 'userInfo'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
