<template>
  <div>{{data}}</div>
</template>
<script>
  import api from '../api'
  export default {
    name: 'project',
    data () {
      return {
        data: {}
      }
    },
    created () {
      api.projectInfo(this)
    }
  }
</script>
