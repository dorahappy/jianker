<template>
    <div class="app-position">
        position
    </div>
</template>

<script>
export default {
    name: 'app-position',
    data(){
    	return{
    		cities:[]
    	}
    },
   mounted(){
    fetch("http://localhost:5000/api/position/city")
        .then((response)=>response.json())
        .then((res)=>{
        	console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
.app-position{
    
}
	

</style>