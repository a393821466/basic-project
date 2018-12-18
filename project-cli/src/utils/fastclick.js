import FastClick from 'fastclick'
FastClick.attach(document.body)

export default () => {
  FastClick.prototype.focus = function(targetElement) {
    /* eslint-disable*/
    var length
    if (
      deviceIsIOS &&
      targetElement.setSelectionRange &&
      targetElement.type.indexOf('date') !== 0 &&
      targetElement.type !== 'time' &&
      targetElement.type !== 'month'
    ) {
      length = targetElement.value.length
      targetElement.focus()
      targetElement.setSelectionRange(length, length)
    } else {
      targetElement.focus()
    }
  }
}
