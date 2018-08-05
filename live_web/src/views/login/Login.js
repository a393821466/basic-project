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
        // remumber: false
      },
      remumber: this.$store.getters.getRemumber,
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      eye: 'eye',
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
        this.eye = 'eye_open'
      } else {
        this.pwdType = 'password'
        this.eye = 'eye'
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
          return false
        }
      })
    },
    checkItem(e) {
      if (e === true) {
        this.$message({
          type: 'warning',
          message: '为了您的账号安全,请勿在公共场所使用此功能',
          duration: 3000
        })
      }
    }
  },
  mounted() {
    if (this.remumber === true) {
      const info = JSON.parse(localStorage.getItem('MUMBER_INFO'))
      this.loginForm.username = info.user
      this.loginForm.password = info.token
    }
  }
}
