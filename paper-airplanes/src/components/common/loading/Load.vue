<template>
  <div class="loading">
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <p class="text">Exploring...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  z-index: 99;
}
.loader-inner {
  height: 3.6rem;
  margin: auto;
  position: absolute;
  top: 50%;
  margin-top:-2.6rem;
  left:50%;
  margin-left:-1.5rem;
  width: 3.2rem;
  background:rgba(0,0,0,.5);
  border-radius:0.2rem;
}
.loader-line-wrap {
  -webkit-animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
    infinite;
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  height: 1.2222rem;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  width: 3.2rem;
  margin-top: 0.23rem;
}
.loading .text{
  font-size:0.5rem;
  color:#c8c8c8;
  text-align:center;
  padding-top:2.7rem;
}
.loader-line {
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 2.8rem;
}
.loader-line-wrap:nth-child(1) {
  -webkit-animation-delay: -50ms;
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  -webkit-animation-delay: -100ms;
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  -webkit-animation-delay: -150ms;
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  -webkit-animation-delay: -200ms;
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  -webkit-animation-delay: -250ms;
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  border-color: hsl(0, 80%, 60%);
  height: 2.1rem;
  width: 2.1rem;
  top: 0.2rem;
}
.loader-line-wrap:nth-child(2) .loader-line {
  border-color: hsl(60, 80%, 60%);
  height: 1.6rem;
  width: 1.6rem;
  top: 0.4rem;
}
.loader-line-wrap:nth-child(3) .loader-line {
  border-color: hsl(120, 80%, 60%);
  height: 1.1rem;
  width: 1.1rem;
  top: 0.6rem;
}
.loader-line-wrap:nth-child(4) .loader-line {
  border-color: hsl(180, 80%, 60%);
  height: 0.666rem;
  width: 0.6666rem;
  top: 0.8rem;
}
/* 
.loader-line-wrap:nth-child(5) .loader-line {
  border-color: hsl(240, 80%, 60%);
  height: 34px;
  width: 34px;
  top: 35px;
} */

@-webkit-keyframes spin {
  0%,
  15% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0%,
  15% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>