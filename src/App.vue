<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-listType></app-listType>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/index/AppHeader'
import AppBanner from './components/index/AppBanner'
import AppFooter from './components/index/AppFooter'
import AppListType from './components/index/AppListType'
export default {
  name: 'app',
  components:{
    AppHeader,AppBanner,AppFooter,AppListType
  }
}
</script>

<style>
#app {
  
}
</style>
