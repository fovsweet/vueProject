<script>
	import { quiteDia,sharGetPrize,pushInfo } from '../vuex/festival/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia,sharGetPrize,pushInfo
			},
			getters:{
				getPrizeInfo:state => state.getPrizeInfo
			}
		},
		ready(){
			$('.dia-mask')[0].style.height=document.body.clientHeight;
		}
	}
</script>
<template>
<div class="fix-mask"></div>
<div  class="dia-mask mask-abs" transition="dia" >
	<div  class="dia-container wirte">
		<a href="javascript:;" class="dia-close" @click="quiteDia"></a>
		<div class="wirte-area">
			<h1>填写领奖信息</h1>
			<div class="info">
				<label>姓名</label>
				<input type="text" v-model="getPrizeInfo.username">
				<label>联系电话</label>
				<input type="text" v-model="getPrizeInfo.telphone">
				<label>您附近的体验馆或收货地址</label>
				<input type="text" v-model="getPrizeInfo.address">
			</div>
			<div class="rbtn" @click="pushInfo()">提交</div>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.fix-mask{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,0.8);
	}
	.mask-abs{
		position: absolute!important;
		background: transparent!important;
	}
	.wirte{
		width: 12.75rem;
		height: 18.675rem;
		background: url('../assents/images/festival/info.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 4.75rem;
	}
	.wirte-area{
		position: relative;
		width: 100%;
		font-size: .75rem;
		color: #222;
		padding: 0 1.5rem;

		h1{
			font-size: .75rem;
			font-weight: normal;
			margin:0;
		}
		
		.info{
			text-align: left;

			label{
				margin-bottom: .25rem;
				font-size: .6rem;
				color: #666;
				display: block;
			}
			input{
				width: 9.75rem;
				height: 1.75rem;
				font-size: .75rem;
				margin-bottom: .5rem;
				padding-left: .25rem;
				display: block;
				border:1px solid #eee;
				background-color: #fff;
				outline:medium;
				border-radius: 0;
				-webkit-appearance:none;
				padding: 0;
				padding-left: .2rem;
				
			}
		}

		.rbtn{
			width: 4.5rem;
			height: 1.75rem;
			line-height: 1.65rem;
			color: #222;
			text-align: center;
			border-radius: 1.75rem;
			border: 2px solid #222;
			margin:.75rem auto;
			background-color: #ffeb55;
		}
	}
</style>