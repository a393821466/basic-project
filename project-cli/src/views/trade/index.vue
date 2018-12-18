<template>
  <layouts type="trade" title="交易" :goUrl='goUrls'>
    <template slot="content">
      <div class="mint-content trade-content">
        交易
      </div>
    </template>
  </layouts>
</template>

<script>
import layouts from '@/components/layout/'
export default {
  components: {
    layouts
  },
  data() {
    return {
      props: ['userinfo'],
      goUrls: {
        url: '/transaction',
        title: '交易'
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
</style>
