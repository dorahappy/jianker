<template>
    <div class="app-college">
        <app-header></app-header>
        <app-banner></app-banner>
        <div class="nav-head">
            <div :class="{active:type=='part-time'}">兼职干货</div>
            <div :class="{active:type=='part-circle'}">兼职圈</div>
        </div>
        <div class="content">
            <app-content v-for="item of contentList" :key="item.id" :item="item"></app-content>
        </div>
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppBanner from './AppBanner'
import AppContent from './AppContent'
export default {
    name: 'app-college',
    components:{
        AppHeader, AppBanner, AppContent
    },
    data:function(){
        return {
            contentList: [],
            type: "part-time"
        }
    },
    mounted(){
        fetch("http://localhost:5000/api/position/ptCircle")
            .then((response)=>response.json())
            .then((res)=>{
                this.contentList = res.data.contentList
            })
    }
}
</script>

<style lang="scss" scoped>
.app-college{
    .nav-head{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        height: 31px;
        div{
            width: 50%;
            height:29px; 
            text-align: center;
            line-height: .29rem;
            font-size: 15px;
        }
        .active{
            color: #FD6C23;
            border-bottom: 2px solid #FD6C23;
        }
    }
    .content{
        position: absolute;
        top: 213px;
        left: 0;
        bottom: 50px;
        padding: 0 10px;
        overflow: scroll;
    }
}
    
</style>