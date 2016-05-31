import vue from 'vue'
//设置弹框为哪个组件
export const sharGetPrize = ({ dispatch,state },dia) =>{
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId};
	console.log(state.activeStatus);
	if(state.activeStatus == 3){
		vue.http.post("http://rap.taobao.org/mockjsdata/4090/doReply?openId=4",vd).then(function(res){
			dispatch('INIT_DATA',res.data.helpInfoVo);
			dispatch('SET_DIALOG',dia);
			setTimeout(function(){dispatch('QUIT_DIALOG');}, 3000);
		})
	}else if(state.activeStatus == 2){
		vue.http.post("http://rap.taobao.org/mockjsdata/4090/getRandomCC",vd).then(function(res){
			dispatch('SET_PRIZE',res.data.lotteryInfoVo)
			dispatch('SET_DIALOG',dia);
		})
	}else{
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
	vue.http.post("http://rap.taobao.org/mockjsdata/4090/getReplyInfo?openId=3",vd).then(function(res){
				console.log(res.data);
				if(res.data.success){
					dispatch('INIT_DATA',res.data.helpInfoVo)
				}
			})
}

//查看奖品数据
export const getPrizeList = ({ dispatch },dia) =>{
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId};
	vue.http.post("http://rap.taobao.org/mockjsdata/4090/viewRewardInfo?shareId=&uuid=",vd).then(function(res){
					dispatch('SET_PRIZE_LIST',res.data)
					dispatch('SET_DIALOG',dia);
			})
}

