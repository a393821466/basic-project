import {
  SHOWLOADING,
  HIDELOADING
} from './types'

export const state = {
  loading: false
}

export const mutations = {
  [SHOWLOADING] (state) {
    state.loading = true
  },
  [HIDELOADING] (state) {
    state.loading = false
  }
}

export const getters = {
  loads: state => state.loading
}
