<template>
  <div class="home page">
    <my-header></my-header>
    <div class="banner row w page">
      <div class="col v-m t-c">
        <h2 class="title">longrise用户体验设计中心</h2>
        <p>我们是一支勇于自我否定的团队，聆听用户意见来进步，这样良性工作体系即产生，源动力即产生。<br/>我们是一支友爱的团队，让我们葆有激情，并肩奋斗，为用户提供所需，开始缔造卓越体验吧！</p>
        <div class="t-c">
          <router-link to="/" class="iconfont icon-qq"></router-link>
          <router-link to="/" class="iconfont icon-weibo"></router-link>
          <router-link to="/" class="iconfont icon-weixin"></router-link>
          <router-link to="/" class="iconfont icon-web"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
    'my-header': require('@/components/Header')
  }
}
</script>
<style>
@import '../assets/fonts/fzltxh.css';
</style>
