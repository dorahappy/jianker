<template>
    <div class="app-register">
        <div class="header">
            <i class="yo-ico">&#xf07d;</i>
            <p>注册</p>
            <i class="yo-ico">&#xf07f;</i>
        </div>
        <div class="form-reg">
            <app-form :inpTitle="'账号'" :placeHolder="'请填写账号或邮箱注册'"></app-form>
            <app-form :inpTitle="'密码'" :placeHolder="'6-20位数字或字母'"></app-form>
            <app-form :inpTitle="'确认密码'" :placeHolder="'请确认密码'"></app-form>
            <div class="argee-protocol">
                <input type="checkbox" id="argee" v-model="ischecked" />
                <label for="argee"></label>
                <p class="protocol">我已经阅读并同意<a href="#">兼客儿用户协议</a></p>
            </div>
            <input type="button" value="立即注册">
            
        </div>
    </div>
</template>

<script>
import AppForm from './AppForm'
export default {
    name: 'app-register',
    components:{
        AppForm  
    },
    data:function(){
        return {
            ischecked:false
        }
    },
    mounted(){

    },
    computed:{
        
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    .app-register{
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
        .form-reg{
            padding: 0 38px;
            margin-top: 35px;
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
                    color: #333;
                    a{
                        padding-left: 0.05rem;
                        color: #FD6C23;
                    }
                }
            }
            input[type='button']{
                width: 100%;
                height: 41px;
                background: #FD6C23;
                border: 0;
                border-radius: 5px;
                font-size: 15px;
                color: #fff;
                margin-top: 60px;
            }
            
        }
    }
</style>