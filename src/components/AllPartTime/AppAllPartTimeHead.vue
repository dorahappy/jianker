<template>
    <div class="app-allparttime-head">
        <ul>
        	<li class="yo-ico">&#xf067</li>
        	<li>全部兼职</li>
        	<li @click="toSignIn">签到</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'app-allparttime-head',
    methods:{
        toSignIn(){
            this.$router.push({name: 'signIn'})
        }
    }
}
</script>

<style>

</style>