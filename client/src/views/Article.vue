<template>
  <div>{{data}}</div>
</template>
<script>
  import api from '../api'
  export default {
    name: 'article',
    data () {
      return {
        data: {}
      }
    },
    created () {
      api.articleInfo(this)
    }
  }
</script>
