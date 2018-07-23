import *as types from './types'
import http from '../api/apis'

export default {
  showLoading: ({ commit }) => {
    commit(types.SHOWLOADING)
  },
  hideLoading: ({ commit }) => {
    commit(types.HIDELOADING)
  },
  planes_close: ({ commit }) => {
    commit(types.PLANESCLOSE)
  },
  nodeData: ({ commit }) => {
    commit(types.NODEDATA)
  },
  login: ({ commit }, data) => {
    commit(types.LOGIN, data);
  },
  getMessage: ({ commit }) => {
    http.fetchGet('/news/index').then(rs => {
      commit(types.GETMESSAGE, rs)
      commit(types.GETINFO)
    })
  },
  postMessage:({commit})=>{
    commit(types.SHOWPOSTMES)
  }
}