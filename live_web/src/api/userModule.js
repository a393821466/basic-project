import httpUtils from '../config/httpUtils'
import address from './address.config'
// import deploy from '../config/basic.config'

const userModule = {
  // 查找品牌
  findMerchant: query => {
    return httpUtils.get(address.userModule.findMerchant, {
      query: query
    })
  }
}

export default userModule
