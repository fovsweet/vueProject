//import vue from 'vue' //当需要用到http的时候需要引入
//更改弹框为哪个组件的使用状态
export const sharGetPrize = ({ dispatch,state },dia) =>{
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId,"raDefUuid":state.raDefUuid};
	if(state.activeStatus == 3){
		//帮好友集赞
			$.post("h5/doReply",vd,function(res){
				
				if(res.helpInfoVo.replyAlertMessage != null){
					dispatch('SET_HELP_TEXT',res.helpInfoVo.replyAlertMessage)
					dispatch('SET_ANIMATE');
					dispatch('SET_DIALOG',dia);
					setTimeout(function(){
						dispatch('QUIT_DIALOG');
						dispatch('INIT_DATA',res);
					}, 3000);
				}else{
					dispatch('INIT_DATA',res);
				}
 
			  // 配置微信分享 start
		      var shareUrl = res.shareUrl;
		      shareOpenId = res.shareOpenId;
		      //wx定义开始
		      wx.ready(function(){
		         //alert("js权限校验成功");
		         // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
		         //定义发送朋友
		         wx.onMenuShareAppMessage({
		            title: wxtitle, // 分享标题
		            desc: wxdesc, // 分享描述
		            link: shareUrl, // 分享链接
		            imgUrl:wximgUrl, // 分享图标
		            type: '', // 分享类型,music、video或link，不填默认为link
		            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		            success: function () {
		               // 用户确认分享后执行的回调函数
		               callBackShare("2");
		            },
		            cancel: function () {
		            }
		         });
		         //定义分享朋友圈
		         wx.onMenuShareTimeline({
		            title: wxtitle, // 分享标题
		            link:shareUrl, // 分享链接
		            imgUrl: wximgUrl, // 分享图标
		            success: function () {
		               callBackShare("1");
		            },
		            cancel: function () {
		            }
		         });
		      });
		      //wx定义结束
		      // 配置微信分享 en
			})
		
	}else if(state.activeStatus == 2){
		//抽奖
		$.post("h5/getRandomCC",vd,function(res){
			dispatch('SET_PRIZE',res)
			dispatch('SET_DIALOG',dia);
			setTimeout(function(){
					dispatch('QUIT_DIALOG');
				}, 3000);
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
	$.post("h5/getReplyInfo",vd,function(res){
		if(res.status=='success'){

			  dispatch('INIT_DATA',res);

			   // 配置微信分享 start
		      var shareUrl = res.shareUrl;
		      shareOpenId = res.shareOpenId;
		      //wx定义开始
		      wx.ready(function(){
		         //alert("js权限校验成功");
		         // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
		         //定义发送朋友
		         wx.onMenuShareAppMessage({
		            title: wxtitle, // 分享标题
		            desc: wxdesc, // 分享描述
		            link: shareUrl, // 分享链接
		            imgUrl:wximgUrl, // 分享图标
		            type: '', // 分享类型,music、video或link，不填默认为link
		            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		            success: function () {
		               // 用户确认分享后执行的回调函数
		               callBackShare("2");
		            },
		            cancel: function () {
		            }
		         });
		         //定义分享朋友圈
		         wx.onMenuShareTimeline({
		            title: wxtitle, // 分享标题
		            link:shareUrl, // 分享链接
		            imgUrl: wximgUrl, // 分享图标
		            success: function () {
		               callBackShare("1");
		            },
		            cancel: function () {
		            }
		         });
		      });
		      //wx定义结束
		      // 配置微信分享 en

		}
	})
}

//查看奖品数据
export const getPrizeList = ({ dispatch },dia) =>{
	const vd = {"uuid":uuid,"shareId":wxshareId};
	$.post("h5/viewRewardInfo",vd,function(res){
			dispatch('SET_PRIZE_LIST',res)
			dispatch('SET_DIALOG',dia);
	})
}

//查看奖品详情
export const getPrizeInfo = ({ dispatch }) =>{
	const vd = {"uuid":uuid};
	$.post("h5/getPicInfo",vd,function(res){
			dispatch('SET_PRIZE_INFO',res.raDefPicList)
	})
}

//查看活动详情
export const getActiveInfo = ({ dispatch }) =>{
	const vd = {"uuid":uuid};
	$.post("h5/getDesc",vd,function(res){
			dispatch('SET_ACTIVE_INFO',res.desc)
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
		$.post("h5/writeRewardInfo",vd,function(res){
			dispatch('QUIT_DIALOG');
		})
	}
	
}

//填写领奖信息
export const writeInfo = ({ dispatch,state },dia) =>{
	dispatch('SET_DIALOG',dia);
}

//设置tab切换
export const setList = ({ dispatch },dia) =>{
	dispatch('SET_LIST_CONT',dia);
}
