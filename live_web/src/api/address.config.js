const apis = '/apis'
export default {
  // 常用模块
  account: {
    login: `${apis}/login`,
    register: `${apis}/register`,
    logout: `${apis}/logout`
  },
  // 导航模块
  menu: {
    getMenu: `${apis}/user/findMenu`
  },
  // 用户管理模块
  userModule: {
    addMerchant: `${apis}/user/addMerchant`,
    findMerchant: `${apis}/user/findMerchant`,
    // findAllMerchant: `${apis}/user/findAllMerchant`,
    delMerchant: `${apis}/user/delMerchant`,
    updateMerchant: `${apis}/user/updateMerchant`,
    userManagement: `${apis}/user/userManagement`,
    findGroup: `${apis}/user/findGroup`,
    addUserGroup: `${apis}/user/addUserGroup`,
    updateGroup: `${apis}/user/updateGroup`,
    delGroup: `${apis}/user/delGroupUser`,
    findUser: `${apis}/user/userSearch`,
    addUser: `${apis}/user/userManagement`,
    userUpdate: `${apis}/user/userUpdate`,
    userStatus: `${apis}/user/userStatus`,
    delUser: `${apis}/user/userDelete`
  }
}
