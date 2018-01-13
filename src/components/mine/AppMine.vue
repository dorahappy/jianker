<template>
    <div class="app-mine">
        <AppMineHead></AppMineHead>
        <AppMineLogin></AppMineLogin>
        <AppMineNav></AppMineNav>
    </div>
</template>

<script>
	import AppMineHead from './AppMineHead'
	import AppMineLogin from './AppMineLogin'
	import AppMineNav from './AppMineNav'
export default {
    name: 'app-mine',
    components:{
    	AppMineHead,AppMineLogin,AppMineNav
    }
}
</script>

<style lang="scss" scoped>

</style>