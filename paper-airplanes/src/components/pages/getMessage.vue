<template>
  <div>
    <div id="getMessageMask" v-if="messageOpens">
      <div class="page">
        <div class="message_top">
          <img :src="info[0].icons" alt="头像">
          <span class="name_and_detail">
            <h2><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mingpian"></use>
          </svg>{{info[0].author_name}}</h2>
              <p>{{info[0].createDate}}</p>
            </span>
          </div>
          <p class="content c">{{info[0].content}}</p>
          <div class="btn">
            <span class="lot" @click="this_Flys">
              <svg class="icon fj" aria-hidden="true">
                <use xlink:href="#icon-emizhifeiji"></use>
              </svg>
              Give Up
            </span>
            <span class="get" @click="this_Reply">
              <svg class="icon Posts" aria-hidden="true">
                <use xlink:href="#icon-huifu"></use>
              </svg>
              Reply
            </span>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="acceptOpen rotateInUpRight" @click="checkBoxModal">
          <div class="wave ripple danger">  
            <div class="circle"></div>  
            <div class="circle"></div>  
            <div class="circle"></div>  
              <div class="content">  
                <img :src="imgSvg" style="width:0.7rem;height:0.7rem;"/>
              </div>  
          </div>
        </div>
        <div class="messageBoxBtn" :class="mssageBox?'BoxBtnShow':'BoxBtnHide'"> 
          <h3>Your select is?</h3>
          <span class="wantLook" @click="wantLook">Look</span>
          <span class="notLook" @click="noLook">No Look</span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hub from '../../utlis/hub.js'
export default {
  data() {
    return {
      mssageBox: false,
      messageOpens: false,
      imgSvg: require('../../assets/font/zfj.svg')
    }
  },
  computed: {
    ...mapGetters(['info', 'getInfo'])
  },
  methods: {
    this_Flys() {
      this.$store.dispatch('planes_close')
    },
    this_Reply(){
      Hub.$emit('ChatObject',this.info[0])
      this.$store.dispatch('planes_close')
      this.$router.push('/chatList')
    },
    checkBoxModal() {
      this.mssageBox = !this.mssageBox
    },
    wantLook() {
      this.messageOpens = true
    },
    noLook() {
      this.mssageBox = false
      setTimeout(()=>{
        this.$store.dispatch('planes_close')
      },100) 
    }
  }
}
</script>

<style lang="stylus" scoped>
#getMessageMask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.3)
  .page
    width 80%
    height 65%
    line-height 1rem
    margin 2rem auto 0
    padding 0.6rem 0.5rem 1rem
    background-color #f8f8f8
    -moz-border-radius-bottomleft 1.2rem 15rem
    -moz-border-radius-bottomright 15rem 1.2rem
    -moz-border-radius-topright 0.3rem 3rem
    -webkit-border-bottom-left-radius 1.2rem 15rem
    -webkit-border-bottom-right-radius 15rem 1.2rem
    -webkit-border-top-right-radius 0.3rem 3rem
    border-bottom-left-radius 1.2rem 15rem
    border-bottom-right-radius 15rem 1.2rem
    border-top-right-radius 0.3rem 3rem
    box-shadow 0rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2)
    .message_top
      clear both
      height 2rem
    img
      border-radius 50%
      float left
      width 2rem
    .name_and_detail
      float left
      text-indent 0.4rem
      line-height 0.8rem
      padding-top 0.3rem
      h2
        font-size 0.5rem
        color #333
        position relative
        font-weight 600
        text-indent 1.2rem
        .icon
          width 1rem
          height 0.9rem
          position absolute
          left 0.2rem
          top 0
      p
        font-size 0.4rem
        color #555
  .c
    font-size 0.5rem
    color #444
    height 7.4rem
    margin 0.3rem 0
    padding 0.3rem 0.6rem
    background #eee
  .btn
    font-size 0.5rem
    width 100%
    display flex
    span
      width 50%
      flex 0 0 50%
      text-align center
      &.lot
        color #f96657
      &.get
        color #259fec
      .icon
        height 0.8rem
        vertical-align middle
        position relative
      .fj
        width 0.6rem
        fill #f96657
      .Posts
        width 0.8rem
        fill #259fec
        left 0.17rem
.acceptOpen
  opacity 0
  .wave
    position relative
    width 3.2rem
    height 3.2rem
    text-align center
    line-height 3.2rem
  .ripple .circle
    width calc(100% - 6px) /* 减去边框的大小 */
    height calc(100% - 6px) /* 减去边框的大小 */
    border 3px solid #fff
  .ripple .circle:first-child
    animation circle-opacity 2s infinite
  .ripple .circle:nth-child(2)
    animation circle-opacity 2s infinite
    animation-delay 0.3s
  .ripple .circle:nth-child(3)
    animation circle-opacity 2s infinite
    animation-delay 0.6s
  .ripple.danger
    margin 6.6rem auto 0
  .ripple.danger .circle
    border-color #f8f8f8
  .solid .circle
    width 100%
    height 100%
    background #fff
  .solid .circle:first-child
    animation circle-opacity 2s infinite
  .solid.danger
    color #eee
  .solid.danger .circle
    background #f8f8f8
  @keyframes circle-opacity
    from
      opacity 1
      transform scale(0)
    to
      opacity 0
      transform scale(1)
  .circle
    position absolute
    border-radius 50%
    opacity 0
@keyframes rotateInUpRight
  from
    -webkit-transform-origin right bottom
    transform-origin right bottom
    -webkit-transform rotate3d(0, 0, 1, -90deg)
    transform rotate3d(0, 0, 1, -90deg)
    opacity 0
  to
    -webkit-transform-origin right bottom
    transform-origin right bottom
    -webkit-transform translate3d(0, 0, 0)
    transform translate3d(0, 0, 0)
    opacity 1
@keyframes rotateOutUpRight
  from
    -webkit-transform-origin right bottom
    transform-origin right bottom
    opacity 1
  to
    -webkit-transform-origin right bottom
    transform-origin right bottom
    -webkit-transform rotate3d(0, 0, 1, 90deg)
    transform rotate3d(0, 0, 1, 90deg)
    opacity 0
.messageBoxBtn
  width 100%
  height 4.6rem
  background rgba(256, 255, 255, 0.9)
  position fixed
  bottom 0
  &.BoxBtnShow
    opacity 1
    bottom 0
    transition all 0.3s ease
  &.BoxBtnHide
    bottom -100%
    opacity 0
    transition all 0.3s ease
  h3
    text-align center
    font-size 0.6rem
    line-height 1.5rem
    border-bottom 1px solid #e8e8e8
    color #666
  span
    text-align center
    display block
    line-height 1.5rem
    font-size 0.6rem
    color #777
    border-bottom solid 1px #e8e8e8
    &.wantLook
      color #259fec
    &.notLook
      border-bottom none
      color #f96657
</style>