import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/cn' // element组件的多语系
import ImgInputer from 'vue-img-inputer'

import '@/assets/styles/index.scss' // global css
import '@/utils/global'
import 'vue-img-inputer/dist/index.css'
Vue.component('ImgInputer', ImgInputer)
import App from './App'
import router from './router'
import store from './store'

import '@/assets/icons' // icon
import '@/permission' // permission control
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
