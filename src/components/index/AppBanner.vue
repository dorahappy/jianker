<template>
    <div class="app-banner swiper-container">
        <div class="swiper-wrapper banner">
            <div class="swiper-slide banner-item" v-for="banner of banners" :key="banner.id">
                <img :src="banner.imgUrl" :alt="banner.title" :title="banner.title">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name:'app-banner',
    data:function(){
        return {
            banners:[
                {id:1,imgUrl:'../../../static/images/banner1.png',title:'轮播图1'},
                {id:2,imgUrl:'../../../static/images/banner2.png',title:'轮播图2'},
                {id:3,imgUrl:'../../../static/images/banner3.png',title:'轮播图3'},
                {id:4,imgUrl:'../../../static/images/banner4.png',title:'轮播图4'}
            ]
        }
    },
    mounted(){
        new Swiper('.app-banner',{
            autoplay:true,
            loop:true,
            disableOnInteraction:false
        })
    },
}
</script>
<style lang='scss' scoped>

</style>
