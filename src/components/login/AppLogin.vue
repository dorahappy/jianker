<template>
    <div class="app-login">
        <div class="content">
            <form @submit.prevent = 'login(email,password)'>
            	 <div class="app-form">
			        <p class="inp-icon">
			            <span class="passIcon"></span>
			        </p>
			        <input id='email' v-model = "userInfo.userEmail" type="text" placeholder="请输入您的用户名"/>
			    </div>
			    <div class="app-form">
			        <p class="inp-icon">
			            <span class="passIcon"></span>
			        </p>
			        <input id='pass' v-model="userInfo.userPassword" type="password" placeholder="请输入您的密码"/>
			    </div>                       
                
            </form>
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
            <input type="submit" value="登录" @click="login('',{userEmail:userInfo.userEmail,userPassword:userInfo.userPassword})"/>
            <p class="forget-pass">忘记密码?</p>
            <ul>
                <li @click="toRegister">立即注册</li>
                <li @click="toHome">随便看看</li>
            </ul>
        </div>
    </div>
</template>

<script>
	import { Toast } from 'mint-ui'
	import { mapState, mapMutations } from 'vuex'
export default {
    name: 'app-login',
   
    data:function(){
        return {
        	userInfo:{userEmail:'',userPassword:''}
            
            
        }
    },
    computed:{
        
    },
   
    methods:{
    	...mapMutations(['setInfo']),
    	login(e,params){
    		let that = this
            var userMsg = JSON.parse(localStorage.userMsg)
      		for (var i = 0; i < userMsg.length; i++) {
        		if (userMsg[i].userEmail === params.userEmail && userMsg[i].userPassword === params.userPassword) {
          			Toast({
	           			 message: '登录成功',
	            		 duration: 1000
          			})
		       this.setInfo(params)
          		that.$router.replace({name:'mine'})
          		break
          		
        	}
      }
      if (i === userMsg.length) {
        Toast({
          message: '登录失败',
          duration: 1000
        })
      }
    },
        toHome(){
            this.$router.push({name:'home'})
        },
        toRegister(){
            this.$router.push({name:'register'})
        }
    },
    computed: {
    	...mapState(['userMsg'])
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
            .app-form{
		    width: 100%;
		    height: .41rem;
		    background: #fff;
		    border-radius: 5px;
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
		    margin-bottom: 15px;
		    .inp-icon{
		        width: 41px;
		        height: 41px;
		        background: #FD6C23;
		        border-radius: 5px 0 0 5px;
		        display: flex;
		        justify-content: center;
		        align-items: center;
		        span{
		            display: inline-block;
		            width: 22px;
		            height: 21px;
		            background: url(/static/img/login/login_icon.png) no-repeat 0 -22px;
		            background-size: 22px 44px;
		        }
		        .passIcon{
		            background-position: 0 0;
		        }
		    }
		    input{
		        width: 240px;
		        border: 0;
		        font-size: 15px;
		    }
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
            input[type='submit']{
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