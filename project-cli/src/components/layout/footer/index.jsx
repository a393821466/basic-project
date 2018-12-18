require('./footer.styl')
export default {
  name: 'footer-view',
  data() {
    return {
      list: [
        { title: '首页', icon: 'home', styl: 'home', url: '/home' },
        { title: '行情', icon: 'market', styl: 'market', url: '/market' },
        { title: '交易', icon: 'trade', styl: 'trade', url: '/trade' },
        { title: '直播', icon: 'live', styl: 'live', url: '/live' },
        { title: '我的', icon: 'my', styl: 'my', url: '/userCenter' }
      ]
    }
  },
  methods: {
    oLi(e, item) {
      this.$router.push({ path: item })
    }
  },
  render() {
    return (
      <div class="footer">
        <ul>
          {this.list.map(
            (item, index) =>
              item.url === '/trade' ? (
                <li
                  onClick={e => this.oLi(e, item.url)}
                  class={`${item.styl} ${
                    this.$route.path === item.url ? 'active' : ''
                  }`}
                >
                  <div class="trade_redio">
                    <span>
                      <p class="footer_icon tradeIcon">
                        <svg-icon icon-class={item.icon} />
                      </p>
                      {item.title}
                    </span>
                  </div>
                </li>
              ) : (
                <li
                  onClick={e => this.oLi(e, item.url)}
                  class={`${item.styl} ${
                    this.$route.path === item.url ? 'active' : ''
                  }`}
                >
                  <p class="footer_icon">
                    <svg-icon
                      icon-class={
                        this.$route.path === item.url
                          ? item.icon + '_active'
                          : item.icon
                      }
                    />
                    <div class="leaf-fill"></div>
                  </p>
                  {item.title}
                </li>
              )
          )}
        </ul>
      </div>
    )
  }
}
