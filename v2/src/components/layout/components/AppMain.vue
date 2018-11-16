<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<style lang="stylus">
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.28s
.fade-enter,
.fade-leave-active
  opacity: 0
.breadcrumb-enter-active,
.breadcrumb-leave-active
  transition: all .3s
.breadcrumb-enter,
.breadcrumb-leave-active
  opacity: 0
  transform: translateX(20px)
.breadcrumb-move
  transition: all .3s
.breadcrumb-leave-active
  position: absolute
</style>
