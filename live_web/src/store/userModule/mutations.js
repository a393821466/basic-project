import {
  FINDMERCHANT,
  ADDMERCHANTBOX,
  MERCHANTBOXOFF,
  GROUPMERCHANT,
  FINDMERCHANTGROUP,
  CHANGEBOXSHOW,
  CHANGBOXHIDE
} from './types'

export const state = {
  merchantData: [],
  openMerchantBox: false,
  groupMerchant: [],
  groupArray: [],
  singleData: {}
}

export const mutations = {
  [FINDMERCHANT](state, res) {
    state.merchantData = !res.data ? res[0] : res.data
  },
  [ADDMERCHANTBOX](state) {
    state.openMerchantBox = true
  },
  [MERCHANTBOXOFF](state) {
    state.openMerchantBox = false
  },
  [GROUPMERCHANT](state, res) {
    state.groupMerchant = res.data
  },
  [FINDMERCHANTGROUP](state, res) {
    state.groupArray = !res.data ? res[0] : res.data
  },
  [CHANGEBOXSHOW](state, res) {
    res.edit = true
    state.singleData = res
  },
  [CHANGBOXHIDE](state) {
    state.singleData.edit = false
  }
}

export const getters = {
  getMerchant: state => state.merchantData,
  openMerchantBox: state => state.openMerchantBox,
  groupMerchant: state => state.groupMerchant,
  groupArray: state => state.groupArray,
  singData: state => state.singleData
}
