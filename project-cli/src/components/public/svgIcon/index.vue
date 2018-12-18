<template>
  <svg :class="svgClass" style="width:100%;height:100%;display:block" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import SvgIcon from './svgIcon'
export default SvgIcon
</script>
