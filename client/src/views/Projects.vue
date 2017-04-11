<template>
  <ul class="grid">
    <li v-for="item in list" class="grid-5 grid-item">
      <my-item :data="item"></my-item>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'navigation',
  data () {
    return {
      list: []
    }
  },
  components: {
    'my-item': require('@/components/ProjectItem')
  },
  created () {
    this.$http.jsonp('http://localhost:8000/projects', {
      params: {
        id: 1
      }
    }).then(res => {
      this.list = res.body
      console.log(res)
    })
  }
}
</script>
