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
    localStorage.removeItem('login')
    localStorage.removeItem('user')
    this.$router.push('/signIn')
    this.logout()
  }
}
</script>
