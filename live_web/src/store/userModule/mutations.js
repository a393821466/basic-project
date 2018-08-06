import { FINDMERCHANT } from './types'

export const state = {
  merchantData: []
}

export const mutations = {
  [FINDMERCHANT](state, res) {
    state.merchantData = res.value
  }
}

export const getters = {
  getMerchant: state => state.merchantData
}
