import * as types from './types'
import userModules from '../../api/userModule'
export default {
  getMerchant: ({ commit }, query) => {
    return new Promise((resolve, reject) => {
      userModules.findMerchant(query).then(res => {
        commit(types.FINDMERCHANT, res)
        resolve()
      })
    })
  }
}
