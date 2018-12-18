const Home = () => import('@/views/home') // 首页
const Login = () => import('@/views/userAction/login/登陆') // 登陆
const Register = () => import('@/views/userAction/register/注册') // 注册
const Forget = () => import('@/views/userAction/forget/index') // 忘记密码
const Market = () => import('@/views/market/index') // 行情
const Trade = () => import('@/views/trade/index') // 交易
const UserCenter = () => import('@/views/userCenter/index') // 用户中心
const vueRouter = [
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  { path: '/market', component: Market, name: 'market' },
  { path: '/trade', component: Trade, name: 'trade' },
  { path: '/userCenter', component: UserCenter, name: 'UserCenter' },
  // { path: '/login', redirect: '/home', hidden: true }
  { path: '/', redirect: '/home', hidden: true }
]

export default vueRouter
