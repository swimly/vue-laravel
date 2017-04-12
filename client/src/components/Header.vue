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
      <div class="col v-m user t-r">
        <router-link v-if="!logined" title="登录" to="/signIn" class="iconfont icon-signup"></router-link>
        <dl class="user-info" v-if="logined">
          <dt><img class="v-m" :src="userInfo.face" alt=""><span class="v-m">{{userInfo.name}}</span></dt>
          <dd>
            <router-link to='/logout'>个人中心</router-link>
            <router-link to='/logout'>退出登录</router-link>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'header',
  created () {
    this.init({
      username: localStorage.getItem('username'),
      face: localStorage.getItem('face'),
      logined: localStorage.getItem('logined')
    })
  },
  computed: {
    ...mapGetters({
      logined: 'logined',
      userInfo: 'userInfo'
    })
  },
  methods: {
    ...mapActions({
      init: 'init'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{width:20%;position:relative;}
.user dt{font-size:14px;color:#fff;}
.user dt img{margin-right:10px;border-radius:50%;width:30px;height:30px;border:none;}
.user dd{position:absolute;top:50px;right:-20px;background:#fff;width:60%;padding:10px;border:1px solid #E0E0E0;border-radius:5px;box-shadow:0 1px 4px #ccc;display:none;}
.user dd a{color:#84889E;font-size:14px;display:block;text-align:left;padding:10px;border-top:1px solid #F5F5F5;transition:0.3s;}
.user dd a:first-child{border:none;}
.user dd a:hover{color:#E82954;}
.user:hover dd{display:block;}
</style>
