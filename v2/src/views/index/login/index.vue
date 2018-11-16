<template>
  <div id="login">
    <h1>XX期货登录</h1>
    <cube-input type="text" v-model="rulesForm.username" :clearable="clearable" placeholder="请输入手机号"></cube-input>
    <cube-input  :type="type" :eye="eye" v-model="rulesForm.password" :clearable="clearable" placeholder="请输入密码"></cube-input>
    <cube-button :primary="true" @click="login">登陆</cube-button>
    <router-link to='/register'>
      <p class="register_back">快速注册</p>
    </router-link>
    <router-link to='/forget'>
      <p class="forget_pwd">忘记密码?</p>
    </router-link>
  </div>
</template>

<script>
import login from './login'
export default login
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import './login.styl'
</style>
