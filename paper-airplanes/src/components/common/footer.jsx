import '../../assets/styl/footer.styl'
export default {
  data() {
    return {
    }
  },
  methods: {
    get() {
      this.$store.dispatch("getMessage")
    }
  },
  render() {
    return (
      <div id="footer">
        <div class="icons req_nessage">
          <svg class="icon" aria-hidden="true">
            <use xlinkHref="#icon-emizhifeiji"></use>
          </svg>
          <p>Write</p>
        </div>
        <div class="icons get_message" on-click={this.get}>
          <svg class="icon" aria-hidden="true">
            <use xlinkHref="#icon-shou"></use>
          </svg>
          <p>Scan</p>
        </div>
        <div class="icons message_box">
          <svg class="icon" aria-hidden="true">
            <use xlinkHref="#icon-yijianxiang"></use>
          </svg>
          <p>Bottles</p>
        </div>
      </div>
    )
  }
}