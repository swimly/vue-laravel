<template>
  <dl class="project-item">
    <dt><img src="static/img/img1.jpg" alt=""></dt>
    <dd>
      <h2><router-link :to="/project/+data.id">{{data.title}}</router-link></h2>
      <p><span :class="'tag ' + data.catory">{{data.tag}}</span></p>
      <p class="row w">
        <span class="col v-m time">{{data.time}}</span>
        <span class="col v-m t-r">
          <router-link to="" class="iconfont icon-weibo"></router-link>
          <router-link to="" class="iconfont icon-erweima"></router-link>
        </span>
      </p>
      <div class="bot">
        <span class="iconfont icon-yonghu"></span>
        <span class="v-m">{{data.views}}人看过</span>
      </div>
    </dd>
  </dl>
</template>
<script>
  export default {
    name: 'project',
    props: {
      data: {
        type: Object,
        default: []
      }
    }
  }
</script>
<style>
.project-item{display:inline-block;border:1px solid #DFE0E4;border-radius:3px;padding:0;margin:0;transition:0.3s;}
.project-item dt{height:180px;overflow:hidden;}
.project-item dt img{width:100%;height:100%;transition:0.3s;}
.project-item dt:hover img{transform:scale(1.05);}
.project-item dd{padding:10px 10px 0 10px;margin:0;}
.project-item dd h2{margin:0;font-weight:normal;}
.project-item dd h2 a{color:#333b4b;font-size:14px;transition:0.3s;}
.project-item dd h2 a:hover{color:#E82954;}
.project-item dd p{margin:5px 0;}
.tag{display:inline-block;padding:3px 5px;color:#fff;font-size:12px;border-radius:2px;}
.project-item .time{color:#afb6c5;font-size:12px;}
.project-item .iconfont{color:#848793;font-size:18px;vertical-align:middle;}
.project-item .bot{background:#F3F4F7;padding:10px;margin:0 -10px;border-top:1px solid #E9EAED;font-size:12px;color:#6a7180;}
.project-item:hover{transform:translate(0,-3px);box-shadow:0 2px 5px #ccc;}
</style>
