<template>
    <div class="app-form">
        <p class="inp-title">{{inpTitle}}</p>
        <input type="text" :placeholder="placeHolder"/>
    </div>
</template>

<script>
export default {
    name: 'app-form',
    props:['inpTitle', 'placeHolder'],
    mounted(){

    },
    computed:{
        
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    .app-form{
        width: 100%;
        height: .41rem;
        background: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 19px;
        .inp-title{
            width: .91rem;
            height: .41rem;
            font-size: 15px;
            padding: 0 11px;
            line-height: .41rem;
            color: #333;
            text-align: left;
        }
        input{
            width: 240px;
            border: 0;
        }
    }
</style>