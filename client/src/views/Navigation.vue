<template>
  <div class="page sub">
    <my-header></my-header>
    <router-view name="nav" class="nav-content mid-layout"></router-view>
  </div>
</template>
<script>
export default {
  name: 'navigation',
  components: {
    'my-header': require('@/components/Header')
  }
}
</script>
