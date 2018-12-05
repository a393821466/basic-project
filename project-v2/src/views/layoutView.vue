<template>
  <transition :name="active">
    <keep-alive>
      <router-view class="pages-view"></router-view>
    </keep-alive>
  </transition>
</template>

<script type="text/ecmascript-6">
import basicConfig from '@/config/basic.config.js'
export default {
  data () {
    return {
      active: ''
    }
  },
  watch: {
    $route (to, from) {
      if (basicConfig.footerUrl.indexOf(to.path) > -1) {
        this.active = ''
      } else {
        this.active = 'slide-fade'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
