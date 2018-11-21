import Vue from 'vue'
import App from './app.vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import createRouter from './router'

// 引入mint样式
import 'mint-ui/lib/style.css'
// 全局样式
import './assets/styles/global.styl'

// 使用mint
Vue.use(Mint)
Vue.use(VueRouter)
const router = createRouter()
new Vue({
  router, // 挂载路由
  render: h => h(App)
}).$mount('#root')
