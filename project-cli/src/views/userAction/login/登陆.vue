<template>
  <div class="user_body">
    <header-view :titles="'登陆'">
      <router-link slot="header_Right" to='/register' class="svg-container">
        <p>立即注册</p>
      </router-link>
    </header-view>
    <layouts type="userPrivileges">
      <template slot="content">
        <div class="mint-content userPrivileges_view">
          <h1></h1>
          <div class="login_view">
            <div class="username">
              <!-- <label>手机号码</label> -->
              <i class="icons icon_User">
                <svg-icon icon-class="user"></svg-icon>
              </i>
              <input type="text" name="user" v-model="ruleForm.username" placeholder="请输入手机号码">
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
            <div class="forget_Pdw">
              <router-link to="/forget">忘记密码?</router-link>
            </div>
            <div class="submit_login">
              <input type="button" @click="login_btn" name="logins" value="登录">
            </div>
          </div>
        </div>
      </template>
    </layouts>
  </div>
</template>

<script>
import HeaderView from '@/components/layout/header'
import layouts from '@/components/layout/'
export default {
  name: 'login',
  components: {
    layouts,
    HeaderView
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      eye_type: true
    }
  },
  methods: {
    login_btn() {
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
    clickEye() {
      this.eye_type = !this.eye_type
    }
  }
}
</script>

<style lang="stylus">
@import './login'
</style>
