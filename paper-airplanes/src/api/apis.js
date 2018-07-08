import Vue from 'vue'
import axios from 'axios'
import store from '../store/store'

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(function (config) {
  store.dispatch("showLoading")
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  store.dispatch("hideLoading")
  return response;
}, function (error) {
  let code=error.response;
  store.dispatch("hideLoading")
  return Promise.reject(error);
})

// 封装axios的post请求
function fetchGet(url, params) {
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

function fetchPost(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(rs => {
      resolve(rs.data)
    }).catch(err => {
      reject(err.response)
    })
  })
}

export default {
  fetchGet,
  fetchPost
  // mockData(url, params) {
  //   return fetchGet(url, params);
  // }
}