import Vue from 'vue';
import Vuex from 'vuex';
import * as mt from './mutation-type'
import * as at from './action-type'
import axios from "axios"

Vue.use(Vuex)

const state = {
    city: '北京',
    isLogin: false,
    partList: [],
    userMsg: {},
    collect:[],
    partTime:[]
}

const mutations = {
    [mt.CHANGECITY](state, parme) {
        state.city = parme
    },
    [mt.CHANGELIST](state, parme) {
        state.partList = parme
    },
    setInfo(state, userMsg) {
    	state.userMsg = userMsg
  	},
  	collectItem(state,coll){
  		state.collect.push(coll)
  		
  	},
  	collectWork(state,info){
  		state.partTime.push(info)
  	}
}

const actions = {
	collectItem({commit},id){
		axios.get("/static/mock/posList.json",{}).then((res)=>{
			let sum = res.data.data.subjects
			var coll;
			sum.forEach((item,i)=>{
				if(item.id == id){
					coll = item
				}
			})
			commit("collectItem",coll)
		})
	},
	collectWork({commit},id){
		axios.get("/static/mock/partTime.json",{}).then((res)=>{

			let detail = res.data.data.contentList
			var info;
			detail.forEach((item,i)=>{
				if(item.id == id){
					info = item					
				}
			})
			commit("collectWork",info)
		})
	}
}
  const store =  new Vuex.Store({
    state,mutations,actions
})
  

export default store