<template>
	<div class="app-mine-collect">
		<div class="app-header">
	        <i class="yo-ico" @click="jumpTocollege()">&#xf07d;</i>
	        <p>我的收藏</p>
	        <i></i>
    	</div>
    	<div class="nav-head">
            <div :class="{active:type=='partTime'}" @click="changeType('partTime')">兼职</div>
            <div :class="{active:type=='partGoods'}" @click="changeType('partGoods')">兼职干货</div>
        </div>
         <div class="content">
            <div v-if="type==='partTime'" class="know-content">
                <AppCollectParttime></AppCollectParttime>
            </div>
            <div v-if="type==='partGoods'" class="circle-content">
                <AppCollectPartwork></AppCollectPartwork>
            </div>
        </div>
    	
	</div>
	
</template>

<script>
import AppCollectParttime from './AppCollectParttime'
import AppCollectPartwork from './AppCollectPartwork'
export default{
	name:"app-mine-collect",
	components:{
		AppCollectParttime,AppCollectPartwork 
	},
	data:function(){
		return {
			isShow:false,
			type: "partTime"
		}
	},
	
	methods:{
		
		jumpTocollege(){
			this.$router.push({name:'mine'})
		},
		changeType(type){
            this.type=type
        }
	
	}
}
</script>

<style lang="scss" scoped>
.app-mine-collect{
	height:100%;
	width:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:2 ;
	background:#f2f2f2;
	.app-header{
	    padding: 0px 10px;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    width: 100%;
	    height: .64rem;
	    background: #fd6c23;
	    line-height: .64rem;
	    text-align: center;
	    font-size: 0.17rem;
	    color: #fff;
	    i:nth-child(1){
	        font-size:22px;
	    }
	    
	}
	.nav-head{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        height:0.4rem;
        div{
            width: 50%;
            height:0.4rem; 
            text-align: center;
            line-height: .4rem;
            font-size: 15px;
        }
        .active{
            color: #FD6C23;
            border-bottom: 2px solid #FD6C23;
        }
    }
	
	
}	


</style>