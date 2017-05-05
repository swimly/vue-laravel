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
        <th>分类：</th>
        <td>
          <div class="text">
            <select name="type" id="" v-model="form.catory">
              <option value="system" selected>系统</option>
              <option value="app">移动</option>
              <option value="web">网站</option>
              <option value="pdf">纸面</option>
              <option value="swf">动画</option>
              <option value="video">视频</option>
            </select>
          </div>
        </td>
        <th></th>
        <td></td>
      </tr>
    </table>
    <table class="form-table w" v-if="form.catory === 'system' || form.catory === 'app' || form.catory === 'web'">
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
        <td rowspan="6" valign="top">
          <vue-core-image-upload
            v-bind:class="['btn','btn-upload']"
            v-bind:crop="false"
            cropRatio="3:1"
            :url="server + 'uploadimg'"
            text="上传"
            v-on:imageuploaded="imageuploaded"
            extensions="png,gif,jpeg,jpg">
          </vue-core-image-upload>
          <img style="width:280px;height:180px;border:1px solid #ddd;border-radius:5px;margin-top:10px;" :src="form.cover" alt="">
          <p class="tips">提示：为了更好的体验效果，请保证图片尺寸为（280px*180px），或者等比图片。</p>
        </td>
      </tr>
      <tr>
        <th>标签：</th>
        <td><div class="text"><input type="text" v-model="form.tag"></div></td>
      </tr>
      <tr>
      </tr>
      <tr>
        <th>github：</th>
        <td><div class="text"><input type="text" v-model="form.github"></div></td>
      </tr>
      <tr>
        <th>预览地址：</th>
        <td><div class="text"><input type="text" v-model="form.preview"></div></td>
      </tr>
      <tr>
        <th>附件地址：</th>
        <td><div class="text"><input type="text" v-model="form.file"></div></td>
      </tr>
      <tr>
        <th>banner：</th>
        <td valign="top" colspan="3">
          <vue-core-image-upload
            v-bind:class="['btn','btn-upload']"
            v-bind:crop="false"
            cropRatio="3:1"
            :url="server + 'uploadimg'"
            text="上传"
            v-on:imageuploaded="banneruploaded"
            extensions="png,gif,jpeg,jpg">
          </vue-core-image-upload>
          <img style="width:100%;height:280px;border:1px solid #ddd;border-radius:5px;margin-top:10px;" :src="form.banner" alt="">
          <p class="tips">提示：为了更好的体验效果，请保证图片尺寸为（1024px*300px），或者等比图片，以防变形！</p>
        </td>
      </tr>
      <tr>
        <th>参与者：</th>
        <td colspan="3"><div class="text"><input type="text" v-model="form.join"></div></td>
      </tr>
    </table>
    <table class="form-table w" v-if="form.catory === 'pdf' || form.catory === 'swf' || form.catory === 'video'">
      <colgroup>
        <col width="15%">
        <col width="85%">
      </colgroup>
      <tr>
        <th>封面：</th>
        <td valign="top">
          <vue-core-image-upload
            v-bind:class="['btn','btn-upload']"
            v-bind:crop="false"
            cropRatio="3:1"
            :url="server + 'uploadimg'"
            text="上传"
            v-on:imageuploaded="imageuploaded"
            extensions="png,gif,jpeg,jpg">
          </vue-core-image-upload>
          <br/>
          <img style="width:280px;height:180px;border:1px solid #ddd;border-radius:5px;margin-top:10px;" :src="form.cover" alt="">
          <p class="tips">提示：为了更好的体验效果，请保证图片尺寸为（280px*180px），或者等比图片。</p>
        </td>
      </tr>
      <tr>
        <th>项目名称：</th>
        <td><div class="text"><input type="text" v-model="form.title"></div></td>
      </tr>
      <tr>
        <th>标签：</th>
        <td><div class="text"><input type="text" v-model="form.tag"></div></td>
      </tr>
      <tr>
      </tr>
      <tr>
        <th>附件：</th>
        <td valign="top" colspan="3">
          <vue-core-image-upload
            v-bind:class="['btn','btn-upload']"
            v-bind:crop="false"
            cropRatio="3:1"
            :url="server + 'uploadimg'"
            text="上传"
            v-on:imageuploaded="banneruploaded"
            extensions="pdf,swf,mp4">
          </vue-core-image-upload>
          <p class="tips">提示：为了更好的体验效果，请保证图片尺寸为（1024px*300px），或者等比图片，以防变形！</p>
        </td>
      </tr>
      <tr>
        <th>参与者：</th>
        <td colspan="3"><div class="text"><input type="text" v-model="form.join"></div></td>
      </tr>
    </table>
    <table class="form-table w">
      <colgroup>
        <col width="15%">
        <col width="50%">
        <col width="5%">
        <col width="30%">
      </colgroup>
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
  import config from '../config'
  import VueCoreImageUpload from 'vue-core-image-upload'
  export default {
    name: 'addProject',
    data () {
      return {
        tips: '',
        server: config.server,
        form: {
          title: '',
          catory: 'system',
          author: '',
          join: '',
          cover: 'static/img/img1.jpg',
          banner: 'static/img/img2.jpg',
          github: '',
          preview: 'http://web.swimly.cn/',
          file: 'https://github.com',
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
        this.form.cover = config.storage + res
      },
      banneruploaded (res) {
        console.log(res)
        this.form.banner = config.storage + res
      }
    },
    components: {
      'vue-core-image-upload': VueCoreImageUpload
    }
  }
</script>
<style>
</style>
