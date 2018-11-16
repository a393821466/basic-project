export default{
  data () {
    return {
      rulesForm: {
        username: '13003802957',
        password: 'a123456789'
      },
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
  methods: {
    login () {
      const _that = this
      if (!this.rulesForm.username || !this.rulesForm.password) {
        _that.$createToast({
          txt: '请输入手机号或密码',
          type: 'error'
        }).show()
        return
      }
      this.$store.dispatch('showLoading')
      this.$store.dispatch('login', this.rulesForm).then(rs => {
        _that.$store.dispatch('hideLoading')
        if (rs.code === '200') {
          _that.$router.push({path: '/'})
        }
      }).catch(err => {
        _that.$store.dispatch('hideLoading')
        return err
      })
    }
  }
}
