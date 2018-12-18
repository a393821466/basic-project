import Vue from 'vue'
import App from './App'
// vue路由组件
import VueRouter from 'vue-router'
// vue状态管理
import Vuex from 'vuex'
// 导入路由文件
import createRouter from './router'
// 导入状态树文件
import createStore from './store'
// 路由设置
import Permission from './utils/permission'

// 解决移动端点击300秒延迟
import '@/utils/fastclick'
// css单位转换(目前不能转行间样式,如果无特殊要求,务必把样式分开写,整体为计算75)
import 'lib-flexible/flexible'
// svg图标
import './assets/icons'
// 按需引用
import './components/public/uiElement'
// 引入mint样式
import 'mint-ui/lib/style.css'
// 全局样式
import './assets/styles/common.styl'
// 颜色主题库
import './assets/styles/theme/theme.styl'
// 全局使用
Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
// 验权
Permission(router)

// 测试axios
// import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.timeout = 60000
// Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
