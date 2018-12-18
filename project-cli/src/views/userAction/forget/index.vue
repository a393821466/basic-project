<template>
  <div class="user_body">
    <header-view :dataList='dataList'></header-view>
    <layouts type="forget">
      <template slot="content">
        <div class="forget">
          忘记密码
        </div>
      </template>
    </layouts>
  </div>
</template>

<script>
import HeaderView from '../header'
import layouts from '@/components/layout/'
export default {
  name: 'forget',
  components: {
    HeaderView,
    layouts
  },
  data() {
    return {
      dataList: {
        title: '',
        url: '/',
        rightText: '随便看看'
      }
    }
  }
}
</script>

<style lang="stylus">
.forget
  height 300px
  width 100%
  background red
</style>
