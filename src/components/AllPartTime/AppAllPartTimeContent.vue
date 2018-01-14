<template>
    <div class="app-all-parttime-content">
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
import { mapState, mapMutations, mapActions } from 'vuex'
import * as mt from '../../store/mutation-type'
import * as at from '../../store/action-type'
import bus from '../../modules/bus'
export default {
    name:'app-all-parttime-content',
    data(){
    	return{
    		listcontent:[]
    	}
    },
    computed: {
		...mapState({
			list: 'partList'
		})
    },
   mounted(){
    fetch("http://localhost:5000/api/position/list")
        .then((response)=>response.json())
        .then((res)=>{
            this.listcontent = res.data.subjects
            this.listcontent.map((item, i)=>{
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
			let type = this.$router.history.current.params.type
			if(type){
				bus.$emit('change', type)
				return ;
			}
			this.changelist(this.listcontent)
		})
		bus.$on('change', function(type){
			let typelist = []
			if(type=='all'){
				typelist=this.listcontent
				this.changelist(typelist)
				return ;
			}
			this.listcontent.forEach((item, i)=>{
				if(item.type==type){
					typelist.push(item)
				}
			})
			this.changelist(typelist)
		}.bind(this))
    },
    methods:{
		todetail(id){
			this.$router.push({name:'detail', query: {id}})
		},
		
		...mapMutations([
			mt.CHANGELIST
		]),
    }

    
}
</script>
<style lang="scss" scoped>

</style>
