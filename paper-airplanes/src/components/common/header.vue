<template>
  <div id="header" :class='HeadClass'>
    <span class="back" @click="backs">{{back}}</span>
    <span class="title">{{$route.name}}</span>
    <span></span>
  </div>
</template>

<script>
export default {
  props:['titles'],
  data() {
    return {
      back: '< Back',
      HeadClass: {
        getShow: false,
        getHide: true
      }
    }
  },
  methods: {
    backs() {
      this.$router.go(-1)
    }
  },
  mounted() {
    console.log(this.titles)
    if (this.$route.path == '/getMessage') {
      setTimeout(()=>{
        this.HeadClass={
          getShow: false,
          getHide: true
        }
      },5000)
    } else {
      this.HeadClass={
        getShow: true,
        getHide: false
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/header.css';
</style>