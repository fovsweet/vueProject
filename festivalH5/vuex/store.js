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

  //当前状态
  activeStatus:0,

  //主页需更改文案
  festivalInfo:{
    //表示状态为0的提示语句 1表示状态为1的提示语句
    tips:0,  
    //用户名字
    peopleName:'',
    //奖品名字
    prizeName:'',
    //按钮文案
    btnName:'',
    //助力数量
    helpNum:'',
    //剩余数量
    remainNum:'',
    //单位
    unit:'',
    //是否显示查看《我的奖品》
    hitPrize:false
  },

  //点赞后助力多少的提示文案
  helpdText:'',

  //抽奖信息
  getPrize:{
    isGet:true,
    name:'',
    url:''
  }

  

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
  //更改点赞后提示文本
  SET_HELP_TEXT(state,data){
    state.helpdText = data; 
  },
  //设置抽奖的奖品信息
  SET_PRIZE(state,data){
    if(data.lotterPrize == 1){
      state.getPrize.isGet = true;
      state.getPrize.name = data.raRewardName;
      state.getPrize.url = data.ccPicSmallUr;

    }else{
      state.getPrize.isGet = false;
    }
    
  },
  //初始化数据
  INIT_DATA(state,data){
    if(data.status == 'normal'){
      //当点赞时，会返回提示语句有值，则赋给提示文本
      if(data.replyAlertMessage){
        state.helpdText = data.replyAlertMessage;
      }
      state.listOrder = data.raReplyVoLists;
      state.festivalInfo.btnName = data.btnName;
      state.festivalInfo.peopleName = data.shareName;
      state.festivalInfo.prizeName = data.firstRewarddName;
      state.festivalInfo.helpNum = data.finishedNum;
      state.festivalInfo.remainNum = data.unfinishedNum;
      state.festivalInfo.unit = data.raUnit;

      if(data.btnFlag == 0){

          //自己进入，发起活动
          state.initDia = 'share';
          state.activeStatus = 0;

      }else if(data.btnFlag == 1){

          //自己进入，集赞未完成，发起活动
          state.festivalInfo.tips = 1;
          state.initDia = 'share';
          state.activeStatus = 1;

      }else if(data.btnFlag == 2){

          //集赞完成，查看奖品
          state.festivalInfo.tips = 1;
          state.initDia = 'win';
          state.festivalInfo.hitPrize = true;

      }
      else if(data.btnFlag == 3){

          //其它人进入，集赞未完成，帮助划船，还有另一种状态，超过点赞次数限制
          state.initDia = 'successHelp'
          state.festivalInfo.tips = 1;
          state.activeStatus =3;

      }else if(data.btnFlag == 5){

          //其它人进入，集赞未完成，但已超过次数限制
          state.initDia = 'forbid'
          state.festivalInfo.tips = 1;
          state.activeStatus = 5;

      }else if(data.btnFlag == 4){

          //其它人进入，集赞已完成
          state.initDia = 'win'
          state.festivalInfo.tips = 1;
          state.activeStatus = 4;

      }
    }else if(data.status == 'nostart'){

        state.initDia = 'begin';
        state.festivalInfo.tips = 0;

    }else if(data.status == 'close'){

        state.initDia = 'over';
        state.festivalInfo.tips = 0;

    }
    
  }
}

export default new Vuex.Store({
	state,
	mutations
})