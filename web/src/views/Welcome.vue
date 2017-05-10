<template>
  <div class="page">
    欢迎页
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {
    'page-header': resolve => require(['@/components/Header'], resolve),
    'page-aside': resolve => require(['@/components/Aside'], resolve)
  }
}
</script>
