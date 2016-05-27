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
<div  class="dia-mask" transition="dia" >
	<div  class="dia-container forbid-help">
		<a href="javascript:;" class="dia-close" @click="quiteDia"></a>
		<div class="forbid-area">
		<p>新爱的John:</p>
		<p>您已经帮20个好友助力了人缘太好了！</p>
		<p>因本次活动限制，不能再帮其他好友助力了哦。</p>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.forbid-help{
		width: 12.75rem;
		height: 11.1rem;
		background: url('../static/img/forbid-help.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 3.8rem;
	}
	.forbid-area{
		width: 100%;
		font-size: .75rem;
		text-align: left;
		padding-left: .5rem;
		padding-right: .5rem;

		p{
			margin:.5rem;
		}
	}
</style>