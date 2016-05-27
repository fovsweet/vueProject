<script>
	export default {
		ready(){
			console.log(222);
		}
	}
</script>

<template>
	<div class="footer" keep-alive>
		<div class="prize">
			<img src="../static/img/prize.png">
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
			padding: .75rem;
			font-size: .6rem;
			color: #666;
			line-height: 1.5;

			img{
				width: 100%;
			}
		}
	}
</style>