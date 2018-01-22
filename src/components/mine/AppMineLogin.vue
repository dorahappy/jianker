<template>
    <div class="app-mine-login">
    	
        <div class="app-mine-login-img">
        	<div class="userimg">
        		<img :src="'http://10.9.166.67:5000'+userinfo.icon" alt="" v-if="isShow"/>
        	</div>
        	<div class="login">
        		<router-link :to="{name:'login'}" tag="span">登录</router-link>
        		<span>/</span>
        		<router-link :to="{name:'register'}" tag="span">注册</router-link>
        	</div>
        	<div class="loginInfo" v-if="isShow">{{userinfo.username}}</div>
        	
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
import bus from '../../modules/bus'
export default {
    name: 'app-mine-login',
  	computed: mapState(['userMsg']),
  	data:function(){
  		return{
  			isShow: false,
			userinfo: ''
  		}
  		
  	},
  	methods:{
  		jumpToaboutmine(){
			this.$router.push({path:'/mine/aboutmine'})
		}
  		
  	},
	mounted(){
		bus.$on('changeisshow', function(){
			console.log('changeisshow')
			this.isShow = false
		}.bind(this))
		
		if(localStorage.userinfo){
			this.userinfo = JSON.parse(localStorage.userinfo)
			this.isShow = true
		}else{
			this.userinfo = ''
			this.isShow = false
		}
		
	},
  	
}
</script>

<style lang="scss" scoped>

</style>