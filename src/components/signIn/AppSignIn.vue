<template>
    <div class="app-signIn">
        <div class="signIn-header">
            <ul>
                <li class="yo-ico" @click="toHome">&#xf07d;</li>
                <li>签到</li>
                <li class="fa fa-star"></li>
            </ul>
        </div>
        <div class="signIn-content">
            <p>已连续签到</p>
            <div><h1>1</h1><span>天</span></div>
            <p>连续签到会有惊喜哦</p>
        </div>
        <div class="add-point">
            我的积分
            <p>+{{point}}</p>
        </div>
        <div class="signIn-btn" @click="sign">签到</div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import * as mt from '../../store/mutation-type'
import * as at from '../../store/action-type'
import bus from '../../modules/bus'
import {Toast} from 'mint-ui'
export default {
    name:'app-signIn',
    data(){
    	return{
    		point: 5
    	}
    },
    computed: {
		...mapState({
			list: 'partList'
		})
    },
    methods:{
		toHome(){
            this.$router.push({name: 'home'})
        },
        sign(){
            Toast('你好棒棒哟，加5分')
            this.point += 5
        }
    }

    
}
</script>
<style lang="scss" scoped>
.app-signIn{
    .signIn-header{
        height:0.64rem;
        width:100%;
        background:#FD6C23;
        ul{
            height:100%;
            width:100%;
            display: flex;
            align-items:center;
            justify-content: space-between;
            padding:0 0.1rem;
            li{
                &:nth-child(1){
                    font-size:22px;
                    padding-top:5px;
                }
                &:nth-child(3){
                    font-size: 20px;
                }
                font-size:18px;
                color:#fff;
            }
        }    
    }
    .signIn-content{
        width: 100%;
        background: #fff;
        div{
            display: flex;
            justify-content: center;
            h1{
                font-size: 55px;
                line-height: 55px;
                font-weight: 100;
            }
            span{
                padding-top: 28px;
            }
        }
        p{
            line-height: 40px;
            color: #333;
            font-size: 15px;
            text-align: center;
        }
    }
    .add-point{
        display: flex;
        font-size: 15px;
        margin-top: 1px;
        color: #333;
        width: 100%;
        padding: 0 10px;
        line-height: 40px;
        background: #fff;
        p{
            padding: 0 10px;
            color: #FD6C23;
        }
    } 
    .signIn-btn{
        width: 95%;
        height: 40px;
        margin: 40px auto 0;
        line-height: 40px;
        background: #FD6C23;
        text-align: center;
        border-radius: 20px;
        color: #fff;
    }
}
</style>
