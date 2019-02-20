<template>
  <div class="share">
    <topic-list :topics="topics"></topic-list>
  </div>
</template>

<script>
//引入主题数据列表
import {getTopics} from '@/getdata/getTopic';
import TopicList from '@/components/topics/topicList';
export default {
  name: 'Share',
  data () {
    return {
      // 主题列表数据
      topics : [],     
    }
  },
  //钩子函数
  mounted() {
   
    getTopics({tab:'share'}).then((response) => {
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
 
</style>
