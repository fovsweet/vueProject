import vue from 'vue'
//设置弹框为哪个组件
export const sharGetPrize = ({ dispatch },dia) =>{
	dispatch('SET_DIALOG',dia);
}

//隐藏弹框
export const quiteDia = ({ dispatch }) =>{
	dispatch('QUIT_DIALOG');
} 

//初始化数据
export const initData = ({ dispatch },data) =>{
	//dispatch('INIT_DATA',data.helpInfoVo);
	const vd = {"uuid":uuid,"openId":wxopenId,"shareId":wxshareId};
	vue.http.post("http://rap.taobao.org/mockjsdata/4090/getReplyInfo",vd).then(function(res){
				console.log(res.data);
				if(res.data.success){
					dispatch('INIT_DATA',res.data.helpInfoVo)
				}
			})
}


