import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '../components/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  // { path: '/home', component: () => import('@/views/index/home/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: true,
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('@/views/index/home/index')
      }
    ]
  },
  {
    path: '/login',
    component: Layout,
    children: [
      {
        path: '/login',
        name: '登陆',
        component: () => import('@/views/index/login/index')
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: '/order',
        name: '订单',
        component: () => import('@/views/order/index')
      }
    ]
  },
  {
    path: '/userCenter',
    component: Layout,
    children: [
      {
        path: '/userCenter',
        name: '我的',
        component: () => import('@/views/userCenter/index')
      }
    ]
  },
  {
    path: '/forget',
    component: Layout,
    children: [
      {
        path: '/forget',
        name: '忘记密码',
        component: () => import('@/views/index/forget/index')
      }
    ]
  },
  {
    path: '/register',
    component: Layout,
    children: [
      {
        path: '/register',
        name: '注册',
        component: () => import('@/views/index/register/index')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
