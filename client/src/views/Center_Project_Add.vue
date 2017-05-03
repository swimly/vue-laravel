<template>
  <div class="fs-14">
    <table class="form-table w">
      <colgroup>
        <col width="15%">
        <col width="50%">
        <col width="5%">
        <col width="30%">
      </colgroup>
      <tr>
        <th>项目名称：</th>
        <td><div class="text"><input type="text" v-model="form.title"></div></td>
        <th>封面：</th>
        <td rowspan="3" valign="top">
          <vue-core-image-upload
            v-bind:class="['btn','btn-blue','js-btn-crop']"
            v-bind:crop="false"
            cropRatio="3:1"
            url="http://localhost/vue-laravel/server/public/uploadimg"
            text="上传图片"
            v-on:imageuploaded="imageuploaded"
            extensions="png,gif,jpeg,jpg">
        </vue-core-image-upload>
        </td>
      </tr>
      <tr>
        <th>分类：</th>
        <td>
          <div class="text">
            <select name="type" id="" v-model="form.catory">
              <option value="system">系统</option>
              <option value="app">移动</option>
              <option value="web">网站</option>
              <option value="pdf">纸面</option>
              <option value="swf">动画</option>
              <option value="video">视频</option>
            </select>
          </div>
        </td>
      </tr>
      <tr>
        <th>标签：</th>
        <td><div class="text"><input type="text" v-model="form.tag"></div></td>
      </tr>
      <tr>
        <th>github：</th>
        <td colspan="3"><div class="text"><input type="text" v-model="form.github"></div></td>
      </tr>
      <tr>
        <th>预览地址：</th>
        <td colspan="3"><div class="text"><input type="text" v-model="form.preview"></div></td>
      </tr>
      <tr>
        <th>附件地址：</th>
        <td colspan="3"><div class="text"><input type="text" v-model="form.file"></div></td>
      </tr>
      <tr>
        <th>参与者：</th>
        <td colspan="3"><div class="text"><input type="text" v-model="form.join"></div></td>
      </tr>
      <tr>
        <th></th>
        <td colspan="3">
          <span class="btn btn-blue" v-on:click="submit">发布</span>
        </td>
      </tr>
    </table>
    <p v-html="tips"></p>
  </div>
</template>
<script>
  import api from '../api'
  import VueCoreImageUpload from 'vue-core-image-upload'
  export default {
    name: 'addProject',
    data () {
      return {
        tips: '',
        form: {
          title: '',
          catory: '',
          author: '',
          join: '',
          cover: '',
          github: '',
          preview: 'http://web.swimly.cn/',
          file: '',
          views: 0,
          content: '',
          tag: ''
        }
      }
    },
    methods: {
      submit () {
        api.addProject(this)
      },
      imageuploaded (res) {
        console.log(res)
        this.tips = res
      }
    },
    components: {
      'vue-core-image-upload': VueCoreImageUpload
    }
  }
</script>
