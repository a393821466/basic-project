<template>
<transition name="page-fade" mode="out-in">
  <keep-alive>
    <router-view class="pages-view"></router-view>
  </keep-alive>
</transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      active: ''
    }
  }
}
</script>
