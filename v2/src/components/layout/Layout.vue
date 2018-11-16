<template>
  <div class="app-wrapper">
    <div class="main-container">
      <headers></headers>
      <app-main></app-main>
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
import { Navbar, headers, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    headers,
    AppMain
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">

</style>
