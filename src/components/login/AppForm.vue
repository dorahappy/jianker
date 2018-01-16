<template>
    <div class="app-form">
        <p class="inp-icon">
            <span :class="passIcon"></span>
        </p>
        <input type="text" :placeholder="placeHolder"/>
    </div>
</template>

<script>
export default {
    name: 'app-form',
    props: ['passIcon', 'placeHolder'],
//  mounted(){  
//          let that=this
//          that.data = localStorage.getItem("user_info")
//          that.data = JSON.parse(that.data)
//          that.data_nickname = that.data.user_id
//      },
//      methods:{
//          delateItem(){
//              let that = this
//              localStorage.removeItem("user_info")
//              location.href="/mine-fo/minelogin"
//          }
//      }
}
</script>

<style lang="scss" scoped>
    .app-form{
        width: 100%;
        height: .41rem;
        background: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .inp-icon{
            width: 41px;
            height: 41px;
            background: #FD6C23;
            border-radius: 5px 0 0 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                display: inline-block;
                width: 22px;
                height: 21px;
                background: url(/static/img/login/login_icon.png) no-repeat 0 -22px;
                background-size: 22px 44px;
            }
            .passIcon{
                background-position: 0 0;
            }
        }
        input{
            width: 240px;
            border: 0;
            font-size: 15px;
        }
    }
</style>