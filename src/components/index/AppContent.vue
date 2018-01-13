<template>
    <div class="app-content list">
      <div>热门推荐</div>
      <ul>
        <li v-for="value in list">
          <ul>
            <li>{{value.postype}}</li>
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
   mounted(){
    fetch("http://localhost:5000/api/position/list")
        .then((response)=>response.json())
        .then((res)=>{
            this.list = res.data.subjects
            console.log(this.list)
        })
    }
}
</script>
<style lang="scss" scoped>

</style>
