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
    <ul class="grid view mid-layout" v-if="!isnull">
      <li v-for="(item, index) in list" :key="index" class="grid-5 grid-item">
        <my-item :data="item"></my-item>
      </li>
    </ul>
    <my-loading v-if="loading"></my-loading>
    <my-null v-if="isnull"></my-null>
    <my-footer></my-footer>
  </div>
</template>
<script>
import api from '../api'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'navigation',
  data () {
    return {
      loading: true
    }
  },
  components: {
    'my-item': require('@/components/ProjectItem'),
    'my-catory': require('@/components/Catory'),
    'my-footer': require('@/components/Footer'),
    'my-search': require('@/components/Search'),
    'my-null': require('@/components/null'),
    'my-loading': require('@/components/loading')
  },
  created () {
    api.projects(this)
  },
  computed: {
    ...mapGetters({
      catory: 'pcatory',
      list: 'Projectlist',
      isnull: 'isnull'
    })
  },
  methods: {
    recatory () {
      api.projects(this)
    },
    ...mapActions({
      projectList: 'projectlist',
      isNull: 'isnull'
    }),
    ...mapMutations({
    })
  },
  watch: {
    '$route': 'recatory'
  }
}
</script>
