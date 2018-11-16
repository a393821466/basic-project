import router from './router'
import { getNoLocal } from '@/utils/storage' // 验权
import { Dialog } from 'cube-ui'

const whiteList = ['/login', '/home', '/userCenter', '/register', '/forget'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getNoLocal('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    const p = to.path.split('/')
    if (
      whiteList.indexOf(to.path) > -1 ||
      whiteList.indexOf(`/${p[p.length - 2]}`) > -1
    ) {
      next()
    } else {
      Dialog.$create({
        type: 'confirm',
        title: '提示',
        content: '您还未登录,去登录?',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          next('/login')
        },
        onCancel: err => {
          return err
        }
      }).show()
    }
  }
})
