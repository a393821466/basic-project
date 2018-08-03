import * as types from './types'

export default {
  ToggleSideBar: ({ commit }) => {
    commit(types.TOGGLE_SIDEBAR)
  },
  CloseSideBar({ commit }, { withoutAnimation }) {
    commit(types.CLOSE_SIDEBAR, withoutAnimation)
  },
  ToggleDevice({ commit }, device) {
    commit(types.TOGGLE_DEVICE, device)
  },
  addVisitedViews({ commit }, view) {
    commit('ADD_VISITED_VIEWS', view)
  },
  delVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delOthersViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delAllViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_VIEWS')
      resolve([...state.visitedViews])
    })
  }
}
