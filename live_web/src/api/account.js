import httpUtils from '../config/httpUtils'
import address from './address.config'
import deploy from '../config/basic.config'

const account = {
  // 登陆
  login: params => {
    return httpUtils.post(address.account.login, {
      data: params,
      options: {
        headers: {
          Merchant: deploy.merchant,
          'content-Type': 'application/json'
        }
      }
    })
  },
  // 登出
  logout: params => {
    return httpUtils.del(address.account.logout, {
      data: params
    })
  }
}

export default account
