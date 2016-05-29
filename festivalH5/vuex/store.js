import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  initDia:'',
	dialog:'',
  listOrder:[],
  activeInfo:'',
  prizeInfo:'',
}


const mutations = {
  //设置弹窗
  SET_DIALOG(state,dia){
  	state.dialog = dia;
  },
  //取消弹窗
  QUIT_DIALOG(state){
  	state.dialog ='';
  },
  INIT_DATA(state,data){
    if(data.btnFlag == 1){
        state.initDia = 'successHelp'
    }else if(data.btnFlag == 2){
        state.initDia = 'forbid'
    }else if(data.btnFlag == 3){
        state.initDia = 'follow'
    }else if(data.btnFlag == 4){
        state.initDia = 'win'
    }else if (data.btnFlag == 5){
        state.initDia = 'look'
    }
  }
}

export default new Vuex.Store({
	state,
	mutations
})