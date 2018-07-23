<template>
  <div>
    <div id="loginMask">
      <div class="login" v-if="loginBox">
        <h1>登陆</h1>
        <form>
          <input type="text" name="username" placeholder="用户名" v-model="username">
          <input type="password" name="password" placeholder="密码" v-model="password">  
        </form>
        <div class="login_btn">
          <input type="button" class="logins" @click="login" value="登陆">
          <input type="button" @click="toRegister" value="去注册">
        </div>
      </div>
      <div class="register" v-if="!loginBox">
        <form enctype="multipart/form-data">
          <img-inputer id="upload_file" v-model="icon" accept="image/*" theme="light" size="large" @onChange="handleFile" ref="inputer" />
          <input type="text" name="username" placeholder="用户名" v-model="reUsername">
          <input type="password" name="password" placeholder="密码" v-model="rePassword"> 
          <input type="password" name="comfrmpassword" placeholder="确认密码" v-model="reComfrmpassword"> 
          <input type="text" name="nicname" placeholder="昵称" v-model="nicname">  
        </form>
        <div class="register_btn">
          <input type="button" class="registers" @click="register" value="注册">
          <input type="button" value="去登陆" @click="toLogin">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import ImgInputer from 'vue-img-inputer'
import api from '../../api/apis'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loginBox: true,
      username: '',
      password: '',
      reUsername: '',
      rePassword: '',
      reComfrmpassword: '',
      nicname: '',
      icon: '',
      bigSize: 0
    }
  },
  methods: {
    login() {
      let data = { username: this.username, password: this.password }
      api
        .fetchPost('/api/login', data)
        .then(rs => {
          this.$store.dispatch('login', rs)
          if (rs.token) {
            this.$router.push({ path: 'getMessage' })
          }
        })
        .catch(er => {
          MessageBox('提示', er.data.msg)
        })
    },
    register(e, b) {
      let file = document.querySelector('img').src
      let data = {
        username: this.reUsername,
        password: this.rePassword,
        comfrmpassword: this.reComfrmpassword,
        nicname: this.nicname,
        icon: file
      }
      if (this.bigSize == 1) {
        MessageBox('提示', '图片过大，不能大于200k')
        return
      }
      api
        .fetchPost('/api/register', data)
        .then(rs => {
          if (rs.code) {
            MessageBox.confirm('注册成功,直接登录?').then(ok => {
              if (ok) {
                this.username = data.username
                this.password = data.password
                this.login()
              }
            })
          }
        })
        .catch(er => {
          MessageBox('提示', er.data.msg)
        })
    },
    handleFile(e) {
      let inputDOM = e.size
      let size = Math.floor(inputDOM / 1024)
      if (size > 200) {
        // 这里可以加个文件大小控制
        MessageBox('提示', '不能大于200k')
        this.bigSize = 1
        return false
      }
      this.bigSize = 0
    },
    toLogin() {
      this.loginBox = !this.loginBox
    },
    toRegister() {
      this.loginBox = !this.loginBox
    }
  },
  components: {
    imgInputer: ImgInputer
  }
}
</script>

<style lang="stylus" scoped>
#loginMask
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  background rgba(0, 0, 0, 0.4)
  z-index 99
.img-inputer--large
  width 2rem
  height 2rem
  border-radius 50%
  overflow hidden
  margin 0 auto
  display block
.login, .register
  margin-top 1rem
  h1
    text-align center
    font-size 0.8rem
    color #eee
    margin 1.4rem 0
input[name='username'], input[name='password'], input[name='comfrmpassword'], input[name='nicname']
  width 70%
  height 0.8rem
  text-indent 0.4rem
  margin 0.5rem auto
  display block
  border-radius 2rem
  border none
  outline none
.login_btn, .register_btn
  width 70%
  margin 0 auto
  .logins
    background deepskyblue !important
    float left !important
  .registers
    background deepskyblue !important
    float left !important
  input[type='button']
    width 45%
    height 1rem
    border-radius 1rem
    color #fff
    background crimson
    border none
    margin 0.5rem auto 0
    box-shadow none
    -webkit-appearance none
    float right
</style>