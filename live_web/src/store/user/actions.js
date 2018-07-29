import * as types from './types.js'
import account from '@/api/account'
import { get } from '@/utils/storage'
import { state } from './mutations'

export default {
  // 记住密码
  update_remumber: ({ commit }, remumber_flag) => {
    console.log(remumber_flag)
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_REMUMBER, remumber_flag)
      resolve()
    })
  },
  // 取消记住密码
  remove_remumber: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(types.REMOVE_REMUMBER)
      resolve()
    })
  },
  // 用户登陆
  login: ({ commit }, userInfo) => {
    const data = {
      username: userInfo.username.trim(),
      password: userInfo.password
    }
    return new Promise((resolve, reject) => {
      account
        .login(data)
        .then(result => {
          commit(types.SET_TOKEN, result)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout: ({ commit }) => {
    const userId = !state.userInfo.id ? get('userInfo').id : state.userInfo.id
    return new Promise((resolve, reject) => {
      account
        .logout({ id: userId })
        .then(result => {
          commit(types.DELTOKEN, result)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
