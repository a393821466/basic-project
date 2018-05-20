<template>
  <div class="HomeRouters">
    <!-- <div class="oheader"  v-if="$route.path!=='/getMessage'"></div> -->
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <loading v-if="loading"></loading>
    <Bg/>
  </div>
</template>

<script>
import Vue from 'vue'
import Loading from './common/loading/Load.vue'
import Bg from './common/bg.jsx'
import Header from './common/header.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  computed: {
    ...mapState({
      direction: state => state.mutations.direction
    }),
    ...mapGetters(['loading'])
  },
  components: {
    Bg,
    Header,
    loading: Loading
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false;
    window.scrollTo(0, 0);
    next()
  }
}
</script>

<style lang='stylus' scoped>
.child-view
    position: absolute
    width:100%
    height:100%
    top: 0
    transition: all .3s cubic-bezier(.55,0,.1,1)
  .header
    z-index:99
  .header,.oheader
    width:100%
    background:rbga(255,255,255,.8)
    position:fixed
    top:0
    left:0
  .oheader
    height:1.4rem
    z-index:98
  .slide-left-enter, .slide-right-leave-active
    opacity: 0
    -webkit-transform: translate(300px, 0)
    transform: translate(300px, 0)
    z-index:99
  .slide-left-leave-active, .slide-right-enter
    opacity: 0
    -webkit-transform: translate(-300px, 0)
    transform: translate(-300px, 0)
    z-index:99
  .oLoaDing
    top: 50%
    margin-top: -10px
    left: 50%
    margin-left: -28px
    position: fixed
    z-index:998
</style>