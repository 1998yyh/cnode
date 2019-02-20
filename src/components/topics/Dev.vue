<template>
  <div class="dev">
    <topic-list :topics="topics"></topic-list>
  </div>
</template>

<script>
//引入axios 模块 (封装的ajax)
import {getTopics} from '@/getdata/getTopic';
//引入主题列表数据
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
    
    getTopics({tab:'dev'}).then((response) => {
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
