import axios from 'axios'
import Qs from 'qs'
import { Message } from 'element-ui'
import store from '../store'
import { getNoParser, get, clearALL } from '@/utils/storage'
import axiosConfig from '../config/axios.config'
import Queue from 'simple-promise-queue'
import deploy from '../config/basic.config'

Queue.setPromise(require('bluebird'))
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
    if (store.getters.token !== '' || getNoParser('token')) {
      const token = !store.getters.token
        ? getNoParser('token')
        : store.getters.token
      config.headers['Merchant'] = config.headers['Merchant']
        ? config.headers['Merchant']
        : deploy.merchant
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
  Message({
    message: msg,
    type: 'error',
    duration: 3 * 1000
  })
  location.hash = '/login'
}

const reqError = msg => {
  Message({
    message: msg,
    type: 'error',
    duration: 3 * 1000
  })
}

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 2001) {
      /**
       * code为非2001是抛错
       */
      if (response.status === 200) {
        switch (res.code) {
          case 401:
            req401(res.message)
            break
          default:
            reqError(res.message)
        }
      }
      return Promise.reject('error')
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
      case 500:
        reqError(errors.message)
        break
      default:
        reqError('服务器请求超时')
    }
    return Promise.reject(error)
  }
)

// 处理请求参数.
const makeQueryStr = options => {
  const newOptions = { headers: {}}
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
    const { query, merchant } = params
    const merchants =
      url.indexOf('findMenu') > -1
        ? ''
        : merchant || get('userInfo').merchant
    let queryString = ''
    if (query) {
      queryString = `${url}?${Qs.stringify(query)}`
    } else {
      queryString = url
    }
    return queue.pushTask(resolve => {
      service
        .get(queryString, {
          headers: {
            Merchant: merchants
          }
        })
        .then(ret => {
          resolve(ret)
        })
    })
  },
  post: (url, params = {}) => {
    const { data, options } = params
    return service.post(url, data, makeQueryStr(options))
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
