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
<div  class="dia-mask" transition="dia" >
	<div  class="dia-container forbid-help">
		<a href="javascript:;" class="dia-close" @click="quiteDia"></a>
		<div class="forbid-area">
		<p>亲爱的{{festivalInfo.replyUserName}}:</p>
		<p>您已经帮{{festivalInfo.perLimit}}个好友助力了,人缘太好了您呐,</p>
		<p>因本次活动限制,不能再帮其他好友助力了哦</p>
		</div>
	</div>
</div>
</template>
<style lang="less">
	.forbid-help{
		width: 12.75rem;
		height: 11.1rem;
		background: url('../assents/images/festival/forbid-help.png') center center no-repeat;
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