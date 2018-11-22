import Vue from 'vue'
import App from './app.vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import createRouter from './router'
import Vuex from 'vuex'
import createStore from './store'

// 引入mint样式
import 'mint-ui/lib/style.css'
// 全局样式
import './assets/styles/global.styl'

// 使用mint
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
new Vue({
  router, // 挂载路由
  store, // 挂载store
  render: h => h(App)
}).$mount('#root')
