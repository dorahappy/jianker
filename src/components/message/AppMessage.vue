<template>
    <div class="app-message">
        <AppMessageHead></AppMessageHead>
        <AppMessageContent></AppMessageContent>
    </div>
</template>

<script>
	import AppMessageHead from './AppMessageHead'
	import AppMessageContent from './AppMessageContent'
export default {
    name: 'app-message',
    components:{
    	AppMessageHead,AppMessageContent
    }
  
}
</script>

<style lang="scss" scoped>

</style>