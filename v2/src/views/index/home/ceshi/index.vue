<template>
<div class="swipe-wrapper">
    <cube-scroll>
      <cube-swipe
          @item-click="onItemClick"
          @btn-click="onBtnClick"
          :data="swipeData">
      </cube-swipe>
    </cube-scroll>
  </div>
</template>

<script>
export default{
  data () {
    return {
      swipeData: [{
        item: {
          text: '测试1',
          value: 1
        },
        btns: [
          {
            action: 'clear',
            text: '不再关注',
            color: '#c8c7cd'
          },
          {
            action: 'delete',
            text: '删除',
            color: '#ff3a32'
          }
        ]
      }, {
        item: {
          text: '测试2',
          value: 2
        },
        btns: [
          {
            action: 'clear',
            text: '不再关注',
            color: '#c8c7cd'
          },
          {
            action: 'delete',
            text: '删除',
            color: '#ff3a32'
          }
        ]
      }, {
        item: {
          text: '测试3',
          value: 3
        },
        btns: [
          {
            action: 'clear',
            text: '不再关注',
            color: '#c8c7cd'
          },
          {
            action: 'delete',
            text: '删除',
            color: '#ff3a32'
          }
        ]
      }]
    }
  },
  methods: {
    onItemClick (item) {
      console.log('click item:', item)
    },
    onBtnClick (btn, index) {
      if (btn.action === 'delete') {
        this.$createActionSheet({
          title: '确认要删除吗',
          active: 0,
          data: [
            {content: '删除'}
          ],
          onSelect: () => {
            this.swipeData.splice(index, 1)
          }
        }).show()
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.swipe-view
    .swipe-wrapper
      position: fixed
      top: 60px
      left: 10px
      right: 10px
      bottom: 0
      background: #fff
</style>
