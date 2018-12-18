import Vuex from 'vuex'

import common from './common/'
import user from './user/'

export default () => {
  return new Vuex.Store({
    modules: {
      common,
      user
    }
  })
}
