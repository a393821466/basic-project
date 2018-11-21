// import Home from '@/App'
import userCenter from '@/views/userCenter/index'
const vueRouter = [
  // { path: '/home', component: Home, hidden: true },
  { path: '/userCenter', component: userCenter, hidden: true }
  // { path: '/', redirect: '/home', hidden: true },
  // { path: '*', redirect: '/', hidden: true }
]

export default vueRouter
