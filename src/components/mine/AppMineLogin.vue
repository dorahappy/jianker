<template>
    <div class="app-mine-login">
        <div class="app-mine-login-img">
        	<div class="userimg">
        		<img src="/static/img/message/img_01.jpg" alt="" v-if="isShow"/>
        	</div>
        	<div class="login">
        		<router-link :to="{name:'login'}" tag="span">登录</router-link>
        		<span>/</span>
        		<router-link :to="{name:'register'}" tag="span">注册</router-link>
        	</div>
        	<div class="loginInfo">{{userMsg.userEmail}}</div>
        	
        </div>
        <div class="app-mine-login-nav">
        	<dl>
        		<dt></dt>
        		<dd>关于兼客</dd>
        	</dl>
        	<dl>
        		<dt></dt>
        		<dd>二维码</dd>
        	</dl>
        	<dl>
        		<dt></dt>
        		<dd>检查更新</dd>
        	</dl>
        	<dl>
        		<dt></dt>
        		<dd>清理缓存</dd>
        	</dl>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'app-mine-login',
  	computed: mapState(['userMsg']),
  	data:function(){
  		return{
  			isShow:false
  		}
  		
  	},
  	methods:{
  		
  		
  	},
  	created(){
  		console.log(this.userMsg.userEmail)
  			if(this.userMsg.userEmail != undefined)(
  				this.isShow = true
  		)
  		
  	}
  	
}
</script>

<style lang="scss" scoped>

</style>