<template>
    <div class="app-footer">
        <router-link :to="{name: 'home'}" tag="dl">
            <dt class="yo-ico">&#xe604;</dt>
            <dd>首页</dd>
        </router-link>
        <router-link :to="{name: 'allwork'}" tag="dl">
            <dt class="yo-ico">&#xe601;</dt>
            <dd>全部兼职</dd>
        </router-link>
        <router-link :to="{name: 'college'}" tag="dl">
            <dt class="yo-ico">&#xe621;</dt>
            <dd>智学堂</dd>
        </router-link>

        <router-link :to="{name: 'message'}" tag="dl">
            <dt class="yo-ico">&#xe503;</dt>
            <dd>消息</dd>
        </router-link>

        <router-link :to="{name: 'mine'}" tag="dl">
            <dt class="yo-ico">&#xe605;</dt>
            <dd>我的</dd>
        </router-link>

    </div>
</template>
<script>
export default {
    name:"app-footer"
}
</script>
<style lang="sass" scoped>

</style>
