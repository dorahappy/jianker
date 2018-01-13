<template>
    <div class="app-position">
        <app-header></app-header>
        <div class="position_content">
            <div class="search">
                <div>
                    <i class="yo-ico">&#xf067</i>
                    <input type="text" placeholder="大家都在搜：兼职" />
                </div>
            </div>
            <div class="hot_city">
                <div class="position_city">
                    <span>当前定位:</span>
                    <p>北京</p>
                    <div>
                        <img src="/static/img/position/position_break.png" alt="">
                    </div>
                </div>
                <div class="hot_city_eg" id="hot">
                    <span>热门城市:</span>
                    <div>
                        <p>北京</p><p>上海</p><p>广州</p><p>深圳</p>
                    </div>
                </div>
            </div>
            <app-position-city :id="city.text" v-for="city in cities" :key="city.id" :city="city"></app-position-city>
        </div>
        <app-side-pos :cities="cities"></app-side-pos>
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppPositionCity from './AppPositionCity'
import AppSidePos from './AppSidePos'
export default {
    name: 'app-position',
    components:{
        AppHeader, AppPositionCity, AppSidePos
    },
    data(){
    	return{
    		cities:[]
    	}
    },
   mounted(){
    fetch("http://localhost:5000/api/position/city")
        .then((response)=>response.json())
        .then((res)=>{
        	this.cities = res.data.China
        })
    }
}
</script>

<style lang="scss" scoped>
.app-position{
    .position_content{
        .search{
            margin-top: 10px;
            font-size: .16rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            padding: 0 10px;
            flex: 1;
            i{
            display: block;
            width: .2rem;
            height: .2rem;
            line-height: .25rem;
            padding-left:0.10rem;
            color: #7a7a77;
            }
            >div {
            border: 1px, #ccc solid;
            border-radius: 15px;
            height: .35rem;
            width: 100%;
            background: rgba(255, 255, 255, .9);
            display: flex;
            justify-content: space-between;
                align-items: center;
            input {
                flex: 1;
                margin-left: 10px;
                background: transparent;
                border: 0;
                color: #7a7a77;
            }
            }
        }
        position: absolute;
        top: 64px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: scroll;
        .hot_city{
            margin-top: 10px;
        .position_city{
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            background: #fff;
            font-size: 12px;
            color: #666;
            p{
                flex: 1;
                padding: 0 10px;
                color: #FD6C23;
            }
            div{
                width: 38px;
                padding-right: 24px;
                img{
                    width: 100%;
                }
            }
        }
        .hot_city_eg{
            width: 100%;
            border-top: 1px solid #e5e5e5;
            padding: 0 10px;
            font-size: 12px;
            color: #666;
            background: #fff;
            span{
                display: inline-block;
                margin-top: 7px;
            }
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                padding-right: 24px;
                height: 45px;
                p{
                    width: 33px;
                    height: 22px;
                    text-align: center;
                    line-height: 22px;
                    border-radius: 3px;
                    background: #FD6C23;
                    color: #fff;
                    margin: 0 10px;
                }
            }
        }

        }
    }
    
}
	

</style>