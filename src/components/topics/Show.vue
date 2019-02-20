<template>
  <div class="show">
      <h2>{{title}}</h2>
      <div class="wrapper">
          <img :src="imgurl" alt="">
          <div class="author">作者:</div>
          <div class="user">{{author}}</div>
      </div>
      <div class="content" v-html="content"></div>
  </div>
</template>
<script>
//引入获取主题数据的模块
import {getTopicList} from '@/getdata/getTopic';
export default {
  name: 'Show',
  data () {
    return {
      title : '',
      imgurl : '',
      author : '',
      content : ''
    }
  },
  //钩子函数
  mounted() {
    // 动态获取主题列表id的值
    // console.log(this.$route.params.id);
    //请求数据
    getTopicList(this.$route.params.id).then((data) => {
        this.title = data.data.data.title;
        this.imgurl = data.data.data.author.avatar_url;
        this.author = data.data.data.author.loginname;
        this.content = data.data.data.content;
        // console.log(data);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/sass.scss';
  .show{
    width: rem(710px);
    margin:0 auto;
    margin-top:rem(200px);
    margin-bottom: rem(120px);
    h2{
        text-align: center;
        font-size: rem(30px);
    }
    .wrapper{
        display: flex;
        height: rem(100px);
        justify-content: center;
        align-items: center;
        margin:rem(20px) auto;
        font-size: rem(26px);
        color:#666;
        img{
            width: rem(100px);
            height: rem(100px);
            border-radius: 50%;
        }
        .author{
            margin:0 rem(15px);
        }
    }
    .content{
      font-size: rem(20px);
      img{
          width: 100px;
          height: 100px;
      }
    }
  }

</style>
