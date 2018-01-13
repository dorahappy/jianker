import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

const state = {
    count: 0,
    num: 10,
    isLogin: false
}

const mutations = {
    add(state, payload){
        state.count += payload.params.age
    },
    reduce(state){
        state.count--
    }
}


export default new Vuex.Store({
    state,
    mutations
})