// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './store/store'

import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/font/iconfont.js'
import './mock.js'

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store:stores,
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
})