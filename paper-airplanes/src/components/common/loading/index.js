const LoadingComponent = require('./load.vue')
const loading = {
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = loading