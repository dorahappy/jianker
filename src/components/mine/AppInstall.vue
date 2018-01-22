<template>
    <div class="app-integral">
        <div class="header">
            <i class="yo-ico" @click="toMine">&#xf07d;</i>
            <p>设置</p>
            <i class="yo-ico">&#xf07f;</i>
        </div>
        <div class="install">
            <ul>
                <li><p>修改密码</p><i class="yo-ico">&#xf07f;</i></li>
            </ul>
        </div>
        <p class="exit" @click="exit">退出登录</p>
    </div>
</template>

<script>
	import bus from '../../modules/bus'
export default {
    name: 'app-integral',
    components: {

    },
    data(){
        return {
            
        }
    },
    methods: {
        toMine(){
            this.$router.push({name: 'mine'})
        },
        exit(){
        	localStorage.removeItem('userinfo')
        	bus.$emit('changeisshow', null)
        	this.$router.replace({name: 'mine'})
        }
    },
    mounted(){
		
	},
  
}
</script>

<style lang="scss" scoped>

.app-integral{
    height:100%;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    background:#f2f2f2;
    .header{
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
    .install{
        background:#fff;
        ul{
            li{
                height:50px;
                margin-left:10px;
                font-size:16px;
                color:#333333;
                display: flex;;
                align-items:center;
                justify-content:space-between;
                p{
                    display: flex;;
                    span{
                        margin-right:10px;
                    }
                }
            }
            
        }
    }
    .exit{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #fff;
    }
    
}

</style>