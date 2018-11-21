<template>
  <div id="app">
    <div class="header_fixed">
      <p class="header_back">
        <!-- <i class="cubeic-back"></i> -->
      </p>
      <h1 class="title">首页</h1>
      <p class="entry">
        <span class="svg-container" v-show="!goBakcks">
          <svg-icon icon-class="logout"></svg-icon>
        </span>
        <router-link to='/login' class="svg-container">
          <i class="icon_login">
            <svg-icon icon-class="users"></svg-icon>
          </i>
        </router-link>
      </p>
    </div>
    <section class="cube-content" ref="mfct">
      <p @click="go">点击</p>
    </section>
    <layout-view></layout-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
  import LayoutView from './views/layoutView'
  import FooterView from './components/layout/footer'
  export default {
    data() {
      return {
        pathUrl: ['/home', '/userCenter']
      }
    },
    computed: {
      goBakcks() {
        return this.pathUrl.indexOf(this.$route.path) === -1
      }
    },
    methods: {
      go() {
        this.$router.push({
          path: '/userCenter'
        })
      }
    },
    components: {
      LayoutView,
      FooterView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './assets/styles/common.styl'

.cube-content
  position absolute
  top 44px
  left 0
  right 0
  bottom 0
  overflow scroll
  -webkit-overflow-scrolling touch
</style>
