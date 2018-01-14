<template>
    <div class="app-listType">
        <dl @click="toallwork('home')">
            <dt class="iconfont-img">
                <img src="/static/images/index-home.png" alt="">
            </dt>
            <dd>宅兼职</dd>
        </dl>
        <dl @click="toallwork('college')">
            <dt class="iconfont-img">
                <img src="/static/images/index-bag.png" alt="">
            </dt>
            <dd>大学生兼职</dd>
        </dl>
        <dl @click="toallwork('short')">
            <dt class="iconfont-img">
                <img src="/static/images/index-clock.png" alt="">
            </dt>
            <dd>短期兼职</dd>
        </dl>
        <dl @click="toallwork('long')">
            <dt class="iconfont-img">
                <img src="/static/images/index-list.png" alt="">
            </dt>
            <dd>长期兼职</dd>
        </dl>
    </div>
</template>
<script>
import bus from '../../modules/bus'
export default {
    name:'app-listType',
    methods:{
        toallwork(type){
             this.$router.push({name:'allwork', params: {type}})
        }
    }
}
</script>
<style lang="sass" scoped>
</style>
