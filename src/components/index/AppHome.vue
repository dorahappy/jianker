<template>
    <div class="app-home">
        <app-header></app-header>
        <app-banner></app-banner>
        <app-listType></app-listType>
        <app-content></app-content>
        <transition leave-active-class="animated fadeOut">
        	<div class="app-start" v-if='isShow'></div>
        </transition>
        
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppBanner from './AppBanner'
import AppListType from './AppListType'
import AppContent from './AppContent'
export default {
    name: 'app-home',
    components:{
        AppHeader,AppBanner,AppListType,AppContent
    },
    data(){
    	return{
    		isShow:true
    	}
    },
    mounted(){
    	let that = this;
    	setTimeout(function(){
    		that.isShow = false;
    	},2000)
    }
}
</script>

<style lang="scss" scoped>
	.app-start{
	    width:100%;
	    height:100%;
	    z-index:1000;
	    position:fixed;
	    top:0;
	    left:0;
	    background:url(/static/img/index/start.png) no-repeat;
	    background-size:cover;
	}

</style>