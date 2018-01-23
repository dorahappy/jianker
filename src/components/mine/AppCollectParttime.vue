<template>
	<div class="app-collect-parttime">
		<div class="content" v-show='isShow'>
			<ul>
		       <li v-for="coll in collect" :key="coll.id" @click="todetail(coll.id)">
		          <ul>
		            <li :class="[coll.className]">{{coll.postype}}</li>
		            <li>
		              <h1>{{coll.posname}}</h1>
		              <h2><span>{{coll.city}}</span><span>{{coll.duration}}</span></h2>
		              <h3><span>{{coll.createtime}}</span><span>{{coll.companytype}}</span></h3>
		            </li>
		            <li>365元/天</li>
		          </ul>
		       </li>
	      </ul>
		</div>
	</div>
	
</template>

<script>
import bus from '../../modules/bus'
import {mapState} from 'vuex'
export default{
	name:"app-collect-parttime",
	data:function(){
		return{
			isShow:false
		}
	},
	computed:{
		...mapState(['collect'])
	},
	methods:{
		todetail(id){
            this.$router.push({name: 'detail', query: {id}})
        }
	}
	,
	created(){
		if(this.collect.length != 0){
				this.isShow = true
			}
		this.collect.map((item, i)=>{
					switch(item.postype){
						case "客服":
							item.className="custom"
							break;
						case "其他":
							item.className="anything"
							break;
						case "服务业":
							item.className="serve"
							break;
						case "学生":
							item.className="stu"
							break;
						case "销售":
							item.className="sell"
							break;
						case "模特":
							item.className="model"
							break;
						case "临时工":
							item.className="part"
							break;
						case "文员":
							item.className="clerk"
							break;
						default:
							item.className=""
							break;
					}
				})
	}
	
}
</script>

<style lang="scss" scoped>
.app-collect-parttime{
	.content{
		height:0.87rem;
		width:3.55rem;
		background:#fff;
		margin:0.1rem;
		
	}
}
</style>