<template>
    <router-link :to="{name:'love'}" tag="div">
        <div  v-for="item of contentList" :key="item.id" class="app-know-content"  @click="jumpToTimelove()">
            <div class="user_info"><img :src="item.imgUrl" alt=""></div>
            <div class="list_content">
                <div class="content_title">
                    <h1>{{item.trendTitle}}</h1>
                    <span>{{item.time}}</span>
                </div>
                <div class="trend_msg">
                    <div class="msg_text">{{item.trend}}</div>
                    ...<span>【详情】</span>
                </div>
            </div>
        </div>
        
    </router-link>
</template>

<script>
export default {
    name: 'app-know-content',
    props: ['item'],
    data:function(){
        return {
            contentList: []
        }
    },
    mounted(){
        fetch("http://localhost:5000/api/position/ptCircle")
            .then((response)=>response.json())
            .then((res)=>{
                this.contentList = res.data.contentList
            })
    },
    methods:{
		jumpToTimelove(){
			this.$router.push({path:'/college/love'})
		}
	
	}
    
}
</script>

<style lang="scss" scoped>
    .app-know-content{
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
</style>