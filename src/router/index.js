import Vue from 'vue'
import Router from 'vue-router'
// 整车首页
import Home from '@/components/home/home.vue'                  //首页
import detailTiji from '@/components/home/detail-tiji.vue'    //整车详细体积重量
import Login from '@/components/login/login.vue'   //登录页面
import Register from '@/components/login/register.vue'   //注册页面
import forget from '@/components/login/forget.vue'   //忘记密码页面
import renzheng from '@/components/login/renzheng.vue'    //认证页面
import zhengchezhifu from '@/components/home/zhengchezhifu.vue'  //整车支付
import baiduMap from '@/components/demo/ditu.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',                  //首页
      name: 'home',       
      component: Home
    },
    {
      path: '/detail_tiji',       //详细体积重量
      name: 'detail_tiji',
      component: detailTiji
    },
    {       
      path: '/login',               //登录
      name: 'login',
      component: Login
    },
    {       
      path: '/register',               //注册
      name: 'register',
      component: Register
    },
    {       
      path: '/forget',               //忘记密码
      name: 'forget',
      component: forget
    },
    {
      path: '/renzheng',            //认证
      name: 'renzheng',
      component: renzheng
    },
    {
      name: 'zhengchezhifu',        //整车支付
      path: '/zhengchezhifu',
      component: zhengchezhifu
    },
    {
      name: 'baiduMap',
      path: '/baiduMap',
      component: baiduMap
    }
  ]
})
