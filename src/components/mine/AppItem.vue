<template>
    <li class="app-item">
        <ul>
            <li :class="[value.className]">{{value.postype}}</li>
            <li>
            <h1>{{value.posname}}</h1>
            <h2><span>{{value.city}}</span><span>{{value.duration}}</span></h2>
            <h3><span>{{value.createtime}}</span><span>{{value.companytype}}</span></h3>
            </li>
            <li>365元/天</li>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'app-item',
    props: ['value'],
    methods: {
        
    }
  
}
</script>

<style lang="scss" scoped>

.app-item{
    padding: .1rem;
    height: .75rem;
    background: #fff;
    border: 1px 0 0 0, #e5e5e5, solid;
    justify-content: center;
    > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .custom{
        background: #fb9b9b;
        }
        .anything{
        background: #00A74A;
        }
        .serve{
        background: #C27400;
        }
        .stu{
        background: #18B3EA;
        }
        .sell{
        background: #FDAD23;
        }
        .model{
        background: #B735DD;
        }
        .clerk{
        background: #FCC573;
        }
        .part{
        background: #689801;
        }
        > li {
        &:first-child {
            width: .4rem;
            border-radius: .2rem;
            line-height: .4rem;
            height: .4rem;
            text-align: center;
            font-size: .1rem;
            color: #fff;
        }
        &:nth-child(2) {
            padding-left: .1rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1 {
            font-size: .14rem;
            }
            h2, h3 {
            font-weight: 100;
            font-size: 0.12rem;
            span{
                &:nth-child(2){
                margin-left: .11rem;
                }
            }
            }
            h2{
            color: #666666;
            }
            h3{
            color: #999999;
            span{
                &:nth-child(2){
                display: inline-block;
                width: .52rem;
                height: .17rem;
                background: #fd6c23;
                text-align: center;
                color: #fff;
                border-radius: .02rem;
                }
            }
            }
        }
        &:last-child {
            width: .8rem;
            text-align: center;
            line-height: .8rem;
            font-size: .18rem;
            color: #fd6c23;
        }
        
        }
    }
    
}

</style>