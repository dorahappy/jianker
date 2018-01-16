import Vue from 'vue';
import Vuex from 'vuex';
import * as mt from './mutation-type'
import * as at from './action-type'


Vue.use(Vuex)

const state = {
    city: '北京',
    isLogin: false,
    partList: [],
    userMsg: {}
}

const mutations = {
    [mt.CHANGECITY](state, parme) {
        state.city = parme
    },
    [mt.CHANGELIST](state, parme) {
        state.partList = parme
    },
    setInfo (state, userMsg) {
    	state.userMsg = userMsg
  	}
}

const action = {
	
}
 const getters = {
    
}
export default new Vuex.Store({
    state,mutations,action,getters
})