
//设置弹框为哪个组件
export const sharGetPrize = ({ dispatch },dia) =>{
	dispatch('SET_DIALOG',dia);
}

//隐藏弹框
export const quiteDia = ({ dispatch }) =>{
	dispatch('QUIT_DIALOG');
} 


