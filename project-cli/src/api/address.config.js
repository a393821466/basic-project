const apis = '/apis'
export default {
  account: {
    login: `${apis}/login`,
    register: `${apis}/publisher/register`,
    forgetPsw: `${apis}/publisher/modifyPassword`,
    logout: `${apis}/logout`

  },
  common: {
    imgCode: `${apis}/publisher/authImg`,
    phoneCode: `${apis}/publisher/sendSms`
  }
}
