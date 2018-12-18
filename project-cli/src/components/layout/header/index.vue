<!--自定义头部-->
<template>
  <header class="header_outher">
    <section class="home_left">
      <slot name="header_Left" v-if="headerLeft"></slot>
      <div class="home_back_icon" @click='onBack' v-else>
        <i class="icons icon_Back">
          <svg-icon icon-class="left"></svg-icon>
        </i>
      </div>
    </section>
    <section class="home_center">
      <h1>{{titles}}</h1>
    </section>
    <section class="home_right entry">
      <slot name="header_Right"></slot>
    </section>
  </header>
</template>

<script>
export default {
  name: 'header-view',
  props: {
    headerLeft: {
      type: Boolean,
      default: false
    },
    titles: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      da: ''
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
@import './header.styl'
</style>
