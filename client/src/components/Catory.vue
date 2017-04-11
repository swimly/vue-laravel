<template>
  <div class="catory">
    <router-link :to="item.url" v-for="item in data">{{item.text}}</router-link>
  </div>
</template>
<script>
export default {
  name: 'articlecatory',
  props: {
    data: {
      type: Array,
      default: []
    }
  }
}
</script>
