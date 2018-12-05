<template>
  <layouts type="register" title="注册" :goUrl='goUrls'>
    <template slot="content">
      <div class="swipe-wrapper">
        <h1>欢迎注册XX期货</h1>
        <cube-scroll
          ref="scroll1"
          class="scroll-list-outer-wrap">
          <div class="register_one one">
            <div class="username">
              <!-- <label>手机号码</label> -->
              <i class="icons">
                <svg-icon icon-class="user"></svg-icon>
              </i>
              <input type="text" name="user" v-model="ruleForm.username" placeholder="请输入手机号码">
            </div>
            <div class="img_code">
              <!-- <label>手机号码</label> -->
              <i class="icons">
                <svg-icon icon-class="code"></svg-icon>
              </i>
              <input type="text" name="code" v-model="ruleForm.imgCode" placeholder="输入图形验证码">
            </div>
            <div class="phone_code">
              <!-- <label>手机号码</label> -->
              <i class="icons">
                <svg-icon icon-class="phone_code"></svg-icon>
              </i>
              <input type="text" name="code" v-model="ruleForm.code" placeholder="输入手机验证码">
            </div>
            <div class="password">
              <!-- <label>密码</label> -->
              <i class="icons">
                <svg-icon icon-class="password"></svg-icon>
              </i>
              <input type="password" name="pwd" v-model="ruleForm.password" placeholder="请输入密码">
            </div>
            <div class="confim_password">
              <!-- <label>密码</label> -->
              <i class="icons">
                <svg-icon icon-class="password"></svg-icon>
              </i>
              <input type="password" name="comfrpwd" v-model="ruleForm.comfirPassword" placeholder="确认密码">
            </div>
            <div class="submit_register">
              <input type="button" @click="register_btn" name="registers" value="注册">
            </div>
          </div>
        </cube-scroll>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from '@/components/layout/'
export default {
  components: {
    layouts
  },
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        comfirPassword: '',
        imgCode: '',
        phoneCode: ''
      },
      goUrls: {
        url: '/login',
        title: '登录'
      }
    }
  },
  methods: {
    register_next () {
      console.log('正在下一步')
    },
    register_btn () {
      console.log('正在注册')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './register.styl'
</style>
