import Vue from 'vue'
import {
  Popup,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from 'mint-ui'
import {
  Swipe,
  SwipeItem
} from 'vue-swipe'

// mint-ui
Vue.component(Popup.name, Popup)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
// vue-swipe
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)
