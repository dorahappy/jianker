<template>
    <div class="app-parttime-nav-service">
	    <div v-on:click="showClick">
	        <p v-text="partworks[selected].text"></p><i></i>
	        <ul style="display: none;" v-show="show" >
	            <li @click="select(partworkIndex)" v-for="(partwork, partworkIndex) in partworks" >{{partwork.text}} </li>
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
        	{text:'客服'},
        	{text:'短期兼职'}
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