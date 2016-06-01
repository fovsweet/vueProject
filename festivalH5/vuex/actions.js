import vue from 'vue'
//更改弹框为哪个组件的使用状态
export const sharGetPrize = ({ dispatch,state },dia) =>{
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId,"raDefUuid":state.raDefUuid};
	if(state.activeStatus == 3){
		//帮好友集赞
			vue.http.post("doReply",vd,{emulateJSON:true}).then(function(res){
				dispatch('SET_HELP_TEXT',res.data.helpInfoVo.replyAlertMessage)
				dispatch('SET_DIALOG',dia);
				setTimeout(function(){
					dispatch('QUIT_DIALOG');
					dispatch('INIT_DATA',res.data.helpInfoVo);
				}, 20000);
			})
		
	}else if(state.activeStatus == 2){
		//抽奖
		vue.http.post("getRandomCC",vd,{emulateJSON:true}).then(function(res){
			dispatch('SET_PRIZE',res.data.lotteryInfoVo)
			dispatch('SET_DIALOG',dia);
		})
	}else if(state.activeStatus == 5){
		//更改回状态为4时候的逻辑
		dispatch('SET_DIALOG',dia);
		/*if(state.isSubscribe == 'yes'){
	        dispatch('SET_INIT_DIA','share');
	      }else if(state.isSubscribe == 'no'){
	        dispatch('SET_INIT_DIA','follow');
	      }*/
	}
	else{
		//其它状态弹框
		dispatch('SET_DIALOG',dia);
	}
}

//隐藏弹框
export const quiteDia = ({ dispatch }) =>{
	dispatch('QUIT_DIALOG');
} 

//初始化数据
export const initData = ({ dispatch },data) =>{
	//dispatch('INIT_DATA',data.helpInfoVo);
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId};
	vue.http.post("getReplyInfo",vd,{emulateJSON:true}).then(function(res){
		console.log(res.data);
		if(res.data.status=='success'){
			dispatch('INIT_DATA',res.data.helpInfoVo)
		}
	})
}

//查看奖品数据
export const getPrizeList = ({ dispatch },dia) =>{
	const vd = {"uuid":uuid,"shareId":wxshareId};
	vue.http.post("viewRewardInfo",vd,{emulateJSON:true}).then(function(res){
			dispatch('SET_PRIZE_LIST',res.data)
			dispatch('SET_DIALOG',dia);
	})
}

//查看奖品详情
export const getPrizeInfo = ({ dispatch }) =>{
	const vd = {"uuid":uuid};
	vue.http.post("getPicInfo",vd,{emulateJSON:true}).then(function(res){
			dispatch('SET_PRIZE_INFO',res.data.raDefPicList)
	})
}

//查看活动详情
export const getActiveInfo = ({ dispatch }) =>{
	const vd = {"uuid":uuid};
	vue.http.post("getDesc",vd,{emulateJSON:true}).then(function(res){
			dispatch('SET_ACTIVE_INFO',res.data.desc)
	})
}

//提交领奖信息
export const pushInfo = ({  dispatch,state }) =>{
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId};
	vd.username = state.getPrizeInfo.username;
	vd.telphone = state.getPrizeInfo.telphone;
	vd.address = state.getPrizeInfo.address;
	if(vd.username.trim() == '' && vd.telphone.trim() == '' && vd.address.trim() ==''){
		return;
	}else{
		vue.http.post("writeRewardInfo",vd,{emulateJSON:true}).then(function(res){
			dispatch('QUIT_DIALOG');
		})
	}
	
}

//填写领奖信息
export const writeInfo = ({ dispatch,state },dia) =>{
	dispatch('SET_DIALOG',dia);
}
