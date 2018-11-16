import * as types from './types'
import common from '@/api/common'
import qs from 'qs'
export default {
  showLoading: ({ commit }) => {
    commit(types.SHOWLOADING)
  },
  hideLoading: ({ commit }) => {
    commit(types.HIDELOADING)
  },
  // 图形验证码
  imgCode: ({commit}) => {
    return new Promise((resolve, reject) => {
      common.authCode().then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 手机验证码
  getPhoneCode: ({commit}, da) => {
    return new Promise((resolve, reject) => {
      common.phoneAuthCode(qs.stringify(da)).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
