<template>
  <div class="recommed">
    <div class="banner_box">
      <swipe class="my-swipe" v-if="banner.length!==0">
        <swipe-item class="slide" v-for="item in banner" :key="item.img">
          <a :href="item.link">
            <img :src='item.img' />
          </a>
        </swipe-item>
      </swipe>
      <div class="no_banner" v-else>
        暂无内容
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    banner: {
      type: Array
    }
  }
}
</script>
<style lang="stylus">
.banner_box
  width 100%
  height 140px
  margin-top 15px
  border-radius 8px
  overflow hidden
  .my-swipe
    height 140px
    color #fff
    text-align center
    .slide
      img
        width 100%
        height 100%
    .mint-swipe-indicators
      left auto
      right 2px
      .mint-swipe-indicator
        background #fff
        &.is-active
          opacity 0.9
  .no_banner
    background #eeeeee
    height 100%
    width 100%
    color #cccccc
    font-size 18px
    text-align center
    line-height 140px
</style>
