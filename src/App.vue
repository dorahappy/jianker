<template>
    <div id="app">
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from './components/index/AppFooter'
import {mapstate} from 'vuex'
export default {
    name: 'app',
    components:{
      AppFooter
    },
    data:function(){
        return {

        }
    }
}
</script>

<style>
#app {
  
}
</style>
