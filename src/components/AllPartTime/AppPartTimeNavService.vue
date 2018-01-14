<template>
    <div class="app-parttime-nav-service">
	    <div v-on:click="showClick">
	        <p v-text="partworks[selected].text"></p><i></i>
	        <ul style="display: none;" v-show="show" >
	            <li @click="select(partworkIndex)" v-for="(partwork, partworkIndex) in partworks" :key="partworkIndex">{{partwork.text}} </li>
	        </ul>
	    </div> 
    </div>
</template>

<script>
export default {
    name: 'app-parttime-nav-service',
    data:function(){
    	 return {
        show: false,
        partworks:[
          {text:'全部'},
        	{text:'客服'},
        	{text:'服务'},
        	{text:'销售'},
        	{text:'学生'},
        	{text:'模特'},
        	{text:'临时工'},
        	{text:'文员'}
        ],
        
        selected: 0, // 代表選中的索引
      }
    },
    methods: {
      showClick() {
        this.show = !this.show
      },
      select(index) {
        this.selected = index
      }
    }
}
</script>

<style lang="scss" scoped>


</style>