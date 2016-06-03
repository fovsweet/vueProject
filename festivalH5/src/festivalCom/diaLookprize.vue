<script>
	import { quiteDia,sharGetPrize,writeInfo } from '../vuex/festival/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia,sharGetPrize,writeInfo
			},
			getters:{
				prizeList:state => state.prizeList,
				getPrizeInfo:state => state.getPrizeInfo
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
				<p v-for="data in prizeList">{{$index+1}}.{{data.raRewardName}}</p>
			</div> 
			<div class="no-prize" v-if="prizeList.length < 1">
				<img src="../assents/images/festival/lose.png">
				<span class="no-pri">还没有奖品T.T</span>
			</div> 
			<div class="btn" @click="writeInfo('writeInfo')">{{getPrizeInfo.writeOrNot}}</div>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.look{
		width: 12.75rem;
		height: 16rem;
		background: url('../assents/images/festival/look-prize.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 4rem;
	}
	.look-area{
		width: 100%;
		font-size: .75rem;
		color: #222;
		padding: 0 .75rem;

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
			padding: 0 .75rem;

			p{
				margin-top: .75rem;
				margin-bottom: 0;
				font-size:.75rem;
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

			.no-pri{
				color:#a2a2a2;
				font-size:.45rem;
				display: block;
			}
		}

	}
</style>