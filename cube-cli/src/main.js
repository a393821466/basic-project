import Vue from 'vue'
import VueRouter from 'vue-router'
import CubeUI from 'cube-ui'
import App from './App'
import router from './router'

import 'amfe-flexible'
import './assets/icons'

Vue.use(CubeUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
