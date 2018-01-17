<template>
    <div id="app">
        <router-view></router-view>
        <app-footer v-if="isNavShow"></app-footer>
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
            isNavShow:true
        }
    },
    methods:{
        NavShow(){
            this.isNavShow = true
        },
        NavHide(){
            this.isNavShow = false
        },
        routeChange(){
            console.log('routeChange')
            if(this.$route.path=='/register'||this.$route.path=='/login'||this.$route.path=='/detail'||this.$route.path=='/city'||this.$route.path=='/college/publish'||this.$route.path=='/message/show'){
                this.NavHide()
            }else{
                this.NavShow()
            }
        }
    },
    created(){
        this.routeChange()
    },
    watch: {
        '$route': "routeChange"
    }
}
</script>

<style>
#app {
  
}
</style>
