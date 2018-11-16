const apis = '/apis'
export default {
  account: {
    login: `${apis}/login`, // 登录
    register: `${apis}/publisher/register`, // 注册
    forgetPsw: `${apis}/publisher/modifyPassword`, // 忘记密码
    logout: `${apis}/logout` // 登出

  },
  common: {
    imgCode: `${apis}/publisher/authImg`, // 图形验证码
    phoneCode: `${apis}/publisher/sendSms` // 手机验证码
  },
  futures: {
    homeFutures: `${apis}/futuresContract/pagesContract` // 首页期货
  }
}
