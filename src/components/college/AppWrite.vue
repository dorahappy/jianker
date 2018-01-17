<template>
    <div class="app-write">
        <div class="write-header">
            <router-link class="yo-ico both-side" :to="{name: 'college'}" tag="i">&#xf07d;</router-link>
            <span class="both-side" @click="addMsg">发布</span>
        </div>
        <div class="msg">
            <textarea placeholder="这一刻的想法..." v-model="msg"></textarea>
            <span>500字</span>
        </div>
    </div>
</template>

<script>
import bus from '../../modules/bus'
export default {
    name: 'app-write',
    data:function(){
        return {
            msg:''
        }
    },
    methods: {
        addMsg(){
            let len = 9
            let cir = JSON.stringify({id:len,
                    imgUrl:"/static/img/college/college_cir.png",
                    trendTitle:"利郎",
                    time:"2017年12月31日",
                    trend:this.msg})
            bus.$emit('addPartCir', cir)
            this.$router.replace({name: 'college'})
        }
    }
}
</script>

<style lang="scss" scoped>
.app-write{
    .write-header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .64rem;
        display: flex;
        font-size: 17px;
        background: #FD6C23;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        i{
            font-size: 20px;
        }
        .both-side{
            padding: 0 10px;
        }
    }
    .msg{
        margin-top: .74rem;
        padding: 10px;
        textarea{
            width: 100%;
            height: 2.25rem;
            border: 0;
        }
        span{
            color: #666;
            font-size: 10px;
            position: absolute;
            top: 2.83rem;
            right: 20px;
        }
    }
}
    
</style>