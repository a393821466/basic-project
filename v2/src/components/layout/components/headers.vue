<template>
  <div id="header">
    <div class="header_solt"></div>
    <div class="header_fixed">
      <p class="header_back">
        <i class="cubeic-back" @click="back_go" v-if="goBakcks"></i>
      </p>
      <p class="title">{{this.$route.name}}</p>
      <p class="entry">
        <span class="svg-container" @click="logout" v-show="info">
          <svg-icon icon-class="logout"></svg-icon>
        </span>
        <router-link to='/login' class="svg-container" v-show="!info && !goBakcks">
          <i class="icon_login"><svg-icon icon-class="users"></svg-icon></i>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      pathUrl: ['/home', '/userCenter']
    }
  },
  computed: {
    ...mapGetters(['info']),
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
          this.$store.dispatch('logout').then(rs => {
            location.href = '/home'  // 需要重定向
          }).catch(err => {
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
#header
  .header_solt, .header_fixed
    height: 48px
    background: #fdfdfd
  .header_fixed
    position: fixed
    top: 0
    left: 0
    width: 100%
    box-shadow: 0 0 1px 1px #f1f1f1
    display: flex
    z-index:9999
    p
      font-size: 18px
      text-align: center
      line-height: 48px
      color: #777
      &.header_back
        width: 20%
        flex: 0 0 20%
        i
          display: block
      .icon_login
        width:22px
        line-height:22px
        height:22px
        border-radius:50%
        background:#999
        color:#fff
        display:block
        float:right
        margin:12px 26px
        svg
          width:13px
          height:13px
          margin:0 !important
      &.title
        width: 60%
        flex: 0 0 60%
      &.entry
        width: 20%
        flex: 0 0 20%
        span
          display: block
          color: #9c9c9c
          border-radius: 5px
          svg
            margin-top:12px
</style>
