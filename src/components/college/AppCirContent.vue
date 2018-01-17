<template>
    <div class="app-cir-content">
        <div  v-for="item of contentList" :key="item.id" class="content">
            <div class="user_info"><img :src="item.imgUrl" alt=""></div>
            <div class="list_content">
                <div class="content_title">
                    <h1>{{item.trendTitle}}</h1>
                    <span>{{item.time}}</span>
                </div>
                <div class="trend_msg">
                    <div class="msg_text">{{item.trend}}</div>
                </div>
            </div>
        </div>
        <router-link :to="{name:'publish'}" tag="div" class="write-cir">
            <img src="/static/img/college/college_write.png" alt="">
        </router-link>
    </div>
</template>

<script>
import bus from '../../modules/bus'
export default {
    name: 'app-cir-content',
    data:function(){
        return {
            contentList: []
        }
    },
    mounted(){
        fetch("http://localhost:5000/api/user/partCir")
            .then((response)=>response.json())
            .then((res)=>{
                this.contentList = res.data.contentList
            })
    },
    mouted(){
        bus.$on('addPartCir', function(cir){
            let circontent = JSON.parse(cir)
            this.contentList.push(circontent)
        }.bind(this))
    }
}
</script>

<style lang="scss" scoped>
.app-cir-content{
    .content{
        width: 100%;
        margin-top: 10px;
        height: 1.02rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user_info{
            width: 90px;
            padding: 0 20px;
            img{
                width: 100%;
            }
        }
        .list_content{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .content_title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                h1{
                    color: #333;
                    font-size: 15px;
                    font-weight: 500;
                }
                span{
                    font-size: 12px;
                    padding-right: 10px;
                    color: #999;
                }
            }
            .trend_msg{
                color: #333;
                padding-right: 25px;
                font-size: 12px;
                .msg_text{
                    height: 32px;
                    overflow: hidden;
                }
                span{
                    color: #FD6C23; 
                    line-height: 22px;
                }
            }
        }

    }
    .write-cir{
        position: fixed;
        width: 31px;
        height: 31px;
        border-radius: 50%;
        background: #FD6C23;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 75px;
        right: 30px;
        img{
            width: 50%;
            height: 50%;
        }
    }
}
    
</style>