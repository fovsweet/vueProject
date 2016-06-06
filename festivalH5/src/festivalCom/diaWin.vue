<script>
	import { quiteDia } from '../vuex/festival/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia
			},
			getters:{
				getPrize:state => state.getPrize
			}
		}
	}
</script>
<template>
<div  class="dia-mask" transition="dia" @click.stop.prevent="quiteDia">
	<div  class="dia-container win">
		<!-- <a href="javascript:;" class="dia-close" @click="quiteDia"></a> -->
		<div class="win-area" v-show="getPrize.isGet">
			<div class="win-word">恭喜您中奖啦!</div>
			<img :src="getPrize.url">
			<div class="prize">{{getPrize.name}}</div>
		</div> 
		<div class="lose-area" v-show="!getPrize.isGet">
			<div class="lose-word">{{getPrize.name}}</div>
			<img src="../assents/images/festival/lose.png">
		</div>
	</div>
</div>
</template>
<style lang="less">
	.win{
		width: 9.675rem;
		height: 12.15rem;
		background: url('../assents/images/festival/win.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 4.4rem;
	}
	.win-area{
		text-align: center;

		img{
			width: 3.5rem;
			height: 3.5rem;
			margin-top: .6rem;
			margin-bottom: .6rem;
		}

		.win-word{
			color: #222;
			font-size: .75rem;

		}

		.prize{
			font-size: .6rem;
		}
	}
	.lose-area{
		padding-top: .35rem;

		.lose-word{
			color: #222;
			font-size: .75rem;
		}

		img{
			margin-top: .75rem;
			width: 2.25rem;
			height:3.65rem;
		}
	}
</style>