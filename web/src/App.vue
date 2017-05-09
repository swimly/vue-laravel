<template>
  <div id="app">
    <router-view></router-view>
    <ui-alert @dismiss="closeAlert1" v-show="showAlert1">
        Hi everybody! This is the default alert.
    </ui-alert>
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
