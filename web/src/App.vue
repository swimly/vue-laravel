<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <md-bottom-bar>
      <md-bottom-bar-item md-iconset="icon-speedometer">Recents</md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="icon-heart" md-active>Favorites</md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="icon-cursor">Nearby</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
