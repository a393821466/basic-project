<template>
  <div id="forget">
    <h1></h1>
    <div class="ruleForm">
      <div class="form_input phone">
        <span>
          <cube-input v-model="ruleFormData.phone" @blur='valiDataInput' :clearable="clearable" placeholder="请输入手机号"></cube-input>
        </span>
      </div>
      <div class="form_input imgCode">
        <span class="code">
          <cube-input v-model="ruleFormData.imgCode" @blur='valiDataInput' placeholder="请输入图形验证码"></cube-input>
        </span>
        <i class="codeClass" @click="checkImgCode"><img :src="'data:image/png;base64,'+codeImg" alt="" class="codeImg"></i>
      </div>
      <div class="form_input phoneCode">
        <span class="code">
          <cube-input v-model="ruleFormData.phoneCode" @blur='valiDataInput' placeholder="请输入手机验证码"></cube-input>
        </span>
        <input type="button" v-model="codeMsg" @click="getCode" :disabled="codeDisabled" class="getCodes" />
      </div>
      <div class="form_input password">
        <span>
          <cube-input :type="type" :eye="eye" @blur='valiDataInput' v-model="ruleFormData.password" :clearable="clearable" placeholder="请输入密码"></cube-input>
        </span>
      </div>
      <div class="error">
        <p v-if="errorShow">
          <span>{{errors}}</span>
          <i class="error_icon cubeic-warn"></i>
        </p>
      </div>
      <cube-button :primary="true" @click="forget">提交</cube-button>
      <!-- <div class="form_input confimPassword">
        <cube-input v-model="ruleFormData.confimPassword" :clearable="clearable" placeholder="确认密码"></cube-input>
        <i class="icon cubeic-warn"></i>
      </div> -->
    </div>
  </div>
</template>

<script>
import { isValidPhone, isvalidPssword } from '@/utils/validate.js'
export default {
  data () {
    return {
      ruleFormData: {
        phone: '',
        imgCode: '',
        phoneCode: '',
        password: ''
      },
      codeImg: '',
      sessionId: '',
      codeMsg: '发送验证码',
      countdown: 60,
      codeDisabled: false,
      timer: null,
      errorShow: false,
      errors: '',
      type: 'password',
      eye: {
        open: false,
        reverse: false
      },
      clearable: {
        visible: true,
        blurHidden: true
      }
    }
  },
  mounted () {
    this.getImgCode()
  },
  methods: {
    // 忘记密码
    forget () {
      const _that = this
      if (
        !this.ruleFormData.phone ||
        !this.ruleFormData.imgCode ||
        !this.ruleFormData.phoneCode ||
        !this.ruleFormData.password
      ) {
        this.errorShow = true
        this.errors = '信息填写不完整'
        return false
      } else if (!isValidPhone(this.ruleFormData.phone)) {
        this.errorShow = true
        this.errors = '手机号码不正确'
        return false
      } else if (!isvalidPssword(this.ruleFormData.password)) {
        this.errorShow = true
        this.errors = '密码格式不正确'
        return false
      } else {
        this.errorShow = false
        this.errors = ''
      }
      let das = {
        phone: this.ruleFormData.phone,
        password: this.ruleFormData.password,
        verificationCode: this.ruleFormData.phoneCode
      }
      this.$store.dispatch('showLoading')
      this.$store
        .dispatch('forgetPassword', das)
        .then(rs => {
          _that.$store.dispatch('hideLoading')
          if (rs.code === '200') {
            this.$createDialog({
              type: 'confirm',
              icon: 'cubeic-alert',
              title: '提示',
              content: '修改成功,去登录?',
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
                _that.$router.push({path: '/login'})
              },
              onCancel: err => {
                return err
              }
            }).show()
          }
        })
        .catch(err => {
          _that.$store.dispatch('hideLoading')
          return err
        })
    },
    // 焦点验证
    valiDataInput () {
      if (
        !this.ruleFormData.phone ||
        !this.ruleFormData.imgCode ||
        !this.ruleFormData.phoneCode ||
        !this.ruleFormData.password
      ) {
        this.errorShow = true
        this.errors = '信息填写不完整'
        return false
      }
      this.errorShow = false
      this.errors = ''
    },
    // 图形验证码点击
    checkImgCode () {
      this.getImgCode()
    },
    // 图形验证码获取
    getImgCode () {
      this.$store.dispatch('imgCode').then(rs => {
        this.codeImg = rs.result.imgData
        this.sessionId = rs.result.sessionId
      })
    },
    // 手机验证码获取
    getCode () {
      if (!this.ruleFormData.phone || !isValidPhone(this.ruleFormData.phone)) {
        this.errorShow = true
        this.errors = '手机号码不正确'
        return false
      } else {
        this.errorShow = false
        this.errors = ''
      }
      if (this.ruleFormData.imgCode.length < 4) {
        this.errorShow = true
        this.errors = '图形验证码不正确'
        return false
      } else {
        this.errorShow = false
        this.errors = ''
      }
      let das = {
        phone: this.ruleFormData.phone,
        imgCode: this.ruleFormData.imgCode,
        sessionId: this.sessionId,
        type: 2
      }
      this.getPhoneCode(das)
    },
    // 获取验证码方法
    getPhoneCode (da) {
      this.$store
        .dispatch('getPhoneCode', da)
        .then(rs => {
          if (rs.code === '200') {
            this.countTime()
          }
        })
        .catch(err => {
          return err
        })
    },
    // 计时器
    countTime () {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--
            if (this.countdown !== 0) {
              this.codeDisabled = true
              this.codeMsg = '重新发送(' + this.countdown + ')'
            } else {
              clearInterval(this.timer)
              this.codeMsg = '获取验证码'
              this.countdown = 60
              this.timer = null
              this.codeDisabled = false
            }
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#forget
  width 90%
  margin 0 auto
  h1
    padding 20px 0 24px
  .form_input
    margin-bottom 10px
    span
      position relative
      display block
      &.code
        width 70%
        display inline-block
    .getCodes
      font-size 12px
      text-align center
      line-height 35px
      color #eee
      background #4a4c5b
    .getCodes, .codeClass
      width 25%
      height 35px
      position relative
      top 5px
      display inline-block
      vertical-align middle
      img
        width 100%
        height 100%
  .error
    width 100%
    margin-bottom 10px
    p
      width 100%
      height 30px
      background #e64340
      position relative
      opacity 0.6
      .error_icon
        position absolute
        top 50%
        margin-top -8px
        font-size 16px
        left 10px
        // color #a41e08
        color #ddd
      span
        font-size 14px
        line-height 30px
        color #eee
        text-align center
        display block
</style>
