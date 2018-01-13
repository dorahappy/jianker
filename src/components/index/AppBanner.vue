<template>
    <!--<div class="app-banner swiper-container">
        <div class="swiper-wrapper banner">
            <div class="swiper-slide banner-item" v-for="banner of banners" :key="banner.id">
                <img :src="banner.imgUrl" :alt="banner.title" :title="banner.title">
            </div>
        </div>
        <div class="swiper-pagination">
            
        </div>
    </div>-->
    <div class="app-banner">
    	<mt-swipe :auto="2000">
			  <mt-swipe-item v-for="banner of banners" :key="banner.id">
				   <img :src="banner.imgUrl" :alt="banner.title" :title="banner.title">
			  </mt-swipe-item>
		 </mt-swipe>
    </div>

</template>
<script>
//import Swiper from 'swiper'
import {Swipe, SwipeItem} from 'mint-ui'
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
     components: {
	  'mt-swipe': Swipe,
	  'mt-swipe-item': SwipeItem
 	},
}
</script>
<style lang='scss' scoped>
.app-banner{
    width: 100%;
    height: 1.83rem;
    background: #fff;
    .mint-swipe-indicator.is-active{
    	background:#fff;
    }
    img{
    	width:100%;
    	height:100%;
    }
}
</style>
