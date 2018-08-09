import {
  TOGGLE_SIDEBAR,
  CLOSE_SIDEBAR,
  TOGGLE_DEVICE,
  ADD_VISITED_VIEWS,
  DEL_VISITED_VIEWS,
  DEL_OTHERS_VIEWS,
  DEL_ALL_VIEWS
} from './types'
import { set, get } from '@/utils/storage'

export const state = {
  sidebar: {
    opened: get('sidebarStatus'),
    withoutAnimation: false
  },
  visitedViews: [],
  cachedViews: [],
  device: 'desktop'
}

export const mutations = {
  // 导航状态存储
  [TOGGLE_SIDEBAR](state) {
    if (state.sidebar.opened) {
      set('sidebarStatus', true)
    } else {
      set('sidebarStatus', false)
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
  [CLOSE_SIDEBAR](state, withoutAnimation) {
    set('sidebarStatus', true)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  // 设备
  [TOGGLE_DEVICE](state, device) {
    state.device = device
  },
  // 下面是tabs状态
  [ADD_VISITED_VIEWS](state, view) {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },
  [DEL_VISITED_VIEWS](state, view) {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews.splice(index, 1)
        break
      }
    }
  },
  [DEL_OTHERS_VIEWS](state, view) {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews = state.visitedViews.slice(i, i + 1)
        break
      }
    }
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews = state.cachedViews.slice(index, index + 1)
        break
      }
    }
  },
  [DEL_ALL_VIEWS](state) {
    state.visitedViews = []
    state.cachedViews = []
  }
}

export const getters = {
  sidebar: state => state.sidebar,
  device: state => state.device,
  visitedViews: state => state.visitedViews,
  cachedViews: state => state.cachedViews
}
