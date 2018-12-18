<template>
  <div class="layout-page" :class="type">
    <!--路由-->
    <div class="content_wrapper">
      <section v-show="desc" class="desc">
        <slot name="desc">{{desc}}</slot>
      </section>
      <main class="content_body">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './layout.styl'
</style>
