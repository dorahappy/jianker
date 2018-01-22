<template>
    <div class="app-register">
        <div class="header">
            <i class="yo-ico" @click="jumpToMine()">&#xf07d;</i>
            <p>注册</p>
            <i class="yo-ico">&#xf07f;</i>
        </div>
        <form @submit.prevent = 'function(){}' class="form-reg">
	        <div class="app-form">
	        	<label for="email" class="inp-title">账号</label>
	        	<input v-model="user.email" @blur.prevent="table_judge1(user.email)"  type="text" id="email" placeholder="请输入账号或邮箱地址"/>
		    </div>
		     <div class="app-form">
	        	<label for="password" class="inp-title">密码</label>
	        	<input v-model="user.password1" @blur.prevent="table_judge2(user.password1)" type="password" id="password" placeholder="6-20位数字或字母"/>
		    </div>
		    <div class="app-form">
	        	<label for="passto" class="inp-title">确认密码</label>
	        	<input v-model="user.password2" @blur.prevent="table_judge3(user.password2)" type="password" id="passto" placeholder="请确认密码"/>
		    </div>
		    <span v-show="user.isShow">{{user.errormessage}}</span>
	    	 <div class="argee-protocol">
                <input type="checkbox" id="argee" v-model="user.ischecked" @click="table_judge4(user.ischecked)" />
                <label for="argee"></label>
                <router-view></router-view>
                <p class="protocol">我已经阅读并同意<a @click="jumpToAgree()">兼客儿用户协议</a></p>
            </div>
            <input type="submit" @click="registerInfo({tel:user.email,password:user.password1})" value="立即注册">
	    </form>
    </div>
</template>

<script>

import axios from 'axios'
import {Toast} from 'mint-ui'
export default {
    name: 'app-register',
   
    data:function(){
        return {
        	user:{ischecked:false,email:'',password1:'',password2:'',isShow:false,errormessage:'',argee:''},
            
        }
    },
    
    methods:{
    	jumpToAgree(){
    		this.$router.push({path:'/register/agree'})
    	},
    	jumpToMine(){
    		this.$router.push({name:'mine'})
    	},
    	registerInfo(params){
    		let arr = localStorage.userMsg ? JSON.parse(localStorage.userMsg) : []
	          arr.push(params)
	          localStorage.userMsg = JSON.stringify(arr)
	          this.register(params)
    	},
      table_judge1(user){
          let reg = /(^\w+(\.[a-z]{2,3})?(\.[a-z]{2,3})$)|([0-9]{6,11})$/
          
          if(reg.test(this.user.email)){
	              this.user.isShow=false
            }else{
            	if(this.user.email == ''){
	         		this.user.isShow=true
                	this.user.errormessage='注册账号不能为空哦'
            	}else{
	         		this.user.isShow=true
                	this.user.errormessage='邮箱格式有误'
            	}
                
            }
            
        },
         table_judge2(user){
            let reg = /^[a-z,A-Z,0-9]{6,20}$/
            if(reg.test(this.user.password1)){
                this.user.isShow=false
            }else{
            	console.log(this.user.password1)
            	if(this.user.password1 == ''){
            		this.user.isShow=true
                	this.user.errormessage='密码不能为空哦'
            	}else{
            		this.user.isShow=true
                	this.user.errormessage='密码格式有误'
            	}
               
            }
        },
         table_judge3(user){
            if(this.user.password2 == this.user.password1){
            	this.user.isShow=false

            }else{
                if(this.user.password2 == ''){
                	this.user.isShow=true
                	this.user.errormessage='确认密码不能为空'
                }else{
                	this.user.isShow=true
                	this.user.errormessage='请输入一致的密码'
                }
            }
        },
        table_judge4(user){
        	console.log(this.user.ischecked)
            if(this.user.ischecked == false){
            	this.user.isShow=false
            }else{
            	this.user.isShow=true
                this.user.errormessage='还未同意用户协议'
            }
        },
       register(user){
            let that =this
//          if(that.user.password1==false||that.user.email==false||that.user.ischecked==false){
//              return false
//      	}
            axios.post('http://localhost:5000/user/api/user/register', user).then((res)=>{
                console.log(111, res)
                if(res.data.State){
                    Toast(res.data.errmsg)
                    that.$router.replace({name:'login'}) 
                }else{
                    Toast(res.data.errmsg)
                }
            })
            
        }
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
		    .app-form{
		        width: 100%;
		        height: .41rem;
		        background: #fff;
		        border-radius: 5px;
		        display: flex;
		        justify-content: space-around;
		        align-items: center;
		        margin-bottom: 19px;
		        .inp-title{
		            width: 1rem;
		            height: .41rem;
		            font-size: 15px;
		            padding: 0 11px;
		            line-height: .41rem;
		            color: #333;
		            text-align: left;
		        }
		        input{
		            width: 240px;
		            border: 0;
		        }
		    }
		    span{
		    	position:fixed;
		    	top:2.6rem;
		    	left:0.38rem;
		    	color: #fd6c23;
		    }
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
            input[type='submit']{
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