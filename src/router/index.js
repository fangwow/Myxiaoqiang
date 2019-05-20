import Vue from 'vue'
import Router from 'vue-router'
// 整车首页
import Home from '@/components/home/home.vue'
import detailTiji from '@/components/home/detail-tiji.vue'    //整车详细体积重量
import Login from '@/components/login/login.vue'   //登录页面
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail_tiji',
      name: 'detail_tiji',
      component: detailTiji
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
