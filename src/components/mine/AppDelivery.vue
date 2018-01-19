<template>
    <div class="app-delivery">
        <div class="header">
            <i class="yo-ico" @click="toMine">&#xf07d;</i>
            <p>我的投递</p>
            <i class="yo-ico">&#xf07f;</i>
        </div>
        <div class="del-nav">
            <p :class="[type===1?'active':'']" @click="changeType(1)">成功</p>
            <p :class="[type===2?'active':'']" @click="changeType(2)">审核中</p>
            <p :class="[type===0?'active':'']" @click="changeType(0)">失败</p>
        </div>{{navtype}}
        <div class="del-content">
            <ul>
                <AppItem v-for="value in list" :key="value.id" :value="value">
                </AppItem>
            </ul>
        </div>
    </div>
</template>

<script>
import AppItem from './AppItem'
export default {
    name: 'app-delivery',
    components: {
        AppItem
    },
    data(){
        return {
            list: [],
            type: 1
        }
    },
    methods: {
        toMine(){
            this.$router.push({name: 'mine'})
        },
        changeType(type){
            this.type = type
        }
    },
    computed: {
        navtype(){
            setter: { 
                fetch("/static/mock/posList.json")
                    .then((response)=>response.json())
                    .then((res)=>{
                        this.list = []
                        res.data.subjects.forEach(item=>{
                            if(item.issuccess===this.type){
                                this.list.push(item)
                            }
                        })
                        this.list.map((item, i)=>{
                            switch(item.postype){
                                case "客服":
                                    item.className="custom"
                                    break;
                                case "其他":
                                    item.className="anything"
                                    break;
                                case "服务业":
                                    item.className="serve"
                                    break;
                                case "学生":
                                    item.className="stu"
                                    break;
                                case "销售":
                                    item.className="sell"
                                    break;
                                case "模特":
                                    item.className="model"
                                    break;
                                case "临时工":
                                    item.className="part"
                                    break;
                                case "文员":
                                    item.className="clerk"
                                    break;
                                default:
                                    item.className=""
                                    break;
                            }
                        })
                    })
            }
            return this.type
        }
    },
    mounted(){
		
	},
  
}
</script>

<style lang="scss" scoped>

.app-delivery{
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
    .del-nav{
        width: 100%;
        display: flex;
        align-items: center;
        background: #fff;
        p{
            width: 33.3333%;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 15px;
            color: #333;
            border-bottom: 1px solid transparent;
            &.active{
                border-bottom: 1px solid #FD6C23;
                color: #FD6C23;
            }
        }

    }
    .del-content{
        background: #fff;
        width: 100%;
        display: flex;
        //@include flex();
        flex-direction: column;
        position:absolute;
        top:1.04rem;
        bottom: 0;
        overflow:scroll;
        > ul {
        width: 100%;
        }
    }
}

</style>