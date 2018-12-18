<template>
  <mt-popup v-model="changColor" position="top" class="color-panel" :closeOnClickModal="closeOnClickModal">
    <div class="color-items">
      <b-scroll :scrollX='scrollX' :isShowBox='isShowBox' :childrenClass='childrenClass'>
        <span class="color-item color-cycle " v-for="item in colorData" :style="{'backgroundColor':item.colorNumber}" :key="item.className" @click="changeSkin(item.className)">
        </span>
      </b-scroll>
    </div>
  </mt-popup>
</template>

<script>
import SetColor from './setColor'
export default SetColor
</script>

<style lang="stylus">
@import './setColor.styl'
</style>
