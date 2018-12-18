import * as types from './types.js'

export default {
  // 换颜色
  changeColor: ({ commit }, val) => {
    commit(types.CHANGETHEME, val)
  }
}
