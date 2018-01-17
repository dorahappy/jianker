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
        <router-view></router-view>
        <div class="app-mine-login-nav">
        	<ul>
        		<li @click="jumpToaboutmine()"><p><span></span>关于兼客儿</p><i class="yo-ico">&#xf07f;</i></li>
        		<li><p><span></span>二维码</p><i class="yo-ico">&#xf07f;</i></li>
        	</ul>
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
  		jumpToaboutmine(){
			this.$router.push({path:'/mine/aboutmine'})
		}
  		
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