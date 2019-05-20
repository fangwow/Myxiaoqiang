// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/adapter.css'
import '@/assets/css/base.css'
import '@/assets/dist/css/mui.min.css'
import '@/assets/dist/js/mui.min.js'
// 引入axios
import axios from 'axios'
axios.defaults.baseURL = '192.168.31.171:8081/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
