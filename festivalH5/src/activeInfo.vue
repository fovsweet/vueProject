<script>
	import { getActiveInfo } from '../vuex/actions';
	export default {
		vuex:{
			getters:{
				activeInfo:state => state.activeInfo
			},
			actions:{
				getActiveInfo
			}
		},
		ready(){
			this.getActiveInfo();
		}
	}
</script>

<template>
	<div class="footer">
		<div class="detail">
			{{{activeInfo}}}
		</div>
	</div>
</template>

<style lang="less">
	.footer{
		margin-top: .5rem;

		.detail{
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
		}

		
	}
	
</style>