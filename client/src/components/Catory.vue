<template>
  <div class="catory">
    <router-link :to="item.url" v-for="(item, index) in data"><span :class="'iconfont v-m ' + item.icon"></span><span class="v-m">{{item.text}}</span><span class="v-m">{{item.num}}</span></router-link>
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
