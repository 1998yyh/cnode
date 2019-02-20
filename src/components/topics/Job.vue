<template>
  <div class="job">
   <topic-list :topics="topics"></topic-list>
  </div>
</template>

<script>
//引入axios 模块 (封装的ajax)
import {getTopics} from '@/getdata/getTopic';
//引入主题列表数据
import TopicList from '@/components/topics/topicList';
export default {
  name: 'Job',
  data () {
    return {
      // 主题列表数据
      topics : [],
    }
  },
  //钩子函数
  mounted() {
  
    getTopics({tab:'job'}).then((response) => {
      this.topics = response.data.data;
    })
  },
  components : {
    TopicList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/sass/sass.scss';
  @import '../../assets/sass/topicList.scss';
  .job{
    width: rem(710px);
    margin:0 auto;
    margin-top:rem(190px);
    margin-bottom: rem(100px);
  }
</style>
