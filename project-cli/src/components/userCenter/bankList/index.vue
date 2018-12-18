<template>
  <div class="ms-Action">
    <div class="ms-Action-input" @click="actionClick">
      <span class="title">{{dialogData.title}}</span>
      <span class="content_txt">{{!das.valueList?"请选择银行卡":das.valueList}}</span>
      <i>></i>
    </div>
    <transition name="over" mode="out-in">
      <div class="ms-radio" v-show="dialogData.Dialog">
        <div class="Radio_title">
          <p>{{dialogData.maskTitle}}</p>
          <i class="Radio_close" @click="radio_close">x</i>
        </div>
        <div class="bankListBox">
          <b-scroll :listenScroll="listenScroll" :isShowBox="isShowBox">
            <p class="radio_form" v-for="(item,index) in bankList" :key="'idx'+index" @click="radioClick($event,item)">
              <input type="radio" name="Storage" :value="item.bankName" :label="item.bankCode" v-model="das.valueList" />
              <label for="model1">
                <img :src="item.src" />{{item.bankName}}</label>
            </p>
          </b-scroll>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="ms-mask" v-show="dialogData.Dialog" @click.stop="clickMask">
      </div>
    </transition>
  </div>
</template>

<script>
import BankList from './bankList'
export default BankList
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
@import './bankList.styl'
</style>
