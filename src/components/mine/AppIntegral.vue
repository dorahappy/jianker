<template>
    <div class="app-integral">
        <div class="header">
            <i class="yo-ico" @click="toMine">&#xf07d;</i>
            <p>我的积分</p>
            <i class="yo-ico">&#xf07f;</i>
        </div>
        <div class="my-integral">
            <img src="/static/img/mine/mine_integral.png" alt="">
            <p>100</p>
        </div>
        <div class="reg-again">
            <div></div>
            <p>我已连续签到:</p>
            <h2>1</h2>
            <p>天</p>
        </div>
        <div class="my-grade">
            <div class="add-point" v-for="item of reg" :key="item.id">
                <div class="point-left">
                    <h6>{{item.title}}</h6>
                    <h5>{{item.time}}</h5>
                </div>
                <p>{{item.point}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'app-integral',
    components: {

    },
    data(){
        return {
            reg: [
                {id:1, title: '今日签到', time: '2017-12-31', point: '+5'},
                {id:2, title: '投递品牌企业', time: '2017-12-31', point: '-1'},
                {id:3, title: '投递优质兼职', time: '2017-12-31', point: '-2'}
            ]
        }
    },
    methods: {
        toMine(){
            this.$router.push({name: 'mine'})
        }
    },
    mounted(){
		
	},
  
}
</script>

<style lang="scss" scoped>

.app-integral{
    height:100%;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    background:#f2f2f2;
    .header{
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: .64rem;
        background: #fd6c23;
        line-height: .64rem;
        text-align: center;
        font-size: .22rem;
        color: #fff;
        i:nth-child(3){
            color: #fd6c23;
        } 
    }
    .my-integral{
        width: 100%;
        height: 146px;
        padding-bottom: 38px;
        background: #FD6C23;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            padding: 0 10px;
            font-size: 61px;
            color: #fff;
            font-weight: 100;
        }
        img{
            width: 28px;
        }
    }
    .reg-again{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 310px;
        height: 72px;
        margin: -36px auto 0;
        background: #fff;
        font-size: 14px;
        border-radius: 8px;
        div{
            width: 32px;
            height: 32px;
            border: 1px solid #333;
            border-radius: 50%;
            margin: 0 14px;
        }
        p{
            font-size: 14px;
            color: #333;
        }
        h2{
            width: 130px;
            text-align: center;
            font-size: 32px;
            color: #FD6C23;
            font-weight: 100;
        }
        p:nth-child(4){
            padding-right: 15px;
        }
    }
    .my-grade{
        background: #fff;
        border-radius: 8px;
        margin: 10px auto;
        width: 310px;
        .add-point{
            height: 72px;
            padding: 0 15px;
            justify-content: space-between;
            align-items: center;
            display: flex;
            color: #333;
            border-bottom: 1px solid  #F2F2F2;
            h6{
                font-size: 15px;
                font-weight: 100;
            }
            h5{
                font-size: 10px;
                font-weight: 100;
            }
            p{
                font-size: 18px;
            }
        }
    }
}

</style>