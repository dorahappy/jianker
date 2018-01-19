<template>
    <div class="app-header">
        <i class="yo-ico both-side">&#xf067</i>
        <p>智学堂</p>
        <span class="both-side" @click="toSignIn">签到</span>
    </div>
</template>

<script>
export default {
    name: 'app-header',
    methods:{
        toSignIn(){
            this.$router.push({name: 'signIn'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .44rem;
        display: flex;
        font-size: 17px;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        i{
            font-size: 20px;
        }
        .both-side{
            padding: 0 10px;
        }
    }
</style>