<template>
  <layouts type="market" title="行情" :goUrl='goUrls'>
    <template slot="content">
      <div>
         行情
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
      goUrls: {
        url: '/market',
        title: '交易规则'
      }
    }
  }
}
</script>
