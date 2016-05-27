<script>
	import { quiteDia,sharGetPrize } from '../vuex/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia,sharGetPrize
			}
		}
	}
</script>
<template>
<div  class="dia-mask" transition="dia" >
	<div  class="dia-container wirte">
		<a href="javascript:;" class="dia-close" @click="quiteDia"></a>
		<div class="wirte-area">
			<h1>填写领奖信息</h1>
			<div class="info">
				<label>姓名</label>
				<input type="text" >
				<label>联系电话</label>
				<input type="text" >
				<label>您附近的体验馆或收货地址</label>
				<input type="text" >
			</div>
			<div class="btn" @click="sharGetPrize('win')">提交</div>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.wirte{
		width: 12.75rem;
		height: 18.675rem;
		background: url('../static/img/info.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 4.5rem;
	}
	.wirte-area{
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
				margin-bottom: .5rem;
				padding-left: .25rem;
				display: block;
				padding: 0;
				border:1px solid #eee;
				background-color: #fff;
				outline:medium;
				border-radius: 0;
				-webkit-appearance:none;
				
			}
		}

		.btn{
			width: 4.5rem;
			height: 1.75rem;
			line-height: 1.75rem;
			color: #222;
			text-align: center;
			border-radius: 1.75rem;
			border: 2px solid #222;
			margin:.25rem auto;
			background-color: #ffeb55;
		}
	}
</style>