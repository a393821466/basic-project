<template>
  <layouts type="userPrivileges" title=" " :goUrl='goUrls' :bgImg='bgImgs'>
    <template slot="content">
      <div class="userPrivileges_view">
        <h1>欢迎来到XX期货</h1>
        <div class="username">
          <!-- <label>手机号码</label> -->
          <i class="icons icon_User">
            <svg-icon icon-class="user"></svg-icon>
          </i>
          <input type="text" name="user" v-model="ruleForm.username" placeholder="请输入手机号码">
        </div>
        <div class="password">
          <!-- <label>密码</label> -->
          <i class="icons icon_Pwd"><svg-icon icon-class="password"></svg-icon></i>
          <input :type="eye_type?'password':'text'" name="pwd" v-model="ruleForm.password" placeholder="请输入密码">
          <i class="icons icon_eye" @click="clickEye"><svg-icon :icon-class="eye_type?'eye_close':'eye_open'"></svg-icon></i>
        </div>
        <div class="forget_Pdw">
          <span>忘记密码?</span>
        </div>
        <div class="submit_login">
          <input type="button" @click="login_btn" name="logins" value="登录">
        </div>
      </div>
      <!-- <psw-box :isTrue='isTrue' @backFnc='backFnc'></psw-box> -->
    </template>
  </layouts>
</template>

<script>
import layouts from '@/components/layout/'
// import pswBox from '@/components/pswBox/'
export default{
  components: {
    layouts
    // pswBox
  },
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      isTrue: false,
      eye_type: true,
      bgImgs: {
        bg: require('../../../assets/images/bg.jpg'),
        positions: 'static',
        color: '#fff',
        height: '213px'
      },
      goUrls: {
        url: '/register',
        title: '随便看看'
      }
    }
  },
  methods: {
    // blur_input() {
    //   this.isTrue = true
    // },
    // backFnc(val) {
    //   this.isTrue = val.isTrue
    //   this.ruleForm.password = val.password
    // },
    login_btn () {
      if (!this.ruleForm.username || !this.ruleForm.password) {
        // Dialog.$create({
        //   type: 'alert',
        //   title: '提示',
        //   content: '手机号或密码不能为空'
        // }).show()
        // return false
      }
      // this.$store.dispatch('login', this.ruleForm)
      console.log(this.ruleForm)
    },
    clickEye () {
      this.eye_type = !this.eye_type
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './userPrivileges.styl'
</style>
