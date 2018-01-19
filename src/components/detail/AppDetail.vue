<template>
    <div class="app-detail">
        <app-header></app-header>
        <div class="detail-content">
            <div class="detail-title">
                <h1>{{content.posname}}</h1>
                <div>{{content.salary}}</span></div>
                <p>{{content.duration}}</p>
            </div>
            <div class="job_des">
                <h1>职位描述</h1>
                <div class="job_content" v-for="(val, key, i) in content.jobdes" :key="i">
                    <h2>工作内容</h2>
                    <h3>{{key}}</h3>
                    <p v-for="(arr, ind) of val" :key="ind">{{ind+1}}、{{arr}}</p></p>
                </div>
            </div>
            <div class="work_time">
                <h1>工作时间</h1>
                <div class="start_time">
                    <div class="start_data">
                        <h2>开始时间</h2>
                        <div></div>
                        <p>{{work.starttime}}</p>
                    </div>
                    <div class="work_data">
                        <div></div>
                        <p>{{work.workpart}} {{work.workstr}}</p>
                    </div>
                    <div class="start_data up_bo">
                        <h2>结束时间</h2>
                        <div></div>
                        <p>{{work.endtime}}</p>
                    </div>
                </div>
            </div>
            <div class="work_place">
                <h1>工作地点</h1>
                <div class="work_map">
                    <img src="/static/img/detail/detail_map.png" alt="">
                </div>
            </div>
            <div class="com_name">
                <h1>公司名称</h1>
                <p>{{content.comname}}</p>
            </div>
            <div class="work_sign">
                防骗警示：未标明收费的职位不会收取任何费用，若商家要求缴纳费用或押 金，请提高警惕并第一时间向我们举报！
            </div>
        </div>
        <app-footer :id="id"></app-footer>
    </div>
</template>
<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
export default {
    name:'app-detail',
    data(){
    	return{
            list:[],
            id: 1,
            content:{},
            work:{}
    	}
    },
    components:{
        AppHeader, AppFooter
    },
	mounted(){
        fetch("http://localhost:5000/api/position/listContent")
            .then((response)=>response.json())
            .then((res)=>{
                this.id = this.$router.history.current.query.id
                let id = this.id
                for(let i=0,l=res.data.subjects.length;i<l;i++){
                    
                    if(res.data.subjects[i].id==id){
                        this.content = res.data.subjects[i]
                        this.work = res.data.subjects[i].worktime
                        return ;
                    }
                }
            })
    },
	methods:{
	}
}
</script>
<style lang="scss" scoped>
	.app-detail{
        .detail-content{
            position: absolute;
            top: .64rem;
            bottom: 50px;
            overflow: scroll;
            .detail-title{
                width: 100%;
                height: .74rem;
                background: #fff;
                padding: 10px 10px;
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                margin-bottom: 10px;
                h1{
                    font-size: 17px;
                    color: #333;
                    font-weight: 600;
                }
                div{
                    font-size: 15px;
                    color: #FD6C23;
                    span{
                        font-size: 10px;
                    }
                }
                p{
                    font-size: 12px;
                    color: #666;
                }
            }
            .job_des{
                padding: 10px;
                background: #fff;
                margin-bottom: 10px;
                h1{
                    font-size: .15rem;
                    color: #333;
                    font-weight: 600;
                }
                .job_content{
                    padding: 0px 10px 0 10px;
                    font-size: .12rem;
                    color: #333;
                    font-weight: 500;
                }
            }
            .work_time{
                padding: 10px;
                background: #fff;
                margin-bottom: 10px;
                h1{
                    font-size: .15rem;
                    color: #333;
                    font-weight: 600;
                }
                .start_time{
                    width: 100%;
                    padding: 0 10px;
                    .up_bo{
                        margin-top: -4px;
                    }
                    .start_data{
                        display: flex;
                        align-items: center;
                        h2,p{
                            font-size: .12rem;
                            color: #666666;
                        }
                        div{
                            width: 10px;
                            height: 10px;
                            border-radius: 5px;
                            border: 1px solid #FD6C23;
                            margin: 0 10px;
                        }
                    }
                    .work_data{
                        display: flex;
                        align-items: center;
                        margin-top: -4px;
                        div{
                            height: 53px;
                            margin-left: 63px;
                            border-right: 1px solid #e5e5e5;
                        }
                        p{
                            padding-left: 16px;
                            font-size: 10px;
                            color: #999999;
                        }
                    }
                }
            }
            .work_place{
                background: #fff;
                padding-bottom: 10px;
                margin-bottom: 10px;
                h1{
                    padding: 0 10px;
                    line-height: 35px;
                    height: 35px;
                }
                .work_map{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
            }
            .com_name{
                background: #fff;
                display: flex;
                align-items: center;
                height: 32px;
                line-height: 32px;
                font-size: 12px;
                margin-bottom: 10px;
                h1{
                    padding: 0 10px;
                    color: #333;
                    font-weight: 500;
                }
                p{
                    color: #666;
                }
            }
            .work_sign{
                background: #fff;
                padding: 10px 36px 10px 10px;
                font-size: 10px;
                color: #999999;
            }
        }
        
        
    }
</style>
