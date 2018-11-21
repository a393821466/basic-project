import Router from 'vue-router'
import routes from './router'
/* Layout */
// import Layout from '../components/layout/Layout'

export default() => {
  return new Router({
    // mode: 'history', //后端支持可开
    // scrollBehavior: () => ({ y: 0 }),
    routes
  })
}
