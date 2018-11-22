<template>
  <div class="banner">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          url: '',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwuD3JiwvDyDB7TxFtFz96VTEZKhJlcDOQLLXZCH7aSWX-OHGaA'
        },
        {
          url: '',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwxRkNesOUMegNIVCbymIBf35x9hCYAxe-s1c5fYZQrN9d6146Q'
        },
        {
          url: '',
          image: 'http://www.loveyd.com/upimg/allimgs/090208/03280913.jpg'
        }
      ]
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>
<style lang="stylus">
.banner
  width 100%
  .cube-slide
    border-radius 8px
    overflow hidden
    height 140px
    img
      width 100%
</style>
