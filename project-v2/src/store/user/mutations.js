import { set, clearALL } from '@/utils/storage'
import { SET_TOKEN, DELTOKEN } from './types'

export const state = {
  token: '',
  userInfo: {}
}

export const mutations = {
  [SET_TOKEN] (state, info) {
    state.userInfo = info.value
    state.token = info.token
    set('userInfo', info.value)
    set('token', info.token)
  },
  [DELTOKEN] (state, res) {
    if (res.statusCode === true) {
      state.token = ''
      state.userInfo = ''
      clearALL()
    }
  }
}
export const getters = {
  token: state => state.token,
  info: state => state.userInfo
}
