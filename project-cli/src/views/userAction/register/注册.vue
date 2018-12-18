<template>
  <div class="user_body">
    <header-view :titles="'注册'">
      <router-link slot="header_Right" to='/login' class="svg-container">
        <p>去登陆</p>
      </router-link>
    </header-view>
    <layouts type="userPrivileges">
      <template slot="content">
        <div class="mint-content userPrivileges_view">
          <h1 class="register_title">欢迎注册XX期货</h1>
          <div class="register_view">
            <div class="username">
              <!-- <label>手机号码</label> -->
              <i class="icons icon_User">
                <svg-icon icon-class="user"></svg-icon>
              </i>
              <input type="text" name="user" v-model="ruleForm.username" placeholder="请输入手机号码">
            </div>
            <div class="code">
              <i class="icons icon_Code">
                <svg-icon icon-class="code"></svg-icon>
              </i>
              <input type="text" name="code" v-model="ruleForm.code" placeholder="请输入验证码">
              <div class="code_img">
                <img src="../../../assets/images/bg.jpg" />
              </div>
            </div>
            <div class="phoneCode">
              <i class="icons icon_phoneCode">
                <svg-icon icon-class="code"></svg-icon>
              </i>
              <input type="text" name="phoneCode" v-model="ruleForm.phoneCode" placeholder="请输入手机验证码">
              <div class="phoneCode_btn">
                <input type="button" :disabled="disabled" @click="sendPhoneCode" name="getPhoneCode" :value="timeText">
              </div>
            </div>
            <div class="password">
              <!-- <label>密码</label> -->
              <i class="icons icon_Pwd">
                <svg-icon icon-class="password"></svg-icon>
              </i>
              <input :type="eye_type?'password':'text'" name="pwd" v-model="ruleForm.password" placeholder="请输入密码">
              <div class="eyeIcon" @click="clickEye">
                <i class="icons icon_eye">
                  <svg-icon :icon-class="eye_type?'eye_close':'eye_open'"></svg-icon>
                </i>
              </div>
            </div>
            <div class="opt">
              <span>阅读并同意
                <b>《XX期货用户服务协议》</b>
              </span>
            </div>
            <div class="submit_register">
              <input type="button" @click="register_btn" name="register" value="注册">
            </div>
          </div>
        </div>
      </template>
    </layouts>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import HeaderView from '@/components/layout/header'
import layouts from '@/components/layout/'
import { isvalidPhone } from '@/utils/validate'
export default {
  name: 'register',
  components: {
    layouts,
    HeaderView
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        code: '',
        phoneCode: '',
        checked: true
      },
      timeText: '获取验证码',
      disabled: false,
      time: 60,
      eye_type: true
    }
  },
  methods: {
    register_btn() {
      if (
        !this.ruleForm.username ||
        !this.ruleForm.password ||
        !this.ruleForm.code ||
        !this.ruleForm.phoneCode
      ) {
        Toast({
          message: '您还有未填写项',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      if (!isvalidPhone(this.ruleForm.username)) {
        Toast({
          message: '手机号错误',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      // this.$store.dispatch('login', this.ruleForm)
      console.log(this.ruleForm)
    },
    /**
     *  获取手机验证码
     */
    sendPhoneCode() {
      if (!isvalidPhone(this.ruleForm.username)) {
        Toast({
          message: '手机号码不正确',
          position: 'middle',
          duration: 2000
        })
        return
      }
      if (!this.ruleForm.code) {
        Toast({
          message: '图形验证码未填写',
          position: 'middle',
          duration: 2000
        })
        return
      }
      this.timer()
      this.disabled = true
    },
    /**
     * 倒计时器
     */
    timer: function() {
      if (this.time > 0) {
        this.time--
        this.timeText = this.time + 's后重新获取'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 60
        this.timeText = '获取验证码'
        this.disabled = false
      }
    },
    /**
     * 密码显示隐藏
     */
    clickEye() {
      this.eye_type = !this.eye_type
    }
  }
}
</script>
<style lang="stylus">
@import './register.styl'
</style>
