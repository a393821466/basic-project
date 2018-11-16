<template>
  <section slot="home_Trend_content" class="homeTrend">
    <cube-tab-bar v-model="selectedLabel" show-slider @click="clickHandler">
      <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
      </cube-tab>
    </cube-tab-bar>
    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel v-for="item in tabs" :label="item.label" :key="item.label">
        <ul v-if="item.label!=='交易动态'">
          <li class="tab-panel-li home_commodity" v-for="(items,index) in item.InternationalFuture" :key="items+index" @click="clickHomeFutures">
              <div class="tab_left">
                <i></i>
                <div class="commodity_type">
                  <div class="commodity_name">
                    <span>美原油</span>
                    <b>交易中</b>
                  </div>
                  <span>国际爆款，首选避险产品</span>
                </div>
              </div>
              <div class="trend_update tab_right">
                <p>0.00%</p>
                <span>06:00-次日04:55</span>
              </div>
          </li>
        </ul>
        <ul v-else>
          <li>1111</li>
        </ul>
      </cube-tab-panel>
    </cube-tab-panels>
  </section>
</template>

<script>
// import { findIndex } from '@/utils/'
export default {
  data () {
    return {
      selectedLabel: '国际期货',
      tabs: [
        // {
        //   label: '国内期货',
        //   heroes: ['国内期货']
        // },
        {
          label: '国际期货',
          InternationalFuture: ['国际期货']
        },
        {
          label: '交易动态',
          list: ['交易动态']
        }
      ]
    }
  },
  mounted () {
    this.futereTrend()
  },
  methods: {
    clickHandler (item) {
      console.log(item)
    },
    // 获取期货详情
    futereTrend () {
      const _that = this
      this.$store.dispatch('homeFuture', {isApp: true}).then(rs => {
        let das = rs.result
        let d = []
        for (let i = 0; i < das.length; i++) {
          d = d.concat(das[i])
        }
        _that.tabs[0].InternationalFuture = d
        console.log(_that.tabs)
      }).catch(err => {
        return err
      })
    },
    clickHomeFutures () {
      console.log(11321)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homeTrend
  .cube-tab-bar
    background #fff
    border-top 1px solid #efefef
    line-height 32px
    .cube-tab
      div
        font-size 16px
  .cube-tab-panels
    background #fff
    border-top 1px solid #eee
.home_commodity
  padding 15px 15px
  display flex
  color #888
  .tab_left
    width 65%
    flex 0 0 65%
    i
      width 45px
      height 45px
      float left
      background red
      border-radius 50%
    .commodity_type
      padding-left 10px
      float left
      .commodity_name
        span
          font-size 18px
          float left
          line-height 22px
          color #555
        b
          display inline-block
          font-size 13px
          padding 0 4px
          margin 0 10px
          line-height 22px
          background #e8864c
          color #eee
          float left
          &.closeTrend
            background #999
      span
        font-size 13px
        clear both
        display block
        line-height 30px
  .tab_right
    width:35%
    flex:0 0 35%
    text-align right
    p
      font-size 16px
      color #2ab100
      line-height 32px
    span
      font-size 12px
      display block
</style>
