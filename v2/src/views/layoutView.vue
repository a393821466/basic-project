<template>
  <transition :name="active">
    <router-view class="pages-view"></router-view>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active: 'page-fade'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-move-enter, .page-move-leave-active
  transform translate(100%, 0)
.page-move-enter-active, .page-move-leave-active
  transition transform 0.3s

.page-fade-enter, .page-fade-leave-active
  opacity 0
.page-fade-enter-active, .page-fade-leave-active
  transition opacity .2s
</style>
