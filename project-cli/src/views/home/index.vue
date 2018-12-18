<template>
  <layouts type="home" title="首页">
    <template slot="content">
      <section class="mint-content middle-content" ref="mfct">
        <banner-con :banner='banner'></banner-con>
      </section>
    </template>
  </layouts>
</template>
<script>
import layouts from '@/components/layout/'
import BannerCon from './banner'
export default {
  name: 'Home',
  components: {
    layouts,
    BannerCon
  },
  data() {
    return {
      banner: [
        {
          link: 'http://baidu.com',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544708395343&di=3c361f9a82848de76e059f58577bcc88&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F91529822720e0cf3d1074f8f0c46f21fbf09aad5.jpg'
        },
        {
          link: 'http://baidu.com',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1544698336&di=c7b3913ac294331cbdeb6fc2f9072099&src=http://img.zcool.cn/community/013d49597b53e4a8012193a37188e3.jpg'
        },
        {
          link: 'http://baidu.com',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1544698336&di=b7ad5ec107808d5416a18e23407ee162&src=http://pic1.16pic.com/00/07/65/16pic_765645_b.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.middle-content
  padding 0 15px
</style>
