<template>
    <div class="app-side-pos">
        <a @click="close" href="#hot">热门</a>
        <a @click="close" :href="'#'+city.text" v-for="city of cities" :key="city.id">{{city.text}}</a>
    </div>
</template>

<script>
export default {
    name: 'app-side-pos',
    props: ['cities'],
    components:{
        
    },
    data(){
    	return{

    	}
    },
    methods:{
        close(){
            setTimeout(() => {
                window.location.hash = '/city'
            }, 0)
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-side-pos{
        position: fixed;
        top: 119px;
        right: 10px;
        a{
            display: flex;
            font-size: 10px;
            width: 10px;
            color: #FD6C23;
            flex-direction: column;
            height: 22px;
            &:nth-child(1){
                height: 44px;
            }
        }
    }
	

</style>