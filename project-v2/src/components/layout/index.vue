<template>
  <div class="layout-page" :class="type">
    <!--头部-->
    <header class="header">
      <h1>{{title}}</h1>
        <p @click="back" class="header-back" >
          <svg-icon icon-class="left" :style="{'fill':!bgImg?'#888':bgImg.color}"></svg-icon>
        </p>
      <p>
        <router-link :style="{'color':!bgImg?'#888':bgImg.color}" :to='goUrl.url'>{{goUrl.title}}</router-link>
      </p>
    </header>
    <!--路由-->
    <div class="wrapper" :style="{'position':!bgImg?'relative':bgImg.positions}">
      <section v-show="desc" class="desc">
        <slot name="desc">{{desc}}</slot>
      </section>
      <span class="futures_bg" :style="!bgImg?'':{'background': 'url('+bgImg.bg+') no-repeat center center','height':bgImg.height}"></span>
      <main class="content">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    goUrl: {
      type: Object
    },
    bgImg: { // 背景传入
      type: Object
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.layout-page
  position absolute
  z-index 10
  top 0
  left 0
  width 100%
  height 100%
  background #fff
  .header
    position relative
    height 44px
    line-height 44px
    text-align center
    -webkit-backface-visibility hidden
    backface-visibility hidden
    z-index 5
    p
      position absolute
      right 0
      top 0
      padding 2px 15px 0
      color #888
    h1
      font-size 16px
      color #777
    .header-back
      position absolute
      top 10px
      left 0
      padding 0 15px
      width 26px
      height 26px
  >.wrapper
    height calc(100% - 44px)
    overflow-x hidden
    overflow-y auto
    position relative
    // -webkit-overflow-scrolling: touch
    .desc
      padding 10px
      margin 10px 0
      line-height 20px
      font-size 14px
    .content
      margin 10px
    .futures_bg
      width 100%
      height 100%
      display block
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      z-index -1
  &.option-demo
    .wrapper
      background-color $color-white
    .title
      font-size $fontsize-large
      font-weight 500
      color $color-dark-grey
      padding 15px
      border-bottom 1px solid rgba(0, 0, 0, 0.1)
      margin-bottom 15px
    .options
      margin-bottom 15px
    .option-list
      .group
        margin-bottom 15px
        border 1px solid rgba(0, 0, 0, 0.1)
        border-radius $radius-size-medium
      .item
        height 52px
        border-bottom 1px solid rgba(0, 0, 0, 0.1)
        &.sub
          font-size $fontsize-medium
          background-color $color-light-grey-opacity
          &.first
            box-shadow 0 1px 1px 1px #eee inset
          &.last
            border-bottom none
    .demo
      margin-bottom 15px
    .methods
      .method-list
        .group
          margin-bottom 15px
          border 1px solid rgba(0, 0, 0, 0.1)
          border-radius $radius-size-medium
        .item, button
          height 40px
          font-size $fontsize-large
        .item
          background-color $color-active-light-gray
          border-bottom 1px solid rgba(0, 0, 0, 0.1)
        button
          width 100%
          border-bottom-left-radius $radius-size-medium
          border-bottom-right-radius $radius-size-medium
          background-color $color-orange
          box-shadow 0 0 0 1px $color-orange
          border none
          outline none
          color $color-white
</style>
