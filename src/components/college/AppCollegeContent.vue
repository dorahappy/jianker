<template>
    <div class="app-college">
        <app-header></app-header>
        <app-banner></app-banner>
        <div class="nav-head">
            <div :class="{active:type=='partTime'}" @click="changeType('partTime')">兼职干货</div>
            <div :class="{active:type=='partCircle'}" @click="changeType('partCircle')">兼职圈</div>
        </div>
        <div class="content">
            <div v-if="type==='partTime'" class="know-content">
                <app-know-content></app-know-content>
            </div>
            <div v-if="type==='partCircle'" class="circle-content">
                <app-cir-content></app-cir-content>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppBanner from './AppBanner'
import AppKnowContent from './AppKnowContent'
import AppCirContent from './AppCirContent'
export default {
    name: 'app-college',
    components:{
        AppHeader, AppBanner, AppKnowContent, AppCirContent
    },
    data:function(){
        return {
            type: "partTime"
        }
    },
    methods:{
        changeType(type){
            this.type=type
        }
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
        .know-content{
            
        }    
    }
    
}
    
</style>