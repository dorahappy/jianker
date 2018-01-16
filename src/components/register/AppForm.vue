<template>
    <div class="app-form">
        <p class="inp-title" >{{inpTitle}}</p>
        <input type="text" :placeholder="placeHolder"  @blur.prevent="table_judge(info)"/>
    </div>
</template>

<script>
export default {
    name: 'app-form',
    props:['inpTitle', 'placeHolder','info'],
     data:function(){
            return {
                email:'',
                password:'',
                password1:'',
                isShow:false,
                errormessage:'',
            }
        },
    mounted(){
		console.log(this.info)
    },
    computed:{
        
    },
  methods:{
  	table_judge(data){
  	 	if(data=='email'){
  	 		let reg = /[a-z]/;
                if(reg.test(data)){
                    this.isShow=true
                    this.errormessage='用户名格式有误'
                }else{
                    this.isShow=false
                }
  	 		}
                
    	}
  	}
}
</script>

<style lang="scss" scoped>
    .app-form{
        width: 100%;
        height: .41rem;
        background: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 19px;
        .inp-title{
            width: .91rem;
            height: .41rem;
            font-size: 15px;
            padding: 0 11px;
            line-height: .41rem;
            color: #333;
            text-align: left;
        }
        input{
            width: 240px;
            border: 0;
        }
    }
</style>