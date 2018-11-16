<template>
  <div id="footer" v-if="navbar">
    <cube-tab-bar
    v-model="selected"
    :data="tabs" @click="clickHanlder">
    </cube-tab-bar>
  </div>
</template>
<script>
import { getNoLocal } from '@/utils/storage'
export default {
  data () {
    return {
      selected: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '订单',
        icon: 'cubeic-like'
      }, {
        label: '直播',
        icon: 'cubeic-vip'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }],
      pathUrl: ['/home', '/order', '/userCenter']
    }
  },
  computed: {
    navbar () {
      return this.pathUrl.indexOf(this.$route.path) !== -1
    }
  },
  watch: {
    selected (newData, oldData) {
      if (!getNoLocal('token') && newData === '订单') {
        this.selected = oldData
      }
    },
    $route (to, form) {
      this.selected = to.name
    }
  },
  methods: {
    clickHanlder (item) {
      let _that = this
      switch (item) {
        case '首页':
          _that.$router.push({path: '/home'})
          break
        case '订单':
          _that.$router.push({path: '/order'})
          break
        case '我的':
          _that.$router.push({path: '/userCenter'})
          break
      }
    }
  }
}
</script>
<style rel="stylesheet/stylus" lang="stylus">
#footer
  position fixed
  bottom 0
  left 0
  background #f8f8f8
  width 100%
  box-shadow 0 0 1px 1px #eee
  div
    font-size 14px
  i
    font-size 24px
</style>
