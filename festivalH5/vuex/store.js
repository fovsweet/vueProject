import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  
  //按钮弹窗传输的弹窗值
  initDia:'',

  //当前弹框的值
	dialog:'',

  //帮助助力的好友列表
  listOrder:[],

  //活动说情
  activeInfo:'',

  //奖品详情
  prizeInfo:'',

  //按钮文案
  btnName:'',

  

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
    if(data.status == 'normal'){

      state.listOrder = data.raReplyVoLists;


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
    }else if(data.status == 'nostart'){

        state.initDia = 'begin'

    }else if(data.status == 'close'){

        state.initDia = 'over'

    }
    
  }
}

export default new Vuex.Store({
	state,
	mutations
})