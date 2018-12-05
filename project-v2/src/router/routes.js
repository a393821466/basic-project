// import Home from '@/App'
// import Login from '@/views/index/login/index' // 登录
// import Register from '@/views/index/register/index' // 注册
// import Market from '@/views/market/index' // 行情
// import Trade from '@/views/trade/index' // 交易
// import UserCenter from '@/views/userCenter/index' // 用户中心
const UserPrivileges = () => import('@/views/index/userPrivileges/index') // 登陆&注册
const Market = () => import('@/views/market/index') // 行情
const Trade = () => import('@/views/trade/index') // 交易
const UserCenter = () => import('@/views/userCenter/index') // 用户中心
const vueRouter = [
  { path: '/userPrivileges', component: UserPrivileges, name: 'userPrivileges' },
  { path: '/market', component: Market, name: 'market' },
  { path: '/trade', component: Trade, name: 'trade' },
  { path: '/userCenter', component: UserCenter, name: 'UserCenter' }
  // { path: '/login', redirect: '/home', hidden: true }
  // { path: '*', redirect: '/', hidden: true }
]

export default vueRouter
