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
          let arrayOfSquares = ''
          if (da.data.length > 0) {
            arrayOfSquares = da.data.map(v => {
              v.loading = false
              if (v.status === 1) {
                v.edit = true
              } else {
                v.edit = false
              }
              return da
            })
          }
          commit(types.FINDMERCHANT, da.data.length > 0 ? arrayOfSquares : da)
          resolve(da)
        })
        .catch(err => {
          reject(err)
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
        .catch(err => {
          reject(err)
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
        .catch(err => {
          reject(err)
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
  },
  // 添加品牌
  addMerchant: ({ commit }, query) => {
    return new Promise((resolve, reject) => {
      const da = {
        merchant: query.merchantName,
        code: query.merchantViceName,
        status: query.value
      }
      userModules
        .addMerchant(da)
        .then(rs => {
          resolve(rs)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 用户组获取全部品牌
  groupGetMerchant({ commit }, query) {
    return new Promise((resolve, reject) => {
      userModules
        .findMerchant(query)
        .then(rs => {
          const da = rs.value
          if (da.data.length > 0) {
            da.data.unshift({ code: 'all', merchant: '全部' })
          }
          commit(types.GROUPMERCHANT, da)
          resolve(rs)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 全部用户组
  findMerchantGroup({ commit }, query) {
    return new Promise((resolve, reject) => {
      userModules
        .findMerchantGroup(query)
        .then(rs => {
          const da = rs.value
          let arrayOfSquares = ''
          if (da.data.length > 0) {
            arrayOfSquares = da.data.map(v => {
              v.loading = false
              v.edit = false
              return da
            })
          }
          commit(
            types.FINDMERCHANTGROUP,
            da.data.length > 0 ? arrayOfSquares : da
          )
          resolve(da)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 添加用户组
  addGroup({ commit }, query) {
    return new Promise((resolve, reject) => {
      const data = {
        groupname: query.name,
        code: query.value,
        introduce: query.introduce,
        icon: !query.file ? '' : query.file
      }
      userModules
        .addGroup(data)
        .then(rs => {
          resolve(rs)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 修改用户组弹框
  changeGroupBoxShow({ commit }, query) {
    const da = {
      id: query.id,
      name: query.name,
      code: query.merchant,
      edit: query.edit,
      icon: query.icon,
      introduce: query.introduce
    }
    commit(types.CHANGEBOXSHOW, da)
  },
  // 修改用户组弹框隐藏
  changeGroupBoxHide({ commit }) {
    commit(types.CHANGBOXHIDE)
  },
  // 确认修改用户组
  changeGroupConfirm({ commit }, query) {
    return new Promise((resolve, reject) => {
      userModules.updateGroup(query).then(rs => {
        resolve(rs)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
