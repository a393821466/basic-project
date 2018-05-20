import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/index.vue'
import getMessage from '../components/views/getMsg'
import ChatList from '../components/views/chatList'
import MessageBox from '../components/views/messageBox'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router);

export default new Router({
  history:'mode',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes:[
    {
      path: '/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/getMessage',
          name:'',
          component:getMessage
        },
        {
          path:'/messageBox',
          name:'My Planes',
          component:MessageBox
        },
        {
          path:'/chatList',
          name:'',
          component:ChatList
        },
        {
          path:'*',
          redirect:'/getMessage'
        }
      ]
    },
  ]
})