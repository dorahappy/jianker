<template>
    <div id="app">
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from './components/index/AppFooter'
export default {
    name: 'app',
    components:{
      AppFooter
    }
}
</script>

<style>
#app {
  
}
</style>
