<template>
  <div id="app">
    <header class="cube-bar">
      <div class="header_fixed">
        <p class="header_back">
          <!-- <i class="cubeic-back" @click="back_go" v-if="goBakcks"></i> -->
        </p>
        <h1 class="title">首页</h1>
        <p class="entry">
          <span class="svg-container" @click="logout" v-show="!goBakcks">
            <svg-icon icon-class="logout"></svg-icon>
          </span>
          <router-link to='/login' class="svg-container" >
            <i class="icon_login">
              <svg-icon icon-class="users"></svg-icon>
            </i>
          </router-link>
        </p>
      </div>
    </header>
    <section class="cube-content" ref="mfct">
      <div>
        <p></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pathUrl: ['/home', '/userCenter']
    }
  },
  computed: {
    goBakcks () {
      return this.pathUrl.indexOf(this.$route.path) === -1
    }
  },
  methods: {
    back_go () {
      this.$router.go(-1)
    },
    logout () {
      // const _that = this
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-sad',
        title: '提示',
        content: '确定要退出吗？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$store
            .dispatch('logout')
            .then(rs => {
              location.href = '/home' // 需要重定向
            })
            .catch(err => {
              // _that.$router.push({path: '/'})
              location.href = '/home'
              return err
            })
        },
        onCancel: err => {
          return err
        }
      }).show()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html, body, #app
  height 100%
body
  background-color #f8f8f8
  overflow hidden
.cube-bar
  z-index 10
  position absolute
  right 0
  left 0
  height 44px
  line-height 44px
  text-align center
  background-color #fdfdfd
  box-shadow 0 2px 1px #e9eaea
  -webkit-backface-visibility hidden
  backface-visibility hidden
  .header_fixed
    display flex
    font-size 18px
    .header_back, .entry
      width 20%
      flex 0 0 20%
    h1
      font-weight 500
      flex 0 0 60%
      width 60%
      color #666
    .icon_login
      width 22px
      line-height 22px
      height 22px
      border-radius 50%
      background #999
      color #fff
      display block
      float right
      margin 12px 26px
      svg
        width 13px
        height 13px
        margin 0 !important
    .entry
      width 20%
      flex 0 0 20%
      span
        display block
        color #9c9c9c
        border-radius 5px
        svg
          margin-top 10px
.cube-content
  position absolute
  top 44px
  left 0
  right 0
  bottom 0
  overflow scroll
  -webkit-overflow-scrolling touch
</style>
