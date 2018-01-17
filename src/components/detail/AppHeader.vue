<template>
    <div class="app-header">
        <i class="yo-ico" @click="jumpTopAllwork()">&#xf07d;</i>
        <p>详情页</p>
        <i class="yo-ico">&#xf07f;</i>
    </div>
</template>
<script>
export default {
    name:'app-header',
    data(){
    	return{
    		list:[]
    	}
    },
	mounted(){
	},
	methods:{
		jumpTopAllwork(){
			this.$router.push({name:'allwork'})
		}
	}
}
</script>
<style lang="scss" scoped>
	.app-header{
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: .64rem;
        background: #fd6c23;
        line-height: .64rem;
        text-align: center;
        font-size: .22rem;
        color: #fff;
        i:nth-child(3){
            color: #fd6c23;
        } 
    }
</style>
