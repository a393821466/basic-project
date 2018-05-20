<template>
  <div>
    <Header></Header>
    <div class="common">
      <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <getmessage v-if="getInfo"></getmessage>
      </transition>
      <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="noDataMask" v-if="nodata" @click="noDataClick">
          <span class="noData"><img :src="noDataIcon" /><p>捡到一毛</p></span>
        </div>
      </transition>
    </div>
    <transition name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <Footer v-show="footers"></Footer>
    </transition>
  </div>
</template>

<script>
import api from '../../api/apis.js'
import GetMessage from '../pages/getMessage.vue'
import Footer from '../common/footer.vue'
import { mapGetters } from 'vuex'
import Header from '../common/header.vue'
export default {
  data() {
    return {
      msgOpen: 0,
      noDataIcon: require('../../assets/font/noData.svg')
    }
  },
  computed: {
    ...mapGetters(['getInfo', 'footers', 'nodata'])
  },
  watch: {
    nodata: function(newVal, oldVal) {
      if (newVal) {
        setTimeout(() => {
          this.$store.dispatch('nodeData')
        }, 20000)
      }
    }
  },
  methods: {
    noDataClick() {
      this.$store.dispatch('nodeData')
    }
  },
  mounted(){
  },
  components: {
    Footer,
    getmessage: GetMessage,
    Header
    // planes: Planes
  }
}
</script>

<style lang="stylus" scoped>
.noDataMask
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  background rgba(0, 0, 0, 0.3)
  z-index 999
  .noData
    width 2rem
    height 2rem
    mragin 0 auto
    position absolute
    top 50%
    margin-top -1.4rem
    left 50%
    margin-left -1rem
    img
      width 100%
      height 100%
      display block
    p
      font-size 0.47rem
      color #eee
      text-align center
      line-height 0.8rem
.animated
  animation-duration: 0.3s
</style>