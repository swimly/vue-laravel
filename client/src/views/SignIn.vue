<template>
  <div class="form">
    <div class="mid-layout view">
      <div class="text"><input type="text" v-model="form.email"></div>
      <div class="text"><input type="text" v-model="form.password"></div>
      <span class="btn btn-blue" v-on:click="login">登录</span>
      <p>{{form.username}}</p>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import api from '../api'
  import {mapMutations, mapActions} from 'vuex'
  export default {
    name: 'signIn',
    data () {
      return {
        form: {
          email: '979741120@qq.com',
          password: '122514'
        }
      }
    },
    methods: {
      login () {
        api.signIn(this, function (_this, user) {
          _this.signIn({
            login: true,
            user: user
          })
        })
      },
      ...mapMutations({}),
      ...mapActions({
        signIn: 'signIn'
      })
    },
    components: {
      'my-footer': require('@/components/Footer')
    }
  }
</script>
<style>
.form .text{margin-bottom:10px;}
</style>
