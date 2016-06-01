<script>
	import { quiteDia,sharGetPrize,writeInfo } from '../vuex/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia,sharGetPrize,writeInfo
			},
			getters:{
				prizeList:state => state.prizeList
			}
		}
	}
</script>
<template>
<div  class="dia-mask" transition="dia" >
	<div  class="dia-container look">
		<a href="javascript:;" class="dia-close" @click="quiteDia"></a>
		<div class="look-area">
			<h1>查看奖品</h1>
			<h2>请在公众号"我的卡包"查看领奖信息</h2>
			<div class="list" v-if="prizeList.length > 0">
				<p v-for="data in prizeList">{{$index}}.{{data.raRewardName}}</p>
			</div> 
			<div class="no-prize" v-if="prizeList.length < 1">
				<img src="../static/img/lose.png">
			</div> 
			<div class="btn" @click="writeInfo('writeInfo')">填写领奖信息</div>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.look{
		width: 12.75rem;
		height: 16rem;
		background: url('../static/img/look-prize.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 4rem;
	}
	.look-area{
		width: 100%;
		font-size: .75rem;
		color: #222;
		padding: 0 1.5rem;

		h1{
			font-size: .9rem;
			font-weight: normal;
		}

		h2{
			font-size: .6rem;
			font-weight: normal;
			color: #666;
		}

		.list{
			text-align: left;
			min-height:4rem;

			p{
				margin-top: .75rem;
				margin-bottom: 0;
				font-size:.6rem;
			}
		}

		.btn{
			width: 6.75rem;
			height: 1.75rem;
			line-height: 1.75rem;
			color: #222;
			text-align: center;
			border-radius: 1.75rem;
			border: 2px solid #222;
			margin:.75rem auto;
			background-color: #ffeb55;
		}

		.no-prize{

			img{
				margin-top: .6rem;
				width: 2.25rem;
				height:3.65rem;
			}
		}

	}
</style>