<template>
  <div id="footer">
    <div class="icons req_message" @click="postMes">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-emizhifeiji"></use>
      </svg>
      <p>Write</p>
    </div>
    <div class="icons get_message" @click="getMes">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jushou"></use>
      </svg>
      <p>Scan</p>
    </div>
    <div class="icons message_box" @click="messageBox">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yijianxiang"></use>
      </svg>
      <p>Planes</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import hub from '../../utlis/hub'
export default {
  data() {
    return {
      planes: false
    }
  },
  mounted() {
  },
  methods: {
    postMes() {
      this.$store.dispatch('postMessage')
    },
    getMes() {
      this.$store.dispatch('getMessage')
    },
    messageBox() {
      alert('正在施工啦!!')
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/footer.css';
</style>