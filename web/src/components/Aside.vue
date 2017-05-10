<template>
  <div class="aside">
    <ul class="list">
      <li v-for="item in data">
        <router-link class="row w" :to="item.url"><span :class="'iconfont col v-m ' + item.icon"></span><span class="col v-m">{{item.text}}</span></router-link>
        <div class="sub" v-if="item.sub">
          <router-link :to="item.url" v-for="item in item.sub">{{item.text}}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'aside',
  props: {
    data: {
      type: Array,
      default: []
    }
  }
}
</script>
<style>
.aside{width:200px;height:100%;background:#343F55;margin-left:-200px;float:left;}
.aside .list{overflow:hidden;}
.aside .list li{display:block;margin-top:-1px;}
.aside .list a{color:#eee;text-decoration:none;font-size:14px;border-top:1px solid #3E485F;}
.aside .list .iconfont{width:20%;text-align:center;font-size:20px;padding:15px 0;}
.aside .list .router-link-active{background:#2C3446;}
.aside .list .sub{padding:0 0 0 30px;background:#394358;display:none;}
.aside .list .router-link-active + .sub{display:block;}
.aside .list .sub a{display:block;border:none;padding:10px;}
.aside .list .sub .router-link-active{background:none;color:#ED625C;}
</style>

