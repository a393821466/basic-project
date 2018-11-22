// import Home from '@/App'
import Login from '@/views/index/login/index'
import UserCenter from '@/views/userCenter/index'
const vueRouter = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/userCenter', component: UserCenter, name: 'UserCenter' }
  // { path: '/login', redirect: '/home', hidden: true }
  // { path: '*', redirect: '/', hidden: true }
]

export default vueRouter
