<template>
  <header class="app-head">
		<div class="head-shadow"></div>
		<div class="head-box">
			<div class="city" @click="toCity">
				<span>{{city}}</span>
				<i class="yo-ico">&#xf031</i>
			</div>
			
			<div class="search">
				<div>
					<i class="yo-ico">&#xf067</i>
					<input type="text" placeholder="大家都在搜：兼职" />
				</div>
			</div>
			
			<div class="daytime">
				签到
			</div>
		</div>
  </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
	name:"app-head",
	methods:{
		toCity(){
			this.$router.push({name:'city'})
		}
	},
	computed: {
		...mapState({
		city: 'city'
		})
	}
}
</script>
<style lang="scss">

</style>
