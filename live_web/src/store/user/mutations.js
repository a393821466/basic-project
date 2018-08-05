import { set, clearALL, setLocal, removeLocal } from '@/utils/storage'
import { SET_TOKEN, DELTOKEN, UPDATE_REMUMBER, REMOVE_REMUMBER } from './types'

export const state = {
  remumber_flag: !!window.localStorage.getItem('remumber_flag'),
  token: '',
  userInfo: {}
}

export const mutations = {
  [UPDATE_REMUMBER](state, checkStatus) {
    state.remumber_flag = checkStatus
    setLocal('remumber_flag', state.remumber_flag)
    // window.localStorage.setItem('remumber_flag', state.remumber_flag)
  },
  [REMOVE_REMUMBER](state) {
    removeLocal('remumber_flag')
    state.remumber_flag = false
  },
  [SET_TOKEN](state, info) {
    state.userInfo = info.value
    state.token = info.token
    set('userInfo', info.value)
    set('token', info.token)
    if (state.remumber_flag === true) {
      setLocal('MUMBER_INFO', { user: info.value.username, token: info.token })
    } else {
      removeLocal('MUMBER_INFO')
    }
  },
  [DELTOKEN](state, res) {
    if (res.statusCode === true) {
      state.token = ''
      state.userInfo = ''
      clearALL()
    }
  }
}
export const getters = {
  token: state => state.token,
  info: state => state.userInfo,
  getRemumber: state => state.remumber_flag
}
