<template>
  <div class="all">
    <topic-list :topics="topics"></topic-list>
  </div>
</template>
<script>
//引入获取主题数据的模块
import {getTopics} from '@/getdata/getTopic';
//引入主题列表模块
import TopicList from '@/components/topics/topicList';
export default {
  name: 'All',
  data () {
    return {
      // 主题列表数据
      topics : [],     
    }
  },
  //钩子函数
  mounted() {
   
    //请求数据
    getTopics({tab:'all'}).then((response) => {
      // console.log(response);
      this.topics = response.data.data;
    })
  },
  // 注册子组件
  components : {
    TopicList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
