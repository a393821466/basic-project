import 'amfe-flexible'
import Vue from 'vue'
import CubeUI from 'cube-ui'
import App from './App'
import store from './store'
import router from './router'

import './assets/icons'
import './permission'

Vue.use(CubeUI)

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
