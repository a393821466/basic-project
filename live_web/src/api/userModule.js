import httpUtils from '../config/httpUtils'
import address from './address.config'
// import deploy from '../config/basic.config'

const userModule = {
  // 查找品牌
  findMerchant: query => {
    return httpUtils.get(address.userModule.findMerchant, {
      query: query
    })
  },
  // 更新品牌状态
  updateMerchant: params => {
    return httpUtils.post(address.userModule.updateMerchant, {
      data: params
    })
  },
  // 删除品牌
  deleteMerchant: query => {
    return httpUtils.del(address.userModule.delMerchant, {
      data: query
    })
  }
}

export default userModule
