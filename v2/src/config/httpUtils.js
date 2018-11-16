import axios from 'axios'
import Qs from 'qs'
import store from '../store'
import { Dialog } from 'cube-ui'
import { getNoLocal, clearALL } from '@/utils/storage'
import axiosConfig from '../config/axios.config'
import Queue from 'simple-promise-queue'
// import deploy from '../config/basic.config'

const queue = (window.queue = new Queue({
  concurrency: 3,
  autoStart: true,
  timeout: 10 * 1000
}))

// 创建axios实例
const service = axios.create(axiosConfig)

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token !== '' || getNoLocal('token')) {
      const token = !store.getters.token
        ? getNoLocal('token')
        : store.getters.token
      // config.headers['Merchant'] = config.headers['Merchant'] ? config.headers['Merchant']
      //   : deploy.merchant
      config.headers['Authorization'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

const req401 = msg => {
  clearALL()
  Dialog.$create({
    type: 'alert',
    title: '提示',
    content: msg,
    icon: 'cubeic-alert'
  }).show()
  location.hash = '/login'
}

const reqError = msg => {
  Dialog.$create({
    type: 'alert',
    title: '提示',
    content: msg,
    icon: 'cubeic-alert'
  }).show()
}

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    /**
     * code为非200是抛错
     */
    if (res.code !== '200') {
      if (response.status === 200) {
        switch (res.code) {
          case 401:
            req401(res.message)
            break
          default:
            reqError(res.message)
        }
        return 'error'
      }
    } else {
      return response.data
    }
  },
  error => {
    const errors = error.response.data
    switch (errors.code) {
      case 401:
        req401(errors.message)
        break
      default:
        reqError(errors.message)
    }
    return Promise.reject(error)
  }
)

// 处理请求参数.
const makeQueryStr = options => {
  const newOptions = { headers: {} }
  if (options) {
    newOptions.headers = Object.assign(options.headers, {
      'Content-Type': options.headers['Content-Type'] || 'application/json'
    })
  } else {
    newOptions.headers = {
      'Content-Type': 'application/json'
    }
  }
  return newOptions
}

export default {
  get: (url, params = {}) => {
    const { query } = params
    let queryString = ''
    if (query) {
      queryString = `${url}?${Qs.stringify(query)}`
    } else {
      queryString = url
    }
    return queue.pushTask((resolve, reject) => {
      service
        .get(queryString)
        .then(ret => {
          resolve(ret)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post: (url, params = {}) => {
    const { data, options } = params
    return new Promise((resolve, reject) => {
      service.post(url, data, makeQueryStr(options)).then(ret => {
        resolve(ret)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  del: (url, params = {}) => {
    const { data } = params
    let queryString = ''
    if (data) {
      queryString = `${url}?${Qs.stringify(data)}`
    } else {
      queryString = url
    }
    return service.delete(queryString)
  }
}
