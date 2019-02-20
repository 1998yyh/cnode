//获取主题的数据
//引入axios
import axios from 'axios';
//axios的基本配置
var $http = axios.create({
    //基础的URL
    baseURL: 'https://cnodejs.org/api/v1',
    //请求超时时间
    timeout: 3000,
    //头信息
    headers: {'X-Custom-Header': 'foobar'}
});
// 获取主题列表数据
function getTopics(options){
    //获取主题列表数据
    var newOptions = Object.assign({
        //主题的分类
        tab : 'all',
        //每页限制的数据条数
        limit : 20,
        // 页数
        page : 1
    },options)
    // 返回axios对象
    return $http({
        //url
        url : '/topics',
        //参数
        params : newOptions
    })
}
//获取主题详情页
function getTopicList(id) {
    // https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
    return $http.get('/topic/'+id);
}
//对外暴露主体信息
export {getTopics, getTopicList}
