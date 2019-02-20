<template>
  <div id="app">
    <!-- 顶部banner -->
    <div class="banner">
      <i class="iconfont icon-Nodejs"></i>
    </div>
    <router-view/>
    <!-- 底部导航 --> 
    <nav class="bottom">
      <router-link to="/" tag="div" :class='resPath == "index" ? "current" :""'>
        <i class="iconfont" v-bind:class='resPath == "index" ? "icon-shouye" : "icon-shouye1"'></i>
        <p>首页</p> 
      </router-link>
      <router-link to="/cart" tag="div" :class='resPath == "cart" ? "current" : ""'>
        <i class="iconfont" v-bind:class='resPath == "cart" ? "icon-ai66" :"icon-gouwuche"'></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/me" tag="div" :class='resPath == "me" ? "current" : ""'>
        <i class="iconfont" v-bind:class='resPath == "me" ? "icon-dengluyonghu" : "icon-denglu"'></i>
        <p>我的</p>
      </router-link> 
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'App',
  computed : {
    //路径
    resPath : function() {
      var arr = this.$route.path.split('/');
      return arr[1];
    }
  }
}
</script>

<style lang="scss">
  //引入sass
  @import './assets/sass/sass.scss';
  .banner{
    width: 100%;
    height: rem(100px);
    background-color: #444;
    text-align: center;
    position: fixed;
    top:0;
    left:0;
    i{
      font-size: rem(150px);
      line-height: rem(100px);
      color:#fff;
    }
  }
  nav.bottom{
    width: 100%;
    height: rem(80px);
    display: flex;
    position: fixed;
    left:0;
    bottom:0;
    background: #fff;
    border-top:1px solid #e8e8e8;
    border-bottom:1px solid #e8e8e8;
    div{
      width: 33.3%;
      text-align: center;
      i{
        display: inline-block;
        font-size: rem(40px);
        margin-top:rem(5px);
      }
      p{
        font-size: rem(24px);
      }
    }
    .current{
      background-color: #80bd01;
      color:#fff;
    }
  }
</style>
