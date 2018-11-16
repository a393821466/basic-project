<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 22px;
  height: 22px;
  line-height:-0.15em;
  fill: currentColor;
  overflow: hidden;
}
.el-menu-item .svg-icon{
  font-size:1.3em;
}
#icon-logger{
  color:rgb(191, 203, 217);
}
.el-submenu__title .svg-icon{
  font-size:1.4em;
  margin-left:-1px;
}
</style>
