<template>
  <div>
    <my-catory :data="catory" class="mid-layout"></my-catory>
    <ul class="grid view mid-layout">
      <li v-for="item in list" class="grid-5 grid-item">
        <my-item :data="item"></my-item>
      </li>
    </ul>
    <my-footer></my-footer>
  </div>
</template>
<script>
import api from '../api'
export default {
  name: 'navigation',
  data () {
    return {
      catory: [{
        text: '全部',
        catory: 'all',
        icon: '',
        num: 0,
        url: {name: 'projectall'}
      }, {
        text: '系统',
        catory: 'system',
        icon: 'icon-system',
        num: 0,
        url: {name: 'projectsystem'}
      }, {
        text: '移动',
        catory: 'app',
        icon: 'icon-phone',
        num: 0,
        url: {name: 'projectapp'}
      }, {
        text: '网站',
        catory: 'web',
        icon: 'icon-website',
        num: 0,
        url: {name: 'projectweb'}
      }, {
        text: '纸面',
        catory: 'pdf',
        icon: 'icon-pdf',
        num: 0,
        url: {name: 'projectpdf'}
      }, {
        text: '动画',
        catory: 'swf',
        icon: 'icon-flash',
        num: 0,
        url: {name: 'projectswf'}
      }, {
        text: '视频',
        catory: 'video',
        icon: 'icon-video',
        num: 0,
        url: {name: 'projectvideo'}
      }],
      list: []
    }
  },
  components: {
    'my-item': require('@/components/ProjectItem'),
    'my-catory': require('@/components/Catory'),
    'my-footer': require('@/components/Footer')
  },
  created () {
    api.projects(this)
  }
}
</script>
