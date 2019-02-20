<template>
  <div class="topicList">
    <div class="topics">
      <div class="topic" v-for="(topic,index) in topics" :key="index">
        <img v-bind:src="topic.author.avatar_url" alt="">
        <div class="tab">
          <div class="top" v-if="topic.top">置顶</div>
          <div class="top" v-else-if="topic.good">精华</div>
          <div v-else>{{tab[topic.tab]}}</div>
        </div>
        <router-link :to="'/index/show/'+topic.id" tag="p">{{topic.title}}</router-link>
      </div> 
      </div>
    </div>
</template>
<script>

export default {
  name: 'TopicList',
  data () {
    return {
      //主题分类
      tab : {
        share : '分享',
        ask : '问答',
        job : '招聘',
        dev : '测试'
      }
    }
  },
  //钩子函数
  mounted() {   
   
  },
//   获取主题数据列表
props : ['topics']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/sass/sass.scss';
  @import '../../assets/sass/topicList.scss';
  .topicList{
    margin-top:rem(190px);
    margin-bottom: rem(100px);
  }

</style>
