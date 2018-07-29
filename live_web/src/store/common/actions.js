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
  }
}
