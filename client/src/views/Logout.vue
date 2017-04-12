<template>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'logout',
  methods: {
    ...mapActions({
      logout: 'logout'
    })
  },
  created () {
    localStorage.removeItem('username')
    localStorage.removeItem('logined')
    localStorage.removeItem('face')
    this.$router.push('/signIn')
    this.logout()
  }
}
</script>
