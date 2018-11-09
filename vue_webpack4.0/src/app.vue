<template>
    <div id="app">
      {{da}}
    </div>
</template>

<script>

export default {
  data () {
    return {
      da: '担惊受恐'
    }
  }
}
</script>


<!-- scoped 只在本组件生效 -->
<style lang="stylus" scoped>
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
