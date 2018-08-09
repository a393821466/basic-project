import {
  FINDMERCHANT,
  ADDMERCHANTBOX,
  MERCHANTBOXOFF,
  GROUPMERCHANT
} from './types'

export const state = {
  merchantData: [],
  openMerchantBox: false,
  groupMerchant: []
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
  }
}

export const getters = {
  getMerchant: state => state.merchantData,
  openMerchantBox: state => state.openMerchantBox,
  groupMerchant: state => state.groupMerchant
}
