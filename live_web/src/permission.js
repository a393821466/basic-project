import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import Layout from './views/layout/Layout'
import { set, get } from './utils/storage'
import account from './api/account'
const _import = require('./router/router.import')
const _importRouter =
  process.env.NODE_ENV === 'development'
    ? _import.router_development
    : _import.router_production

var getRouter // 用来获取后台拿到的路由
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (window.sessionStorage.getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      routerValidate(to, next)
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      routerValidate(to, next)
    } else {
      next('/login')
    }
    NProgress.done()
  }
})
// 跳转路由
function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) // 过滤路由
  router.addRoutes(getRouter) // 动态添加路由
  global.antRouter = getRouter // 将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to, replace: true })
}
// 处理路由
function filterAsyncRouter(asyncRouterMap) {
  // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        // Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = _importRouter(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}
// 获取路由
function routerValidate(to, next) {
  if (!getRouter) {
    if (!get('router')) {
      account.menu().then(rs => {
        getRouter = rs.data.router
        set('router', getRouter)
        routerGo(to, next) // 执行路由跳转方法
      })
    } else {
      getRouter = get('router') // 拿到路由
      routerGo(to, next)
    }
  } else {
    next()
  }
}

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
