<template>
    <div class="app-allparttime">
        <AppAllPartTimeHead></AppAllPartTimeHead>
        <AppAllPartTimeNav></AppAllPartTimeNav>
        <AppAllPartTimeContent></AppAllPartTimeContent>
        
    </div>
</template>

<script>
	import AppAllPartTimeHead from './AppAllPartTimeHead'
	import AppAllPartTimeNav from './AppAllPartTimeNav'
	import AppAllPartTimeContent from './AppAllPartTimeContent'
export default {
    name: 'app-allparttime',
    components:{
    	AppAllPartTimeHead,AppAllPartTimeNav,AppAllPartTimeContent
    }
}
</script>

<style>

</style>