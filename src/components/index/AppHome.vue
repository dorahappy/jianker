<template>
    <div class="app-home">
        <app-header></app-header>
        <app-banner></app-banner>
        <app-listType></app-listType>
        <app-Content></app-Content>
        <transition leave-active-class="animated fadeOut">
        	<div class="appStart" v-if="isShow"></div>
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
    data(){
    	return{
    		isShow:false
    	}
    	
    },
    components:{
        AppHeader,AppBanner,AppListType,AppContent
    },
    beforeRouteEnter(to, from, next) {
	  next((vm)=>{
	  	if(from.name == null){
	  		vm.isShow = true
	  		setTimeout(function(){
	  			vm.isShow = false
	  		},2000)
	  	}
	  })
	}	
}
</script>

<style lang="scss" scoped>
	.appStart{
		z-index:999;
		width:100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		background:url(/static/img/index/start.png);
		background-size:cover;
	}
</style>