require('./footer.styl')
export default {
  data() {
    return {
      list: [
        { title: '自选', icon: '1', styl: 'home', url: '/' },
        { title: '行情', icon: '2', styl: 'market', url: '/market' },
        { title: '交易', icon: '3', styl: 'trade', url: '/trade' },
        { title: '活动', icon: '4', styl: 'activity', url: '/activity' },
        { title: '直播', icon: '5', styl: 'live', url: '/live' }
      ]
    }
  },
  methods: {
    oLi(item) {
      this.$router.push({ path: item })
    }
  },
  render() {
    return (
      <div class="footer">
        <ul>
          {this.list.map((item, index) => (
            <li onClick={(e) => this.oLi(e, item.url)}
              class={`${item.styl} ${this.$route.path === item.url ? 'active' : ''}`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
