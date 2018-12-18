import { CHANGETHEME } from './types'
import { setLocal, getNoLocal } from '@/utils/storage'
export const state = {
  currentSkin: !getNoLocal('bgColor') ? 'theme-default' : getNoLocal('bgColor')
}

export const mutations = {
  [CHANGETHEME](state, flag) {
    setLocal('bgColor', flag)
    state.currentSkin = flag
  }
}
export const getters = {
  currentSkin: state => state.currentSkin
}
