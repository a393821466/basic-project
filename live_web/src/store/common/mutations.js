import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR, TOGGLE_DEVICE } from './types'
import { set, getNoParser } from '@/utils/storage'

export const state = {
  sidebar: {
    opened: getNoParser('sidebarStatus'),
    withoutAnimation: false
  },
  device: 'desktop'
}

export const mutations = {
  [TOGGLE_SIDEBAR](state) {
    if (state.sidebar.opened) {
      set('sidebarStatus', 1)
    } else {
      set('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
  [CLOSE_SIDEBAR](state, withoutAnimation) {
    set('sidebarStatus', 1)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  [TOGGLE_DEVICE](state, device) {
    state.device = device
  }
}

export const getters = {
  sidebar: state => state.sidebar,
  device: state => state.device
}
