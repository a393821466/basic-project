<template>
  <layouts type="trade" title="交易" :goUrl='goUrls'>
    <template slot="content">
      <div>
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
  data () {
    return {
      goUrls: {
        url: '/transaction',
        title: '交易'
      }
    }
  }
}
</script>
