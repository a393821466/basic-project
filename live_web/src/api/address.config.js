const apis = '/apis'
export default {
  account: {
    login: `${apis}/login`,
    register: `${apis}/register`,
    logout: `${apis}/logout`
  },
  menu: {
    getMenu: `${apis}/user/findMenu`
  }
}
