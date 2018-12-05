import httpUtils from '../config/httpUtils'
import address from './address.config'

const publicMethod = {
  // 图形验证码
  authCode: query => {
    return httpUtils.get(address.common.imgCode, {
      query: query
    })
  },
  // 手机验证码
  phoneAuthCode: params => {
    return httpUtils.post(address.common.phoneCode, {
      data: params,
      options: {
        headers: {
          // 'content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    })
  }
}

export default publicMethod
