
//设置弹框为哪个组件
export const sharGetPrize = ({ dispatch },dia) =>{
	dispatch('SET_DIALOG',dia);
	console.log(dia);
}

//隐藏弹框
export const quiteDia = ({ dispatch }) =>{
	dispatch('QUIT_DIALOG');
} 

//初始化数据
export const initData = ({ dispatch },data) =>{
	dispatch('INIT_DATA',data.helpInfoVo);
}


