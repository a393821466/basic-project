// import Home from '@/App'
const vueRouter = [
  // { path: '/home', component: Home, hidden: true },
  { path: '/userCenter', component: () => import('@/views/userCenter/index'), hidden: true }
  // { path: '/', redirect: '/home', hidden: true },
  // { path: '*', redirect: '/', hidden: true }
]

export default vueRouter
