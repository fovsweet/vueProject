<script>
	import { quiteDia } from '../vuex/festival/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia
			},
			getters:{
				festivalInfo:state => state.festivalInfo
			}
		}
	}
</script>
<template>
<div  class="dia-mask" transition="dia" @click.stop.prevent="quiteDia">
	<div  class="dia-container follow">
		<!-- <a href="javascript:;" class="dia-close" @click="quiteDia"></a> -->
		<div class="follow-area">
			<img :src="festivalInfo.qrUrl">
			<div class="follow-word">
			<div>关注我们</div>
			<div class="col">即有机会把{{festivalInfo.prizeName}}领回家</div>
			</div>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.follow{
		width: 12.5rem;
		height: 16.5rem;
		background: url('../assents/images/festival/follow.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 5rem;
	}
	.follow-area{
		text-align: center;
		line-height: 1;

		img{
			width: 8.5rem;
			height: 8.5rem;
			margin-bottom: .5rem;
		}

		.follow-word{
			color: #222;
			font-size: .6rem;
			line-height: 1.2;

			.col{
				color: #ff8033;
			}
		}

	}
</style>