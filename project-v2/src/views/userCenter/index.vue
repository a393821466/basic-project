<template>
  <layouts type="user" title="用户中心" :goUrl='goUrls'>
    <template slot="content">
      <div>
        <p>11</p>
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from '@/components/layout/'
export default {
  data () {
    return {
      goUrls: {
        url: '/userCenter'
      }
    }
  },
  components: {
    layouts
  }
}
</script>

<style>
</style>
