import * as types from './types.js'
import account from '@/api/account'
import qs from 'qs'
// import { get } from '@/utils/storage'
// import { state } from './mutations'

export default {
  // 用户登陆
  login: ({ commit }, userInfo) => {
    const data = {
      phone: userInfo.username.trim(),
      password: userInfo.password
    }
    return new Promise((resolve, reject) => {
      account
        .login(qs.stringify(data))
        .then(result => {
          commit(types.SET_TOKEN, result)
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 忘记密码
  forgetPassword: ({commit}, das) => {
    return new Promise((resolve, reject) => {
      account.forgetPwd(qs.stringify(das)).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 注册
  register: ({commit}, das) => {
    return new Promise((resolve, reject) => {
      account
        .register(qs.stringify(das))
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 退出
  logout: ({ commit }) => {
    return new Promise((resolve, reject) => {
      account
        .logout()
        .then(result => {
          commit(types.DELTOKEN)
          resolve(result)
        })
        .catch(err => {
          commit(types.DELTOKEN)
          reject(err)
        })
    })
  }
}
