<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/index/AppHeader'
import AppBanner from './components/index/AppBanner'
import AppFooter from './components/index/AppFooter'
export default {
  name: 'app',
  components:{
    AppHeader,AppBanner,AppFooter
  }
}
</script>

<style>
#app {
  
}
</style>
