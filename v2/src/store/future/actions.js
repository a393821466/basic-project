// import * as types from './types'
import future from '@/api/futureOrder'
// import qs from 'qs'
export default {
  homeFuture: ({commit}, da) => {
    return new Promise((resolve, reject) => {
      future.futuresHome(da).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
