<template>
    <div class="app-college">
        <app-header></app-header>
        <app-banner></app-banner>
        <div class="nav-head">
            <div class="active">兼职干活</div>
            <div>兼职圈</div>
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
            contentList:[
                {
                    id:1,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:2,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:3,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:4,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:5,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:6,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:7,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:8,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:9,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:10,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:11,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:12,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                },
                {
                    id:13,
                    imgUrl:'/static/img/college/college_port.png',
                    trendTitle:'兼职中的春天',
                    time:'2017年12月30日',
                    trend:'你永远是一座桥在我的视线里,在我的身边永远有你横跨的区域,只是断开了区域无法相遇,我们在一起'
                }
            ]
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
    }
}
    
</style>