import Router from 'vue-router'
import routes from './routes'

// const Router = new VueRouter({
// mode: 'history', //后端支持可开
// scrollBehavior: () => ({ y: 0 }),
//   routes
// })

export default () => {
  return new Router({
    // mode: 'history', //后端支持可开
    // scrollBehavior: () => ({ y: 0 }),
    routes
  })
}
