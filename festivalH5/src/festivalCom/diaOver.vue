<script>
	export default {
		vuex:{
			getters:{
				festivalInfo:state => state.festivalInfo
			}
		}
	}
</script>

<template>
	<div  class="dia-mask" transition="dia" >
	<div  class="dia-container over">
		<!-- <a href="javascript:;" class="dia-close"></a> -->
		<img :src="festivalInfo.qrUrl">
		<div class="over-area"><span>关注我们</span> 更多精彩等着你~</div>
	</div>
</div>
</template>

<style lang='less'>
	.over{
		width: 12.15rem;
		height: 14.325rem;
		background: url('../assents/images/festival/over.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 3.4rem;

		img{
			width: 8.5rem;
			height: 8.5rem;
		}
	}
	.over-area{
		width: 100%;
		font-size: .6rem;
		color: #ff8033;
		margin-top: .5rem;

		span{
			color: #222;
		}
	}
</style>