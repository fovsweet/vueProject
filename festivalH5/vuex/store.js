import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	dialog:'',
}


const mutations = {
  //设置弹窗
  SET_DIALOG(state,dia){
  	state.dialog = dia;
  },
  //取消弹窗
  QUIT_DIALOG(state){
  	state.dialog ='';
  }
}

export default new Vuex.Store({
	state,
	mutations
})