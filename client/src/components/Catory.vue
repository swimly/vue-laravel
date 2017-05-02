<template>
  <ul class="catory">
    <li v-for="(item, index) in data">
      <router-link :to="item.url" :key="index"><span :class="'iconfont v-m ' + item.icon"></span><span class="v-m">{{item.text}}</span><span class="v-m num t-r">{{item.num}}</span></router-link>
      <div class="sub" v-if="item.sub">
        <router-link v-for="item in item.sub" :to="item.url">{{item.text}}</router-link>
      </div>
    </li>
  </ul>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'articlecatory',
  created () {
    this.type()
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    ...mapMutations({
      type: 'type'
    })
  },
  watch: {
    '$route': (v, o) => {
      console.log(v.params.type)
      console.log(this)
    }
  }
}
</script>
