import httpUtils from '../config/httpUtils'
import address from './address.config'
// import deploy from '../config/basic.config'

const userModule = {
  // 添加品牌
  addMerchant: params => {
    return httpUtils.post(address.userModule.addMerchant, {
      data: params
    })
  },
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
  },
  // 找品牌用户组
  findMerchantGroup: query => {
    return httpUtils.get(address.userModule.findGroup, {
      query: query
    })
  },
  // 添加用户组
  addGroup: params => {
    return httpUtils.post(address.userModule.addUserGroup, {
      data: params
    })
  },
  // 修改用户组
  updateGroup: params => {
    return httpUtils.post(address.userModule.updateGroup, {
      data: params
    })
  }
}

export default userModule
