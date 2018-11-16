import { isValidPhone, isvalidPssword } from '@/utils/validate.js'
export default {
  data () {
    return {
      ruleFormData: {
        phone: '',
        imgCode: '',
        phoneCode: '',
        password: '',
        // confimPassword: '',
        InvitationCode: ''
      },
      clearable: {
        visible: true,
        blurHidden: true
      },
      type: 'password',
      eye: {
        open: false,
        reverse: false
      },
      codeImg: '',
      sessionId: '',
      codeMsg: '发送验证码',
      countdown: 60,
      codeDisabled: false,
      timer: null,
      errorShow: false,
      errors: ''
    }
  },
  mounted () {
    this.getImgCode()
  },
  methods: {
    // 获取验证码
    getImgCode () {
      this.$store.dispatch('imgCode').then(rs => {
        this.codeImg = rs.result.imgData
        this.sessionId = rs.result.sessionId
      })
    },
    // 焦点验证
    valiDataInput () {
      if (!this.ruleFormData.phone ||
        !this.ruleFormData.imgCode ||
        !this.ruleFormData.phoneCode ||
        !this.ruleFormData.password ||
        !this.ruleFormData.InvitationCode) {
        this.errorShow = true
        this.errors = '信息填写不完整'
        return false
      }
      this.errorShow = false
      this.errors = ''
    },
    // 刷新图形验证码
    checkImgCode () {
      this.getImgCode()
    },
    // 注册按钮
    register () {
      const _that = this
      if (
        !this.ruleFormData.phone ||
        !this.ruleFormData.imgCode ||
        !this.ruleFormData.phoneCode ||
        !this.ruleFormData.password ||
        !this.ruleFormData.InvitationCode
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
        orgCode: this.ruleFormData.InvitationCode,
        verificationCode: this.ruleFormData.imgCode
      }
      this.$store.dispatch('showLoading')
      this.$store.dispatch('register', das).then(rs => {
        _that.$store.dispatch('hideLoading')
        if (rs.code === '200') {
          _that.regSuccessLogin({username: das.phone, password: das.password})
        }
      }).catch(err => {
        _that.$store.dispatch('hideLoading')
        return err
      })
    },
    // 注册成功后登陆
    regSuccessLogin (das) {
      const _that = this
      this.$store.dispatch('showLoading')
      this.$store.dispatch('login', das).then(rs => {
        _that.$store.dispatch('hideLoading')
        if (rs.code === '200') {
          _that.$router.push({path: '/'})
        }
      }).catch(err => {
        _that.$store.dispatch('hideLoading')
        return err
      })
    },
    // 获取手机验证码按钮
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
        type: 1
      }
      this.getPhoneCode(das)
    },
    // 获取手机验证码
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
