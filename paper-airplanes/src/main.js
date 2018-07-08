// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './store/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-img-inputer/dist/index.css'

import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/font/iconfont.js'
import './mock.js'

Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */

//路由钩子
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token');
  if (to.meta.requireAuth) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  store: stores,
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('getYMD', function (input) {
  return input.split(' ')[0];
})