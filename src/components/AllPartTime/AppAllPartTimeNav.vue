<template>
    <div class="app-allparttime-nav">
    	<AppPartTimeNavOption></AppPartTimeNavOption>
		<AppPartTimeNavWork></AppPartTimeNavWork>
		<AppPartTimeNavService></AppPartTimeNavService>
		<AppPartTimeNavScreen></AppPartTimeNavScreen>
    </div>
</template>

<script>
	import AppPartTimeNavOption from './AppPartTimeNavOption'
	import AppPartTimeNavWork from './AppPartTimeNavWork'
	import AppPartTimeNavService from './AppPartTimeNavService'
	import AppPartTimeNavScreen from './AppPartTimeNavScreen'
export default {
    name: 'app-allparttime-nav',
  	components:{
  		AppPartTimeNavOption,AppPartTimeNavWork,AppPartTimeNavService,AppPartTimeNavScreen
  	}
}
</script>

<style lang="scss" scoped>


</style>