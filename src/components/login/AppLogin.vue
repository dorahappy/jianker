<template>
    <div class="app-login">
        <div class="content">
            <app-form :placeHolder="'请输入您的用户名'"></app-form>
            <app-form :passIcon="'passIcon'" :placeHolder="'请输入您的密码'"></app-form>
            <div class="remember-checked">
                <div class="argee-protocol">
                    <input type="checkbox" id="argee"/>
                    <label for="argee"></label>
                    <p class="protocol">记住密码</p>
                </div>
                <div class="argee-protocol">
                    <input type="checkbox" id="login"/>
                    <label for="login"></label>
                    <p class="protocol">自动登录</p>
                </div>
            </div>
            <input type="button" value="登录">
            <p class="forget-pass">忘记密码?</p>
            <ul>
                <li @click="toRegister">立即注册</li>
                <li @click="toHome">随便看看</li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppForm from './AppForm'
export default {
    name: 'app-login',
    components:{
        AppForm
    },
    data:function(){
        return {
            
        }
    },
    computed:{
        
    },
    methods:{
        toHome(){
            this.$router.push({name:'home'})
        },
        toRegister(){
            this.$router.push({name:'register'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-login{
        height: 667px;
        background-image: url(/static/img/login/login_bg.png);
        background-size: cover; 
        overflow: hidden;
        .content{
            margin-top: 330px;
            padding: 0 38px;
            .argee-protocol{
                line-height: 18px;
                input[type='checkbox'] {
                    display: none;
                }
                label{
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    position: relative;
                    background: url(/static/img/register/checked.png) no-repeat;
                    background-position: 0 -15px;
                    background-position: 0 0px;
                }
                input[type='checkbox']:checked+label {
                    background-size: 15px 30px;
                    background-size: 15px 30px;
                }
                .protocol{
                    padding-left: 0.05rem;
                    display: inline-block;
                    font-size: 15px;
                    color: #fff;
                    a{
                        padding-left: 0.05rem;
                        color: #FD6C23;
                    }
                }
            }
            .remember-checked{
                margin-top: -3px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            input[type='button']{
                margin-top: 13px;
                width: 100%;
                height: 41px;
                background: #FD6C23;
                border: 0;
                border-radius: 5px;
                font-size: 15px;
                color: #fff;
            }
            p.forget-pass{
                width: 100%;
                height: 18px;
                line-height: 18px;
                font-size: 15px;
                color: #fff;
                text-align: left;
                margin-top: 13px;
            }
            ul{
                position: absolute;
                bottom: 10px;
                width: 100%;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 15px;
                li{
                    padding: 0 6px;
                    border-right: 1px solid #fff;
                    height: 15px;
                    line-height: 15px;
                    &:nth-child(2){
                        border-right: none;
                    }                
                }
            }
        }
    }
</style>