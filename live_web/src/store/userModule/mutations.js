// import { set, get } from '@/utils/storage'
import {
  FINDMERCHANT,
  ADDMERCHANTBOX,
  MERCHANTBOXOFF,
  FINDMERCHANTGROUP,
  CHANGEBOXSHOW,
  CHANGBOXHIDE,
  FINDUSER
} from './types'

export const state = {
  merchantData: '',
  openMerchantBox: false,
  groupArray: '',
  singleData: {},
  userData: []
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
  }
}

export const getters = {
  getMerchant: state => state.merchantData,
  openMerchantBox: state => state.openMerchantBox,
  groupArray: state => state.groupArray,
  singData: state => state.singleData,
  userData: state => state.userData
}
