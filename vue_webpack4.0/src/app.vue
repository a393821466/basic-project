<template>
  <div id="app">
    <p @click="ceshi">点击</p>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  components: {
    MessageBox
  },
  data () {
    return {
      da: '担惊受恐'
    }
  },
  methods: {
    ceshi () {
      MessageBox('提示', '操作成功')
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
