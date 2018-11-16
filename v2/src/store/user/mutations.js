import { setLocal, getLocal, clearLocal } from '@/utils/storage'
import { SET_TOKEN, DELTOKEN } from './types'

export const state = {
  token: '',
  userInfo: getLocal('userInfo')
}

export const mutations = {
  // 登录
  [SET_TOKEN] (state, info) {
    state.userInfo = info.result
    state.token = info.result.token
    setLocal('userInfo', info.result)
    setLocal('token', info.result.token)
  },
  // 登出
  [DELTOKEN] (state, res) {
    state.token = ''
    state.userInfo = ''
    clearLocal()
  }
}
export const getters = {
  token: state => state.token,
  info: state => state.userInfo
}
