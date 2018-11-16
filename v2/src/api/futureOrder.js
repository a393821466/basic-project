import httpUtils from '../config/httpUtils'
import address from './address.config'

const futures = {
  // 首页期货行情
  futuresHome: query => {
    return httpUtils.get(address.futures.homeFutures, {
      query: query
    })
  }
}

export default futures
