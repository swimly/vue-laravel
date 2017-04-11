<template>
  <div class="catory">
    <router-link :to="item.url" :key="index" v-for="(item, index) in data"><span :class="'iconfont v-m ' + item.icon"></span><span class="v-m">{{item.text}}</span><span class="v-m num t-r">{{item.num}}</span></router-link>
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
