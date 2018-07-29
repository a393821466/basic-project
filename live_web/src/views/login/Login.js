import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('用户名6-16位,由大小写字母和数字,-,_组成'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      remumber: this.$store.getters.getRemumber,
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.remumber === true) {
            this.$store.dispatch('update_remumber', this.remumber)
          } else {
            this.$store.dispatch('remove_remumber')
          }
          this.loading = true
          this.$store
            .dispatch('login', this.loginForm)
            .then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    checkItem(e) {
      if (e === true) {
        this.$message({
          type: 'warning',
          message: '为了您的账号安全,请勿在公共场所使用记住密码功能',
          duration: 5000
        })
      }
    }
  },
  mounted() {
    if (this.remumber === true) {
      // this.data.username = this.remumber.remumber_login_info.username
      // this.data.password = this.remumber.remumber_login_info.token.substring(
      //   0,
      //   16
      // )
    }
  }
}
