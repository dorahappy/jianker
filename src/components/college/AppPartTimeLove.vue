<template>
	<div class="app-part-time-love">
		<div class="app-header">
	        <i class="yo-ico" @click="jumpTocollege()">&#xf07d;</i>
	        <p>兼职中的爱情</p>
	        <i class="fa fa-heart-o"></i>
    	</div>
    	<div class="app-content" :class="{scroll:isShow}">
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你永远是一座桥在我的视线里，在我的身边永远有你横跨的区域，只是断开了距离无法相遇…</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有一种美好的感觉，是爱情。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱情是没有目的的存在着，是没有约定的定格着，更是没有理由的束缚着。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是一名在校的大学生，2011年寒假，在火车站旁的一家超市当促销员，超市虽然不大，但是能吸引很多顾客。我和他之间的感觉就是在这样的一个场合产生了。当时的我没在意这样的一个小伙，因为来来往往的人早已经让我习惯了陌生，可是他不小心就这样的走进了我的世界里，让我的生命中又多了一位青春的过客。 </p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 火车站旁的超市东西都是非常的贵，超出了具体物体价值本身好几倍，所以我感觉这里的东西很不值得的，我虽然是个临时的促销员，在店里和店里的员工一样，只是我只负责我领域的事情，其他的就和我毫不相干了。当时他是准备回家过年，火车是晚上七点，由北京开往杭州。他来超市的时候大概是下午一点钟，穿着很朴素的衣...</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你永远是一座桥在我的视线里，在我的身边永远有你横跨的区域，只是断开了距离无法相遇…</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有一种美好的感觉，是爱情。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱情是没有目的的存在着，是没有约定的定格着，更是没有理由的束缚着。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是一名在校的大学生，2011年寒假，在火车站旁的一家超市当促销员，超市虽然不大，但是能吸引很多顾客。我和他之间的感觉就是在这样的一个场合产生了。当时的我没在意这样的一个小伙，因为来来往往的人早已经让我习惯了陌生，可是他不小心就这样的走进了我的世界里，让我的生命中又多了一位青春的过客。 </p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 火车站旁的超市东西都是非常的贵，超出了具体物体价值本身好几倍，所以我感觉这里的东西很不值得的，我虽然是个临时的促销员，在店里和店里的员工一样，只是我只负责我领域的事情，其他的就和我毫不相干了。当时他是准备回家过年，火车是晚上七点，由北京开往杭州。他来超市的时候大概是下午一点钟，穿着很朴素的衣...</p>
    	</div>
    	<div class="app-love-footer" @click='scroll()' :class="{scroll:isShow}">
    		<p>展开全部</p>
    		<i class="yo-ico">&#xf031;</i>
    	</div>
	</div>
</template>

<script>
export default{
	name:"app-part-time-love",
	data:function(){
		return {
			isShow:false
		}
	},
	methods:{
		scroll(){
			this.isShow = true
		},
		jumpTocollege(){
			this.$router.push({name:'college'})
		}
	
	}
}
</script>

<style lang="scss" scoped>
.app-part-time-love{
	box-sizing: border-box;
	height:100%;
	width:100%;
	position:fixed;
	top:0;
	left:0;
	background:#E5E5E5;
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
	    i:nth-child(3){
	    	width:0.16rem;
	    	height:0.16rem;
	       	font-size:20px;
	       	color:#fff;
	    } 
	}
	.app-content{
		flex:1;
		width:3.54rem;
		height:5.1rem;
		margin:0.07rem 0.1rem;
		p{
			min-height:0.3rem;
			line-height: 0.3rem;
			font-size:14px;
			color:#333;
			
		}
	}
	.scroll{
		flex:1;
		overflow-y:scroll;
	}
	.app-love-footer{
		display:flex;
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		height:0.8rem;
		background:#E5E5E5;
		z-index:10;
		flex-direction: column;
		font-size:16px;
		color:#FD6C23;
		align-items: center;
		P{
			padding-top:0.18rem;
		}
		i{
		
			font-size:22px;
		}
		
	}
	
}	


</style>