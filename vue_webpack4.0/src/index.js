import Vue from 'vue'
import App from './app.vue'
import Mint from 'mint-ui'

// 引入mint样式
import 'mint-ui/lib/style.css'
// 全局样式
import './assets/styles/global.styl'

// 使用mint
Vue.use(Mint)

new Vue({
  render: h => h(App)
}).$mount('#root')
