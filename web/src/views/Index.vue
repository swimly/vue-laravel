<template>
  <div class="page">
    <page-header></page-header>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {
    'page-header': resolve => require(['@/components/Header'], resolve)
  }
}
</script>
