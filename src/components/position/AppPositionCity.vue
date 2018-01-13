<template>
    <div class="app-position-city">
        <p>{{city.text}}</p>
        <div class="city_info" v-for="(val, i) of city.cityName" :key="i">{{val}}</div>
    </div>
</template>

<script>
export default {
    name: 'app-position-city',
    props:['city'],
    components:{
        
    },
    data(){
    	return{
    		cities:[]
    	}
    }
}
</script>

<style lang="scss" scoped>
    .app-position-city{
        width: 100%;
        p{
            width: 100%;
            height: 18px;
            padding: 0 10px;
            line-height: 18px;
            font-size: 10px;
            color: #333;
        }
        .city_info{
            width: 100%;
            padding: 0 10px;
            background: #fff;
            height: 35px;
            line-height: 35px;
            border-bottom: 1px solid #e5e5e5;
        }
    }
	

</style>