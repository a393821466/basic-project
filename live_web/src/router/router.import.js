const router_development = file => require('@/views/' + file + '.vue').default

const router_production = file => require('@/views/' + file + '.vue')

module.exports = {
  router_development,
  router_production
}
