<template>
  <div id="app">
    <transition name="page-fade">
      <section class="header_fixed" v-show="comTopContent">
        <section class="home_left"></section>
        <section class="home_right entry">
          <span class="svg-container" v-show="!goBakcks">
            <p>退出</p>
          </span>
          <router-link to='/userPrivileges' class="svg-container">
            <p>登录</p>
          </router-link>
        </section>
      </section>
    </transition>
    <transition name="page-fade">
      <section class="cube-content middle-content" ref="mfct" v-show="comTopContent">
        <p @click="go">点击</p>
      </section>
    </transition>
    <layout-view></layout-view>
    <transition name="page-fade">
      <footer-view v-show="comTopContent"></footer-view>
    </transition>
  </div>
</template>

<script>
import LayoutView from './views/layoutView'
import FooterView from './components/layout/footer'
import config from './config/basic.config'
export default {
  name: 'App',
  data() {
    return {
      pathUrl: ['/home', '/userCenter'],
      appContent: true,
      pswBoll: false
    }
  },
  computed: {
    goBakcks() {
      return this.pathUrl.indexOf(this.$route.path) === -1
    },
    comTopContent() {
      if (config.footerUrl.indexOf(this.$route.path) > -1) {
        return true
      } else {
        return false
      }
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
