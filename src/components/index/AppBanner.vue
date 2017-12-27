<template>
    <div class="app-banner">
        <ul>
            <li>
                <img src="https://img1.360buyimg.com/da/jfs/t12022/221/2537221377/323613/4429db73/5a421fbbNc96ef514.jpg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'app-banner',
    mounted(){
        fetch("http://localhost:5000/api/list")
            .then((response)=>response.json())
            .then((res)=>{
                console.log(res)
            })
    }
}
</script>
<style lang='scss' scoped>
</style>
