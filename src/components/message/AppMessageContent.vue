<template>
    <div class="app-message-content">
        <div class="messageList" v-for="list in lists" :key="list.id" :class="{admission:!list.admission,noadmission:list.admission}" @click="todetail(list.id)">
        	<div class="messageImg"></div>
        	<div class="messageInfo">
        		<ul>
        			<li>{{list.pub}}</li>
        			<li>{{list.createtime}}</li>
        		</ul>
        		<p>{{list.lately}}</p>
        	</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-message-content',
    data(){
    	return{
    		lists:[]
    	}
	},
   	mounted(){
		fetch("/static/mock/message.json")
			.then((response)=>response.json())
			.then((res)=>{
				this.lists = res.data.subjects
			})
	},
	methods: {
		todetail(id){
			this.$router.push({name: 'msgdetail', query: {id}})
		}
	}
}
</script>

<style lang="scss" scoped>
.app-message-content{
	width:100%;
	position:absolute;
	top:0.64rem;
	bottom:0.5rem;
	overflow: scroll;
	.admission{
		background:#fff;
	}
	.noadmission{
		background:#FACD89;
	}
	.messageList{
		height:0.80rem;
		/*width:100%;*/
		border:1px solid transparent;
		border-radius:5px;
		margin:10px;
		display:flex;
		align-items: center;
		justify-content:space-between;
		.messageImg{
			width:0.5rem;
			height:0.5rem;
			border:1px solid #333333;
			margin-left:0.05rem;
			border-radius:50%;
			background:url(/static/img/message/img_01.jpg);
			background-size:0.5rem 0.5rem;
		}
		.messageInfo{
			flex:1;
			margin:0 0.05rem 0 0.12rem;
			ul{
				display:flex;
				align-items:center;
				justify-content:space-between;
				li:first-child{
					font-size:14px;
					color:#333;
				}
				li:last-child{
					font-size:12px;
					color:#666;
				}
			}
			p{
				width:2.34rem;
				/*height:0.12rem;*/
				font-size:12px;
				color:#666;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
			}
		}
	}
}
	

</style>