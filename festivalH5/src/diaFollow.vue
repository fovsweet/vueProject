<script>
	import { quiteDia } from '../vuex/actions'
	export default  {
		vuex:{
			actions:{
				quiteDia
			}
		}
	}
</script>
<template>
<div  class="dia-mask" transition="dia" @click.stop.prevent="quiteDia">
	<div  class="dia-container follow">
		<!-- <a href="javascript:;" class="dia-close" @click="quiteDia"></a> -->
		<div class="follow-area">
			<img src="../static/img/qrcode.png">
			<div class="follow-word">
			关注我们&nbsp;<span>即有机会把XXX领回家</span>
			</div>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.follow{
		width: 12.5rem;
		height: 16.5rem;
		background: url('../static/img/follow.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 5rem;
	}
	.follow-area{
		text-align: center;

		img{
			width: 8.5rem;
			height: 8.5rem;
			margin-bottom: .75rem;
		}

		.follow-word{
			color: #222;
			font-size: .6rem;

			span{
				color: #ff8033;
			}
		}

	}
</style>