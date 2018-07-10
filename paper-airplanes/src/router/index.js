import Vue from 'vue'
import Router from 'vue-router'

import { MessageBox } from "mint-ui";
import Home from '../components/index.vue'
import Login from '../components/views/login'
import getMessage from '../components/views/getMsg'
import ChatList from '../components/views/chatList'
import MessageBoxs from '../components/views/messageBox'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router);

export default new Router({
  history: 'history',
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
            if (!sessionStorage.getItem('token')) {
              next()
            } else {
              MessageBox("提示", "您已经在登陆状态")
              next({
                path: '/getMessage',
                query: { redirect: to.fullPath }
              })
            }
          }
        },
        {
          path: '/getMessage',
          name: '',
          meta: {
            requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: getMessage
        },
        {
          path: '/messageBox',
          name: 'My Planes',
          meta: {
            requiresAuth: true,
          },
          component: MessageBoxs
        },
        {
          path: '/chatList',
          name: '',
          meta: {
            requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
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