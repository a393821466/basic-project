import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // element组件的多语系

import '@/assets/styles/index.scss' // global css
import '@/utils/global'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
