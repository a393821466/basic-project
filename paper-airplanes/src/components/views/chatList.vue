<template>
  <div>
    <Header :titles="ChatData"></Header>
    <div class="chatCall">
      <p class="date">{{ChatData.createDate}}</p>
      <ul class="chatMessage">
        <li class="send">
          <img :src="ChatData.icons"/>
          <p>{{ChatData.content}}</p>
        </li>
        <li class="mys" v-for="(i,idx) in arrMessage" :key="idx">
          <img src="../../assets/images/noData.png"/>
          <p>{{i}}</p>
        </li>
      </ul>
      <div class="my_reply">
        <div class="reply_list">
          <div class="divs inputs">
            <input type="text" placeholder="想说点什么呢？" v-model="message" />
          </div>
          <div class="divs xw-chat-tool-item" >
            <img :src="emoji"/>
          </div>
          <div class="divs submits" :disabled="disabled" @click="senMessage">
            发送
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../common/header.vue'
import Hub from '../../utlis/hub.js'
export default {
  data() {
    return {
      emoji: require('../../assets/font/smileOn.svg'),
      arrMessage: [],
      message: '',
      disabled:false,
      ChatData:{}
    }
  },
  created(){
    Hub.$on('ChatObject',(data)=>{
      this.ChatData=data
    })
  },
  methods: {
    senMessage() {
      if(!this.message){
        alert("写些内容吧!")
      }else{
        this.arrMessage.push(this.message)
        this.message = ''
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
.chatCall
  width 100%
  height 100%
  position relative
  top 0
  left 0
  background #ebebeb
  .chatMessage
    width 9.2rem
    height 14.99rem
    position absolute
    top 1.4rem
    word-wrap break-word
    overflow hidden
    overflow-y auto
    left 50%
    margin-left -4.6rem
    li
      margin 0.7rem 0 0
      img
        width 1.4rem
        height 1.4rem
        border-radius 50%
        background #fff
      p
        font-size 0.45rem
        width 6.6rem
        border-radius 1rem
        background #fff
        padding 0.1rem 0.4rem
        line-height 0.8rem
    li.send
      float left
      img
        float left
        margin-right 0.3rem
      p
        float left
    li.mys
      float right
      img
        float right
        margin-left 0.3rem
      p
        float left
        // background:#a0e75a
  .my_reply
    width 100%
    height 1.4rem
    background #f4f4f6
    position absolute
    bottom 0
    border-top 1px solid #d7d7d8
    .reply_list
      padding 0 0.3rem
      display flex
      .divs
        flex 0 0 1
        input
          width 6rem
          height 1rem
          margin-top 0.2rem
          border-radius 0.1rem
          border solid 1px #ddd
          padding 0 0.3rem
          outline none
          font-size 0.5rem
          color #999
      .xw-chat-tool-item
        img
          width 0.8rem
          margin-top 0.3rem
          margin-left 0.2rem
      .submits
        width 1.6rem
        height 1rem
        background #25adf3
        font-size 0.4rem
        text-align center
        line-height 1rem
        color #eee
        border-radius 0.1rem
        margin 0.2rem 0.2rem
</style>