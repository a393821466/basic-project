import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import createRouter from './router'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import './assets/icons'

// 引入mint样式
import 'mint-ui/lib/style.css'
// 全局样式
import './assets/styles/common.styl'
// 全局使用
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
const router = createRouter()
// const store = createStore()
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
