<template>
  <div id="app" :class="currentSkin">
    <transition name="page-fade">
      <section class="header_fixed" v-show="comTopContent">
        <section class="home_left">
          <i class="icons icon_Theme" @click="changeColor">
            <svg-icon icon-class="theme"></svg-icon>
          </i>
        </section>
        <section class="home_right entry">
          <span class="svg-container">
            <p>退出</p>
          </span>
          <router-link to='/login' class="svg-container">
            <p>登录</p>
          </router-link>
        </section>
      </section>
    </transition>
    <layout-view></layout-view>
    <transition name="page-fade">
      <footer-view v-show="comTopContent"></footer-view>
    </transition>
    <set-color :changColor='changColor' ref="colorPanel"></set-color>
  </div>
</template>

<script>
import LayoutView from './views/路由视图'
import FooterView from './components/layout/footer'
import SetColor from './components/public/setColor'
import config from '@/config/basic.config'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      changColor: false
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
    },
    ...mapGetters(['currentSkin'])
  },
  methods: {
    go() {
      this.$router.push({
        path: '/userCenter'
      })
    },
    changeColor() {
      this.$refs.colorPanel.changColor = true
    }
  },
  components: {
    LayoutView,
    FooterView,
    SetColor
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      height 14px
      color #666
      p
        float right
        font-size 14px
        padding 0 5px
</style>
