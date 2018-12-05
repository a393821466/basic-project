<template>
  <transition name="move_bottom">
    <div class="password_Mask" v-show="isTrue" @click="backHandle">
      <transition name="page-move">
      <div class="pay-tool" v-show="isTrue">
        <i class="close_password" @click.stop="backHandle"></i>
        <div class="pay-tool-title border-bottom">
          <strong>请输入交易密码</strong>
        </div>
        <div class="pay-tool-content">
          <div class="pay-tool-inputs">
            <div class="item" v-for="i in items" :key="i">
              <span class="icon_dot" v-if="password[i]"></span>
            </div>
          </div>
          <div class="pay-tool-link">
            <router-link class="link" to="/getP">忘记密码？</router-link>
          </div>
        </div>
        <div class="pay-tool-keyboard">
          <ul>
            <li @click.stop="keyUpHandle($event)" v-for="val in keys" :key="val">
              {{ val }}
            </li>
            <li class="del" @click.stop="delHandle">
              <svg-icon icon-class="back_return"></svg-icon>
            </li>
          </ul>
        </div>
      </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import pswBox from './pswBox'
export default pswBox
</script>

<style lang="stylus" scoped>
@import './pswBox.styl'
</style>
