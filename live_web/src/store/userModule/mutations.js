import { FINDMERCHANT, ADDMERCHANTBOX, MERCHANTBOXOFF } from './types'

export const state = {
  merchantData: [],
  openMerchantBox: false
}

export const mutations = {
  [FINDMERCHANT](state, res) {
    state.merchantData = res[0]
  },
  [ADDMERCHANTBOX](state) {
    state.openMerchantBox = true
  },
  [MERCHANTBOXOFF](state) {
    state.openMerchantBox = false
  }
}

export const getters = {
  getMerchant: state => state.merchantData,
  openMerchantBox: state => state.openMerchantBox
}
