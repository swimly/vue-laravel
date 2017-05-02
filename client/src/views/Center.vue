<template>
  <div class="center personer mid-layout grid">
    <div class="grid-item w-20 aside">
      <my-catory :data='catory' class="vertical"></my-catory>
    </div>
    <div class="grid-item w-80">
      <router-view name="center"></router-view>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'center',
    components: {
      'my-header': require('@/components/Header'),
      'my-catory': require('@/components/Catory')
    },
    computed: {
      ...mapGetters({
        catory: 'ccatory',
        list: 'list'
      })
    },
    methods: {
      ...mapActions({
      }),
      ...mapMutations({
      })
    }
  }
</script>
<style>
.aside{background:#F5F5F5;}
.aside .catory.vertical{background:none;}
.aside .catory a{background:none;}
</style>
