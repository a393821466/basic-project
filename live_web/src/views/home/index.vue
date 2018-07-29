<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      name: '张三'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
