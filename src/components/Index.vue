<template>
  <div class="index">
   <!-- 首页导航 -->
   <nav class="top"> 
       <ul>
            <router-link to="/index" tag="li" class="on">全部</router-link>
            <router-link to="/index/good" tag="li">精华</router-link>
            <router-link to="/index/share" tag="li">分享</router-link>
            <router-link to="/index/ask" tag="li">问答</router-link>
            <router-link to="/index/job" tag="li">招聘</router-link>
            <router-link to="/index/dev" tag="li">客户端测试</router-link>
       </ul>
   </nav>
   <!-- 容器组件 -->
   <router-view/>
  </div>
</template> 

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/sass.scss';
nav.top{
    width: 100%;
    height: rem(100px);
    margin-top:rem(15px);
    background-color: #f6f6f6;
    position: fixed;
    top:rem(80px);
    left: 0;
    ul{
        width: 100%;
        height: rem(100px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            padding:rem(10px) rem(15px);
            color:#80bd01;
            font-size: rem(26px);
        }
        //选中后的主题样式
        .router-link-exact-active{
            background-color: #80bd01;
            border-radius: rem(5px);
            color:#fff;
        }
    }
}
</style>
