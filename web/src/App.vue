<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showAlert1: true
    }
  },
  methods: {
    closeAlert1 () {
      this.showAlert1 = false
    }
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
