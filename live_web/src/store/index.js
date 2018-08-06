import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from './common/'
import user from './user/'
import userModule from './userModule/'

export default new Vuex.Store({
  modules: {
    common,
    user,
    userModule
  }
})
