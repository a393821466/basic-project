<template>
  <div id="register">
    <h1>欢迎来到XX期货注册页</h1>
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
        <!-- <cube-button :inline="true" @click="getCode" :disabled="codeDisabled">{{codeMsg}}</cube-button> -->
        <input type="button" v-model="codeMsg" @click="getCode" :disabled="codeDisabled" class="getCodes" />
      </div>
      <div class="form_input password">
        <span>
          <cube-input :type="type" :eye="eye" @blur='valiDataInput' v-model="ruleFormData.password" :clearable="clearable" placeholder="请输入密码"></cube-input>
        </span>
      </div>
      <div class="form_input password">
        <span>
          <cube-input v-model="ruleFormData.InvitationCode" @blur='valiDataInput' placeholder="请输入邀请码"></cube-input>
        </span>
      </div>
      <div class="error">
        <p v-if="errorShow">
          <span>{{errors}}</span>
          <i class="error_icon cubeic-warn"></i>
        </p>
      </div>
      <cube-button :primary="true" @click="register">注册</cube-button>
      <!-- <div class="form_input confimPassword">
        <cube-input v-model="ruleFormData.confimPassword" :clearable="clearable" placeholder="确认密码"></cube-input>
        <i class="icon cubeic-warn"></i>
      </div> -->
    </div>
  </div>
</template>

<script>
import register from './register'
export default register
</script>
<style lang="stylus">
@import './register.styl'
</style>
