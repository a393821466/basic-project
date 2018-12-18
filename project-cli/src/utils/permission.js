import {
  getNoLocal
} from '@/utils/storage'

import {
  MessageBox
} from 'mint-ui'
const whiteList = ['/login', '/register', '/home', '/live', '/forget', '/userCenter', '/market', '/trade']

export default (router) => {
  router.beforeEach((to, from, next) => {
    if (getNoLocal('token')) {
      if (to.path === '/login') {
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else {
      const p = to.path.split('/')
      if (whiteList.indexOf(to.path) > -1 || whiteList.indexOf(`/${p[p.length - 2]}`) > -1) {
        next()
      } else {
        MessageBox.confirm('您还未登录,去登录?').then(() => {
          next('/userPrivileges')
        }).catch(() => {
          next('/')
        })
      }
    }
  })
}
