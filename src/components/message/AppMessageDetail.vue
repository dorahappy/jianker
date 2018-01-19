<template>
    <div class="app-message-detail">
        <div class="write-header">
            <router-link class="yo-ico both-side" :to="{name: 'message'}" tag="i">&#xf07d;</router-link>
            <span class="both-side">{{list.pub}}</span>
			<p></p>
        </div>
		<div class="content">
			<div class="msg-content">
				<img :src="list.imgUrl" alt="">
				<div>
					<span>{{list.createtime}}</span>
					<div>{{list.lately}}</div>
				</div>
				
			</div>	
		</div>
		

    </div>
</template>

<script>
export default {
    name: 'app-message-detail',
    data(){
    	return{
    		list:{}
    	}
	},
	mounted(){
		fetch("/static/mock/message.json")
			.then((response)=>response.json())
			.then((res)=>{
				res.data.subjects.forEach(item=>{
					if(item.id===this.$route.query.id){
						this.list = item
						return ;
					}
				})

			})
	},
}
</script>

<style lang="scss" scoped>
.app-message-detail{
	.write-header{
		position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .64rem;
        display: flex;
        font-size: 17px;
        background: #FD6C23;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        i{
            font-size: 20px;
        }
        .both-side{
            padding: 0 10px;
        }
		p{
			width: .5rem;
		}
	}
	.content{
		margin-top: .64rem;
		.msg-content{
			display: flex;
			align-items: center;
			img{
				width: 51px;
				border-radius: 50%;
				margin-left: 15px;
			}
			span{
				display: block;
				padding: 15px 0;
				color: #666;
				font-size: 12px;
				text-align: center;
			}
			>div{
				display: flex;
				flex-direction: column;
				align-items: center;
				>div{
					margin-left: 15px;
					width: 185px;
					padding: 10px;
					background: #fff;
				}
			}	
		}	
	}
	
}
	

</style>