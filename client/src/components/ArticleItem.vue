<template>
  <dl class="article-item">
    <dt><img src="static/img/img1.jpg" alt=""></dt>
    <dd>
      <h2><router-link :to="/articles/+data.id">{{data.title}}</router-link><span :class="'tag ' + data.router">{{data.catory}}</span></h2>
      <p>{{data.content}}</p>
      <p class="row w">
        <span class="col v-m time">{{data.time}}</span>
        <span class="col v-m t-r">
          <span class="iconfont icon-yonghu"></span>
          <span class="v-m">{{data.views}}人看过</span>
        </span>
      </p>
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
.article-item{display:table;margin-bottom:10px;border-radius:3px;padding:0;transition:0.3s;width:100%;border-top:1px solid #eee;}
.article-item:first-child{border:none;}
.article-item dt{height:140px;overflow:hidden;width:200px;display:table-cell;vertical-align:top;}
.article-item dt img{width:100%;height:120px;transition:0.3s;}
.article-item dt:hover img{transform:scale(1.05);}
.article-item dd{padding:10px 10px 0 10px;margin:0;display:table-cell;}
.article-item dd h2{margin:0;font-weight:normal;margin-bottom:10px;}
.article-item dd h2 a{color:#333b4b;font-size:16px;transition:0.3s;}
.article-item dd h2 a:hover{color:#E82954;}
.article-item dd h2 .tag{margin-left:20px;}
.article-item dd p{margin:5px 0;font-size:14px;color:#777;line-height:1.5;}
.tag{display:inline-block;padding:3px 5px;color:#fff;font-size:12px;border-radius:2px;}
.article-item .time{color:#afb6c5;font-size:12px;}
.article-item .iconfont{color:#848793;font-size:18px;vertical-align:middle;}
.article-item .bot{padding:10px;margin:0 -10px;border-top:1px solid #E9EAED;font-size:12px;color:#6a7180;}
.article-item span{font-size:12px;}
</style>
