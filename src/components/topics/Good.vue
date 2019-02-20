<template>
  <div class="good">
    <topic-list :topics="topics"></topic-list>
  </div>
</template>

<script>
//引入主题数据模块
import {getTopics} from '@/getdata/getTopic';
//引入主题列表模块
import TopicList from '@/components/topics/topicList';
export default {
  name: 'Good',
  data () {
    return {
      // 主题列表数据
      topics : [],
    }
  },
  //钩子函数
  mounted() {
   
    getTopics({tab:'good'}).then((response) => {
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
