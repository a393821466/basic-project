<template>
  <div id="app">
    <router-view></router-view>
    <loading v-show="loads"></loading>
    <bg></bg>
  </div>
</template>

<script>
import bg from './components/layout/bg'
import loading from './components/loading'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['loads'])
  },
  components: {
    bg,
    loading
  }
}
</script>
<style lang="stylus">
@import './assets/styles/common.styl';
</style>
