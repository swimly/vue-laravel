<template>
  <div>{{userlist}}</div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'userlist',
    created () {
      this.getuserlist(this)   // 获取用户列表
    },
    computed: {
      ...mapGetters({
        userlist: 'userlist'
      })
    },
    methods: {
      ...mapActions({
        getuserlist: 'getuserlist'
      })
    }
  }
</script>
