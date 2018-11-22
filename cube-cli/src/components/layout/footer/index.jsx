require('./footer.styl')
export default{
  data() {
    return {
      da: '我是底部'
    }
  },
  render() {
    return (
      <div class="footer">
        <span>{this.da}</span>
      </div>
    )
  }
}
