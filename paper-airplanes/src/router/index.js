import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/index.vue'
import Login from '../components/views/login'
import getMessage from '../components/views/getMsg'
import ChatList from '../components/views/chatList'
import MessageBox from '../components/views/messageBox'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router);

export default new Router({
  history: 'mode',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/login',
          name: '',
          component: Login,
          beforeEnter: (to, from, next) => {
            var _this = this;
            if (to.path && (!sessionStorage.getItem('token'))) {
              next()
            } else {
              next({
                path: '/login',
                query: { redirect: to.fullPath }
              })
            }
          }
        },
        {
          path: '/getMessage',
          name: '',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: getMessage
        },
        {
          path: '/messageBox',
          name: 'My Planes',
          meta: {
            requireAuth: true,
          },
          component: MessageBox
        },
        {
          path: '/chatList',
          name: '',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: ChatList
        },
        {
          path: '*',
          redirect: '/login'
        }
      ]
    },
  ]
})