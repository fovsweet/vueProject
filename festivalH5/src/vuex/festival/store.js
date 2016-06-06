import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  //防止重复提交
  doublePut:false,

  //活动id
  raDefUuid:'',
  
  //按钮弹窗传输的弹窗值
  initDia:'',

  //当前弹框的值
	dialog:'',

  //帮助助力的好友列表
  listOrder:[],

  //活动说情
  activeInfo:'',

  //奖品详情
  prizeInfo:[],

  //当前状态
  activeStatus:0,

  //主页需更改文案
  festivalInfo:{
    //表示状态为0的提示语句 1表示状态为1的提示语句
    tips:'',  
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
    hitPrize:false,
    //背景图片
    backUrl:'',
    //二维码图片
    qrUrl:'',
  },

  //点赞后助力多少的提示文案
  helpdText:'',

  //抽奖信息
  getPrize:{
    isGet:true,
    name:'',
    url:'',
  },

  //抽奖次数是否已用完
  remainLotteryTimes:'',

  //奖品列表
  prizeList:[],

  //船儿划动
  boatMove:{
    top:'1rem',
    left:'2.2rem'
  },

  //是否关注公众号
  isSubscribe:'',

  //填写领奖信息
  getPrizeInfo:{
    username:'',
    telphone:'',
    address:'',
    writeOrNot:''
  },

  //tab当前模块
  currentList:'listInfo',

}


const mutations = {
  //设置重复提交
  SET_DOUBLE(state,dou){
    state.doublePut = dou;
  },
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
  SET_PRIZE(state,res){
    const data = res.lotteryInfoVo;
    if(data.lotterPrize == 1){
      state.getPrize.isGet = true;
      state.getPrize.name = data.raRewardName;
      state.getPrize.url = data.ccPicSmallUrl;
    }else{
      state.getPrize.isGet = false;
      state.getPrize.name = data.raRewardName;
    }

    state.festivalInfo.btnName = res.btnName;
    state.remainLotteryTimes  = res.remainLotteryTimes;

  },
  //设置查看奖品列表及领奖信息
  SET_PRIZE_LIST(state,data){
    state.prizeList = data.lotteryInfoList;
    state.getPrizeInfo.username = data.raUserName;
    state.getPrizeInfo.telphone = data.raUserTel;
    state.getPrizeInfo.address = data.raUserAddress;
    if(data.writeOrNot == 'yes'){
      state.getPrizeInfo.writeOrNot = '已填写领奖信息'
    }else if(data.writeOrNot == 'no'){
      state.getPrizeInfo.writeOrNot = '填写领奖信息'
    }
    
  },
  //设置弹框将打开哪一个
  SET_INIT_DIA(sate,data){
    state.initDia = data;
  },
  //设置集赞成功后的语句
  SET_HELP_TEXT(state,data){
    state.helpdText = data;
  },
  //设置活动奖品
  SET_PRIZE_INFO(state,data){
    state.prizeInfo = data;
  },
  //设置活动详情
  SET_ACTIVE_INFO(state,data){
    state.activeInfo = data;
  },
  //设置tabl模块切换
  SET_LIST_CONT(state,data){
    state.currentList = data;
  },
  //设置小船可以划动
  SET_ANIMATE(state){
    state.boatMove.ani = 'all .5s ease-in';
  },
  //初始化数据
  INIT_DATA(state,res){
      const data = res.helpInfoVo;
      state.raDefUuid = data.raDefUuid;
      state.listOrder = data.raReplyVoLists;   //助力名单列表
      state.festivalInfo.backUrl = "url("+ data.raBackgroundImg +")";
      state.festivalInfo.qrUrl = res.qrCodeUrl;  //二维码地址
      state.festivalInfo.btnName = data.btnName;     //按钮名字
      state.festivalInfo.peopleName = data.shareName;  //活动主名字
      state.festivalInfo.prizeName = data.firstRewarddName; //奖品名字
      state.festivalInfo.helpNum = data.finishedNum;  //已完成数
      state.festivalInfo.remainNum = data.unfinishedNum;  //未完成数
      state.festivalInfo.unit = data.raUnit;  //单位
      state.festivalInfo.perLimit = data.perLimit;  //限制次数
      state.festivalInfo.replyUserName = data.replyUserName; //被限制人名称
      state.remainLotteryTimes  = data.lotteryTimes;  //抽奖次数是否用完
      if(data.finishedNum/data.raNum >0 && data.finishedNum/data.raNum <= 1 ){
         state.boatMove.top = (data.finishedNum/data.raNum*9+0.8)+'rem';  //划船
         state.boatMove.left = (data.finishedNum/data.raNum*9+2.4)+'rem';
         state.boatMove.boatOp = 1;
      }
      //提示语句
      const helpTips = data.shareName+'已经集到'+data.finishedNum+''+data.raUnit+',还差'+ data.unfinishedNum +''+data.raUnit+'即有机会获取'+ data.firstRewarddName;
      const orginTips = '邀请好友帮忙助力,即有机会领取'+data.firstRewarddName ;

    if(data.status == 'normal'){
      //当点赞时，会返回提示语句有值，则赋给提示文本
      if(data.btnFlag == 0){
          
          //自己进入，发起活动
          state.festivalInfo.tips = orginTips;
          state.activeStatus = 0;
          state.initDia = 'share';
          

      }else if(data.btnFlag == 1){
          
          //自己进入，集赞未完成，发起活动
          state.festivalInfo.tips = helpTips;
          state.activeStatus = 1;
          state.initDia = 'share';
          

      }else if(data.btnFlag == 2){

          //集赞完成，查看奖品
          state.festivalInfo.tips = helpTips;
          state.activeStatus = 2;
          state.initDia = 'win';
          state.festivalInfo.hitPrize = true;

      }
      else if(data.btnFlag == 3){

          //其它人进入，集赞未完成，帮助划船，还有另一种状态，超过点赞次数限制
          state.festivalInfo.tips = helpTips;
          state.activeStatus =3;
          state.isSubscribe = data.isSubscribe;
          state.initDia = 'successHelp'
         

      }else if(data.btnFlag == 5){

          //其它人进入，集赞未完成，但已超过次数限制
          state.festivalInfo.tips = helpTips;
          state.activeStatus = 5;
          state.isSubscribe = data.isSubscribe;
          state.initDia = 'forbid'        

      }else if(data.btnFlag == 4){
          //其它人进入，集赞已完成
          state.festivalInfo.tips = helpTips;
          state.activeStatus = 4;
          if(data.isSubscribe == 'yes'){
            state.initDia = 'share'
          }else if(data.isSubscribe == 'no'){
            state.initDia = 'follow'
          }

      }
    }else if(data.status == 'nostart'){

        state.initDia = 'begin';
        state.dialog = 'begin';
        state.festivalInfo.tips = orginTips;

    }else if(data.status == 'close'){

        state.initDia = 'over';
         state.dialog = 'over';
        state.festivalInfo.tips = helpTips;

    }
    
  }
}

export default new Vuex.Store({
	state,
	mutations
})