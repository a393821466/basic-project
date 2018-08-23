// import { formartDate } from '@/utils/common'
import {
  FINDMERCHANT,
  ADDMERCHANTBOX,
  MERCHANTBOXOFF,
  FINDMERCHANTGROUP,
  CHANGEBOXSHOW,
  CHANGBOXHIDE,
  FINDUSER,
  USERSTTINGBOX,
  USERSTTINGCLOSE,
  USERSUBSET,
  CHANGEUSEROPEN,
  CHANGEUSERCLOSE
} from './types'

export const state = {
  merchantData: '',
  openMerchantBox: false,
  groupArray: '',
  singleData: {},
  userData: [],
  singleUser: {},
  userSubTable: {},
  userChangeInfo: {}
}

export const mutations = {
  [FINDMERCHANT](state, res) {
    state.merchantData = res
  },
  [ADDMERCHANTBOX](state) {
    state.openMerchantBox = true
  },
  [MERCHANTBOXOFF](state) {
    state.openMerchantBox = false
  },
  [FINDMERCHANTGROUP](state, res) {
    state.groupArray = res
  },
  [CHANGEBOXSHOW](state, res) {
    res.edit = true
    state.singleData = res
  },
  [CHANGBOXHIDE](state) {
    state.singleData.edit = false
  },
  [FINDUSER](state, res) {
    state.userData = res
  },
  [USERSTTINGBOX](state, res) {
    res.edit = true
    state.singleUser = res
  },
  [USERSTTINGCLOSE](state) {
    state.singleUser.edit = false
  },
  [USERSUBSET](state, rs) {
    state.userSubTable = rs.value[0]
  },
  [CHANGEUSEROPEN](state, rs) {
    rs.edit = true
    state.userChangeInfo = rs
  },
  [CHANGEUSERCLOSE](state) {
    state.userChangeInfo.edit = false
  }
}

export const getters = {
  getMerchant: state => state.merchantData,
  openMerchantBox: state => state.openMerchantBox,
  groupArray: state => state.groupArray,
  singData: state => state.singleData,
  userData: state => state.userData,
  singleUser: state => state.singleUser,
  userSubTable: state => state.userSubTable
}
