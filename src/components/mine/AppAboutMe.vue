<template>
	<div class="app-about-me">
		<div class="app-header">
	        <i class="yo-ico" @click="jumpTocollege()">&#xf07d;</i>
	        <p>关于我们</p>
	        <i></i>
    	</div>
    	<div class="app-login">
    		<img src="/static/img/mine/aboutme_03.jpg" alt="" />
    	</div>
    	<div class="app-content">
    		<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;兼客儿app是一个满足在校大学生，空闲上班族和企业兼职需求，并为其提供满意可靠服务的互联网兼职的垂直应用。以众多优质兼职资源为依托，为兼职者提供人性化，个性化，专业化的兼职信息服务，让兼职者和优秀企业都能及时解决个人所需达成合作。致力完善自由职业者服务交易，改善国内求职者，失业者的现状，让每一次兼职变得更便捷，更愉悦！</p>
    	</div>
    	<div class="website">
    		<p>官方网址：www.jianker.com</p>
    		<p>客服电话：66666666</p>
    	</div>
    	<div class="app-footer">
    		<p>版本号：1.1.1</p>
    	</div>
	</div>
	
</template>

<script>
export default{
	name:"app-about-me",
	data:function(){
		return {
			isShow:false
		}
	},
	methods:{
		
		jumpTocollege(){
			this.$router.push({name:'mine'})
		}
	
	}
}
</script>

<style lang="scss" scoped>
.app-about-me{
	
	height:100%;
	width:100%;
	position:fixed;
	top:0;
	left:0;
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
	.app-login{
		margin:0.5rem 1.45rem 0.3rem;
		img{
			width:0.85rem;
			height:1.27rem;
		}
	}
	.app-content{
		width:100%;
		padding-bottom:0.35rem;
		border-bottom:1px solid #E5E5E5 ;
		p{
			padding:0 0.1rem ;
			font-size:12px;
			color:#333;
			
		}
	}
	.website{
		margin:0.35rem 0.1rem;
		padding-bottom: 0.92rem;
		p{
			font-size:12px;
			color:#333;
			
		}
	}
	.app-footer{
		height:0.24rem;
		background:#f2f2f2;
		line-height: 0.24rem;
		font-size:12px;
		color:#666;
	}
	
	
	
}	


</style>