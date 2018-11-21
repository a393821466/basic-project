export default [
  {path: '/home', component: () => import('../view/index.vue'), name: 'home'},
  {path: '/', redirect: '/home'}
]
