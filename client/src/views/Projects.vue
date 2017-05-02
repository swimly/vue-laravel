<template>
  <div class="projects">
    <div class="row mid-layout bg-lgray">
      <div class="col v-m">
        <my-catory :data="catory"></my-catory>
      </div>
      <div class="col v-m" style="width:20%;padding-right:10px;">
        <my-search></my-search>
      </div>
    </div>
    <ul class="grid view mid-layout">
      <li v-for="(item, index) in list" :key="index" class="grid-5 grid-item">
        <my-item :data="item"></my-item>
      </li>
    </ul>
    <my-footer></my-footer>
  </div>
</template>
<script>
import api from '../api'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'navigation',
  data () {
    return {}
  },
  components: {
    'my-item': require('@/components/ProjectItem'),
    'my-catory': require('@/components/Catory'),
    'my-footer': require('@/components/Footer'),
    'my-search': require('@/components/Search')
  },
  created () {
    api.projects(this)
  },
  computed: {
    ...mapGetters({
      catory: 'pcatory',
      list: 'Projectlist'
    })
  },
  methods: {
    ...mapActions({
      projectList: 'projectlist'
    }),
    ...mapMutations({
    })
  }
}
</script>
