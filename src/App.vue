<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
  </div>
</template>

<script>
import AppHeader from './components/index/AppHeader'
import AppBanner from './components/index/AppBanner'
export default {
  name: 'app',
  components:{
    AppHeader,AppBanner
  }
}
</script>

<style>
#app {
  
}
</style>
