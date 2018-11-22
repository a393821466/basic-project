<template>
  <div id="app">
    <section class="header_fixed">
      <section class="home_left"></section>
      <section class="home_right entry">
        <span class="svg-container" v-show="!goBakcks">
          <svg-icon icon-class="logout"></svg-icon>
        </span>
        <router-link to='/login' class="svg-container">
          <svg-icon icon-class="users"></svg-icon>
          <p>登录</p>
        </router-link>
      </section>
    </section>
    <section class="cube-content middle-content" ref="mfct">
      <banner/>
      <p @click="go">点击</p>
    </section>
    <layout-view></layout-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
  import LayoutView from './views/layoutView'
  import Banner from './components/banner/'
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
      FooterView,
      Banner
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './assets/styles/common.styl'

.cube-content
  position absolute
  top 50px
  left 0
  right 0
  bottom 0
  overflow scroll
  -webkit-overflow-scrolling touch
  padding 0 12px
.header_fixed
  z-index 10
  position absolute
  right 0
  left 0
  height 50px
  line-height 50px
  padding 0 12px
  text-align center
  -webkit-backface-visibility hidden
  backface-visibility hidden
  display flex
  .home_left
    flex 0 0 70%
    width 70%
  .entry
    flex 0 0 30%
    width 30%
    .svg-container
      font-size 13px
      height 14px
      p
        float right
        padding 0 5px
      .svg-icon
        width 18px
        height 18px
        border-radius 50%
        background #eebe4d
        fill currentColor
        color #eee
        float right
        position relative
        top 14px
</style>
