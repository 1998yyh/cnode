import Vue from 'vue'
import Router from 'vue-router'
// 首页组件
import Index from '@/components/Index';
// 购物车组件
import Cart from '@/components/Cart';
// 我的组件
import Me from '@/components/Me';

// 主题板块模块
// 全部主题组件
import All from '@/components/topics/All';
// 全部精华组件
import Good from '@/components/topics/Good';
// 全部分享组件
import Share from '@/components/topics/Share';
// 全部问答组件
import Ask from '@/components/topics/Ask';
// 全部招聘组件
import Job from '@/components/topics/Job';
// 全部客户端测试组件
import Dev from '@/components/topics/Dev';

// 引入主题详情组件
import Show from '@/components/topics/Show';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children : [
        {
          path : '/',
          name : 'All',
          component : All
        },
        {
          path : 'good',
          name : 'Good',
          component : Good
        },
        {
          path : 'ask',
          name : 'Ask',
          component : Ask
        },
        {
          path : 'share',
          name : 'Share',
          component : Share
        },
        {
          path : 'job',
          name : 'Job',
          component : Job
        },
        {
          path : 'dev',
          name : 'Dev',
          component : Dev
        },
        {
          path : 'show/:id',
          name : 'Show',
          component : Show
        }
      ]
    },
    {
      path : '/cart',
      name : 'Cart',
      component : Cart
    },
    {
      path : '/me',
      name : 'Me',
      component : Me
    },
    //路由跳转
    {
      path : '/*',
      redirect : '/index'
    }
  ]
})
