<template>
    <div class="app-footer">
        <div class="collect">
            <input type="checkbox" id="collect" v-model="ischecked"/>
            <label for="collect"></label>
            <span>收藏</span>
        </div>
        <p>我要投递</p>
    </div>
</template>
<script>
export default {
    name:'app-footer',
    data(){
    	return{
    		ischecked:false
    	}
    },
	mounted(){
	},
	methods:{
	}
}
</script>
<style lang="scss" scoped>
	.app-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        .collect{
            width: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            input[type='checkbox'] {
                display: none;
            }
            label{
                display: inline-block;
                width: 18px;
                height: 17px;
                position: relative;
                background: url(/static/img/detail/detail_collect.png) no-repeat;
                background-size: 18px 34px;
                background-position: 0 0px;
            }
            input[type='checkbox']:checked+label {
                background-position: 0px -17px;
            }
            span{
                display: block;
                padding-left: 5px;
                font-size: 15px;
                color: #FD6C23;
            }
        }
        p{
            flex: 1;
            height: 50px;
            background: #FD6C23;
            color: #fff;
            text-align: center;
            line-height: 50px;
        }
        
    }
</style>
