<template>
  <div id="loading">
    <div class="mask_loading">
      <div class='sk-fading-circle'>
        <div class='sk-circle sk-circle-1'></div>
        <div class='sk-circle sk-circle-2'></div>
        <div class='sk-circle sk-circle-3'></div>
        <div class='sk-circle sk-circle-4'></div>
        <div class='sk-circle sk-circle-5'></div>
        <div class='sk-circle sk-circle-6'></div>
        <div class='sk-circle sk-circle-7'></div>
        <div class='sk-circle sk-circle-8'></div>
        <div class='sk-circle sk-circle-9'></div>
        <div class='sk-circle sk-circle-10'></div>
        <div class='sk-circle sk-circle-11'></div>
        <div class='sk-circle sk-circle-12'></div>
      </div>
      <p>加载中..</p>
    </div>
  </div>
</template>
<script>
export default {
  porps: {
    loads: {
      type: Boolean
    }
  }
}
</script>
<style scoped>
#loading{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background:rgba(0,0,0,.2)
}
.mask_loading{
  width:80px;
  height:75px;
  margin:0 auto;
  background:rgba(0,0,0,.5);
  padding-top:8px;
  position:absolute;
  top:50%;
  margin-top:-60px;
  margin-left:-40px;
  left:50%;
  border-radius:2px;
}
.sk-fading-circle {
  width: 44px;
  height: 44px;
  position: relative;
  margin:0 auto;
}
.mask_loading p{
  color:#ddd;
  line-height:30px;
  font-size:14px;
  text-align:center;
}
.sk-fading-circle .sk-circle {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-fading-circle .sk-circle:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 12%;
  height: 12%;
  background-color: #ddd;
  border-radius: 10px;
  -webkit-animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;
  animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;
}
.sk-fading-circle .sk-circle-2 {
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
}
.sk-fading-circle .sk-circle-3 {
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
}
.sk-fading-circle .sk-circle-4 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.sk-fading-circle .sk-circle-5 {
  -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
}
.sk-fading-circle .sk-circle-6 {
  -webkit-transform: rotate(150deg);
          transform: rotate(150deg);
}
.sk-fading-circle .sk-circle-7 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.sk-fading-circle .sk-circle-8 {
  -webkit-transform: rotate(210deg);
          transform: rotate(210deg);
}
.sk-fading-circle .sk-circle-9 {
  -webkit-transform: rotate(240deg);
          transform: rotate(240deg);
}
.sk-fading-circle .sk-circle-10 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}
.sk-fading-circle .sk-circle-11 {
  -webkit-transform: rotate(300deg);
          transform: rotate(300deg);
}
.sk-fading-circle .sk-circle-12 {
  -webkit-transform: rotate(330deg);
          transform: rotate(330deg);
}
.sk-fading-circle .sk-circle-2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
}
.sk-fading-circle .sk-circle-3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.sk-fading-circle .sk-circle-4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
}
.sk-fading-circle .sk-circle-5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
}
.sk-fading-circle .sk-circle-6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
}
.sk-fading-circle .sk-circle-7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
}
.sk-fading-circle .sk-circle-8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.sk-fading-circle .sk-circle-9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.sk-fading-circle .sk-circle-10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.sk-fading-circle .sk-circle-11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.sk-fading-circle .sk-circle-12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes sk-fading-circle-delay {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes sk-fading-circle-delay {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
