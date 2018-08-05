<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <h3 class="title">直播系统</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="eye" />
        </span>
      </el-form-item>
      <el-checkbox style="margin:0px 0px 15px 0px;" @change="checkItem" :checked='remumber' v-model='remumber'>记住密码
      </el-checkbox>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import LoginJs from './Login.js'
export default LoginJs
</script>

<style rel="stylesheet/scss" lang="scss">
@import './index.scss';
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
@import './login.scss';
</style>
