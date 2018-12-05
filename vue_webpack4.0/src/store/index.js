import Vuex from 'vuex'
import defaultState from './state'
import mutations from './mutations'
import getters from './getters'

export default() => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters
  })
}
