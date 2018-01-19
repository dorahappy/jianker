<template>
    <div class="app-content list">
    	
      <div>热门推荐</div>
      <ul>
        <li v-for="value in list" :key="value.id" @click="todetail(value.id)">
          <ul>
            <li :class="[value.className]">{{value.postype}}</li>
            <li>
              <h1>{{value.posname}}</h1>
              <h2><span>{{value.city}}</span><span>{{value.duration}}</span></h2>
              <h3><span>{{value.createtime}}</span><span>{{value.companytype}}</span></h3>
            </li>
            <li>365元/天</li>
          </ul>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    name:'app-content',
    data(){
    	return{
    		list:[]
    	}
	},
	methods:{
		todetail(id){
			this.$router.push({name:'detail', query: {id}})
		}
	},
	mounted(){
		fetch("/static/mock/posList.json")
			.then((response)=>response.json())
			.then((res)=>{
				this.list = res.data.subjects
				this.list.map((item, i)=>{
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
			})
	},
	
	
}
</script>
<style lang="scss" scoped>
	
</style>
