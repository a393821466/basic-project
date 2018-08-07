import * as types from './types'
import userModules from '../../api/userModule'
export default {
  // 获取品牌
  getMerchant: ({ commit }, query) => {
    return new Promise((resolve, reject) => {
      userModules
        .findMerchant(query)
        .then(res => {
          const da = res.value
          if (da.data.length > 0) {
            const arrayOfSquares = da.data.map(v => {
              v.loading = false
              if (v.status === 1) {
                v.edit = true
              } else {
                v.edit = false
              }
              return da
            })
            commit(types.FINDMERCHANT, arrayOfSquares)
          }
          resolve(da)
        })
        .catch(xhr => {
          reject(xhr)
        })
    })
  },
  // 改变状态方法
  postStatus: ({ commit }, query) => {
    return new Promise((resolve, reject) => {
      const da = {
        id: query.id,
        status: query.edit === true ? 0 : 1
      }
      userModules
        .updateMerchant(da)
        .then(rs => {
          // commit(types.UPDATESTATUS, rs)
          resolve(rs)
        })
        .catch(xhr => {
          reject(xhr)
        })
    })
  },
  // 删除品牌
  delMerchant: ({ commit }, query) => {
    return new Promise((resolve, reject) => {
      userModules
        .deleteMerchant({ code: query.code })
        .then(rs => {
          resolve(rs)
        })
        .catch(xhr => {
          reject(xhr)
        })
    })
  },
  // 添加品牌弹出框
  dialogFormVisible: ({ commit }) => {
    commit(types.ADDMERCHANTBOX)
  },
  // 添加品牌弹出框关闭
  dialogOff: ({ commit }) => {
    commit(types.MERCHANTBOXOFF)
  }
}
