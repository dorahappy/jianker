<template>
    <div class="app-mine-nav">
        <div class="app-aboutme">
        	<ul>
        		<li @click="toDelivery"><p><span></span>我的投递</p><i class="yo-ico">&#xf07f;</i></li>
        		<li @click="toIntegral"><p><span></span>我的积分</p><i class="yo-ico">&#xf07f;</i></li>
        		<li @click="jumpToMineCollect()"><p><span></span>我的收藏</p><i class="yo-ico">&#xf07f;</i></li>
        	</ul>
        </div>
        <div class="app-others">
        	<ul>
        		<li @click="phone"><p><span></span>联系客服</p><i class="yo-ico">666666&#xf07f;</i></li>
        		<li @click="toInstall"><p><span></span>设置</p><i class="yo-ico">&#xf07f;</i></li>
        	</ul>
        </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
	name: 'app-mine-nav',
	methods:{
		toDelivery(){
			this.$router.push({name: 'delivery'})
		},
		toIntegral(){
			this.$router.push({name: 'integral'})
		},
		toInstall(){
			this.$router.push({name: 'install'})
		},
		jumpToMineCollect(){
    		this.$router.push({path:'/mine/minecollect'})
		},
		phone(){
			Toast('客服辞职不干了，别呼了')
		}
	}
  
}
</script>

<style lang="scss" scoped>

</style>