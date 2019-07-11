<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { Getter, Mutation } from 'vuex-class'

@Component
export default class HelloWorld extends Vue {
  //data
  msg: string = 'wkks'
}
</script>

<style scoped>
</style>
