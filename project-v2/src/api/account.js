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
          // 'content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    })
  },
  forgetPwd: params => {
    return httpUtils.post(address.account.forgetPsw, {
      data: params,
      options: {
        headers: {
          // 'content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    })
  },
  // 注册
  register: params => {
    return httpUtils.post(address.account.register, {
      data: params,
      options: {
        headers: {
          endType: deploy.type,
          // 'content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    })
  },
  // 登出
  logout: query => {
    return httpUtils.get(address.account.logout, {
      query: query
    })
  }
}

export default account
