<!--
组件集成了下拉刷新,上拉加载的功能,功能有待优化.
使用方式:
<b-scroll ref="pullrefresh" :data='myData' :pulldown="isShow" :pullup="isShow" :beforeScroll='beforeScroll' @pulldown="loadData" @scrollToEnd="loadup">
  // 数据
</b-scroll>
css:类名wrapper需要给个固定高度
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content_list" :style="{'margin-top':pulldownTip.translate+'px','transition-duration':pulldownTip.time+'ms'}">
      <div v-show="pulldown" class="pulldown-tip">
        <!-- <i class="pull-icon indexicon icon-pull-down" :class="[pulldownTip.rotate]"></i> -->
        <div class="tip-content">
          <div class="loading_icon">
            <mt-spinner :size="20" v-if="isIconTrue" type="fading-circle"></mt-spinner>
            <svg-icon icon-class='next' v-else :class="pulldownTip.rotate"></svg-icon>
          </div>
          <span style="display:block;text-indent:30px">{{pulldownTip.text}}</span>
        </div>
      </div>
      <slot></slot>
      <div class="pullup" v-show="pullup">
        <div class="clear">
          <div v-show="loadingConnecting" class="fl lh30 ml10">加载中...</div>
        </div>
        <div class="list-donetip" v-if="!isLoading && isDone">
          <slot name="doneTip">没有数据了</slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from './betterScroll'
export default BScroll
</script>
<style lang='stylus'>
@import './betterScroll.styl'
</style>
