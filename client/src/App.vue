<template>
  <div id="app" class="page">
    <router-view name="default"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>
@import './assets/css/main.css';
@import './assets/fonts/iconfont.css';
</style>
