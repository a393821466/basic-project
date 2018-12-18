import BScroll from 'better-scroll'
// import Bubble from './bubble'
import { setTimeout } from 'timers'
export default {
  name: 'BScroll',
  components: {
    // Bubble
  },
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    },
    /**
     * 如果启用loading交互，传递loading的状态
     * isShow: false
     * showIcon: false,    // 是否显示loading的icon
     * status: ''  // '正在加载...', '刷新成功', '刷新失败', ''
     */
    loadingStatus: {
      type: Object,
      default: function() {
        return {
          showIcon: false,
          status: ''
        }
      }
    },
    /**
     * 是否启用下拉刷新的交互
     */
    pulldownUI: {
      type: Boolean,
      default: false
    },
    /**
     * 是否启用上拉加载的交互
     */
    // pullupUI: {
    //   type: Boolean,
    //   default: false
    // }
    /**
     * 用于重新渲染
     */
    isShowBox: {
      type: Boolean,
      default: false
    },
    /**
     * 横向滚动需要
     */
    childrenClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loadingConnecting: false,
      isLoading: false,
      isDone: false,
      isIconTrue: false,
      pulldownTip: {
        text: '下拉刷新', // 松开立即刷新
        translate: 0,
        rotate: 'rotateRight' // icon-rotate
      }
    }
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    this.$nextTick(() => {
      if (!this.scroll) {
        /* eslint-disable */
        this.scroll = new BScroll(this.$refs.wrapper, {})
        console.log(this.scroll)
      }
    })
    const _that = this
    setTimeout(() => {
      _that._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      /* eslint-disable */
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
      })

      // 是否派发滚动事件
      if (this.listenScroll || this.pulldown || this.pullup) {
        let me = this
        this.scroll.on('scroll', pos => {
          if (this.listenScroll) {
            me.$emit('scroll', pos)
          }
          if (this.pulldown) {
            // 下拉动作
            if (pos.y > 50) {
              this.pulldownTip = {
                text: '松开刷新',
                rotate: 'rotateLeft'
              }
              this.isIconTrue = false
            } else {
              this.pulldownTip = {
                text: '下拉刷新', // 松开立即刷新
                rotate: 'rotateRight'
              }
              this.isIconTrue = false
            }
          }

          if (this.pullup) {
            if (this.scroll.y <= this.scroll.maxScrollY + 50) {
              this.loadingConnecting = true
            }
          }
        })
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            // 所有数据加载完毕后
            this.$on('infinitescroll.loadedDone', () => {
              this.isLoading = false
              this.isDone = true
            })
            // 单次请求数据加载完毕后
            this.$on('infinitescroll.finishLoad', ret => {
              this.isLoading = false
            })
            // 重新初始化
            this.$on('infinitescroll.reInit', () => {
              this.isLoading = false
              this.isDone = false
            })
            this.$emit('scrollToEnd')
          }
        })
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', pos => {
          // 下拉动作
          if (pos.y > 50) {
            // setTimeout(() => {
            // 重置提示信息
            this.pulldownTip = {
              text: '下拉刷新', // 松开立即刷新
              rotate: 'rotateRight' // icon-rotate
            }
            // }, 600)
          }
        })
        this.scroll.on('touchEnd', pos => {
          const that = this
          if (pos.y > 50) {
            that.pulldownTip = {
              text: '刷新中...',
              translate: 50
            }
            that.isIconTrue = true
            // 重新初始化
            // this.$on('pullrefresh.finishLoad', this.resetParams)
            this.$emit('pulldown', pos)
          }
        })
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    // 异步处理方法
    resetParams(istrue) {
      const that = this
      if (istrue) {
        that.pulldownTip = {
          text: '刷新成功',
          translate: 0,
          time: 1000
        }
        setTimeout(() => {
          that.isIconTrue = false
        }, 500)
      } else {
        that.pulldownTip = {
          text: '刷新太快',
          translate: 0,
          time: 1000
        }
      }
      setTimeout(() => {
        that.pulldownTip.text = '下拉刷新'
      }, 600)
    },
    // 横向滚动
    scrollContentX() {
      const conList = document.querySelector('.content_list')
      const aSpan = conList.querySelectorAll(this.childrenClass)
      let conWidth = 0
      for (let i = 0; i < aSpan.length; i++) {
        conWidth += aSpan[i].offsetWidth + 15
      }
      conList.style.width = conWidth + 'px'
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data: function() {
      setTimeout(() => {
        this.refresh()
        // this._initScroll()
      }, this.refreshDelay)
    },
    // 用于弹出或使用tab的时候初始化better-scroll滚动
    isShowBox: function() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
      if (this.scrollX) {
        this.scrollContentX()
      }
    }
  }
}
