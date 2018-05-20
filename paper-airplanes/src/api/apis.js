import Vue from 'vue'
import axios from 'axios'
import store from '../store/store'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
    store.dispatch("showLoading")
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  setTimeout(()=>{
    store.dispatch("hideLoading")
  },3000)
  return response;
}, function(error) {
  return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  mockData(url, params) {
    return fetch(url, params);
  }
}