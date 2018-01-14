<template>
    <div class="app-parttime-nav-option">
		<div v-on:click="showClick">
	        <p v-text="options[selected].text"></p><i></i>
	        <ul style="display: none;" v-show="show" >
	            <li @click="select(optionIndex)" v-for="(option, optionIndex) in options" :key="optionIndex">{{option.text}} </li>
	        </ul>
	    </div> 
    </div>
</template>

<script>
export default {
    name: 'app-parttime-nav-option',
    data:function(){
    	 return {
        show: false,
        options: [
          { text: '北京' },
          { text: '上海' },
          { text: '杭州' },
          { text: '天津' }
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