<template>
    <div class="app-parttime-nav-work">
	    <div v-on:click="showClick">
	        <p v-text="partworks[selected].text"></p><i></i>
	        <ul style="display: none;" v-show="show" >
	            <li @click="select(partworkIndex, partwork.type)" v-for="(partwork, partworkIndex) in partworks" :key="partworkIndex">{{partwork.text}} </li>
	        </ul>
	    </div> 
    </div>
</template>

<script>
import bus from '../../modules/bus'
export default {
    name: 'app-parttime-nav-work',
    data:function(){
    	 return {
        show: false,
        partworks:[
          {text:'全部兼职', type:'all'},
        	{text:'长期兼职', type:'long'},
        	{text:'短期兼职', type:'short'},
        	{text:'大学兼职', type:'college'},
        	{text:'宅兼职', type:'home'}
        ],
        
        selected: 0, // 代表選中的索引
      }
    },
    methods: {
      showClick() {
        this.show = !this.show
      },
      select(index, type) {
        this.selected = index
        this.changetype(type)
      },
      changetype(type){
        bus.$emit('change', type)
      }
    }
}
</script>

<style lang="scss" scoped>


</style>