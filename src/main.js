// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/adapter.css'
import '@/assets/css/base.css'
import '@/assets/dist/css/mui.min.css'
import '@/assets/dist/js/mui.min.js'
// vue baidu map
import BaiduMap from 'vue-baidu-map'

// 引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.31.171:8081/'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'qeaWNDHywm4w1XqSRSpTaaDWhqC31V7B'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
