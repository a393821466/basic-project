import Vue from 'vue'
import App from './App.vue'
import router from './router'

//默认样式
import './assets/common/global.scss'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
