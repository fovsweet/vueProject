<script>
	import { getPrizeInfo } from '../vuex/actions';

	export default {
		ready(){
			this.getPrizeInfo()
			console.log(111);
		},
		vuex:{
			getters:{
				prizeInfo:state => state.prizeInfo
			},
			actions:{
				getPrizeInfo
			}
		}
	}
</script>

<template>
	<div class="footer" keep-alive>
		<div class="prize">
			<template v-for="data in prizeInfo">
				<img :src="data.raDefPicUrl">
			</template>
			
		</div>
	</div>
</template>

<style lang="less">
	.footer{
		margin-top: .5rem;

		.prize{
			width: 14rem;
			margin: .5rem auto;
			border:.125rem solid #32200e;
			border-radius: .3rem;
			background-color: #fff2e5;
			box-sizing: border-box;
			font-size: .6rem;
			color: #666;
			line-height: 1.5;

			img{
				width: 100%;
			}
		}
	}
</style>