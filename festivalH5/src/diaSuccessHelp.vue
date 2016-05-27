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
<div  class="dia-mask" transition="dia" @click="quiteDia">
	<div  class="dia-container success-help">
		<a href="javascript:;" class="dia-close"></a>
		<div class="success-area">恭喜你,成功为好友划了3000米!</div>
	</div>
</div>
</template>
<style lang="less">
	.success-help{
		width: 13.075rem;
		height: 6.4rem;
		background: url('../static/img/helpd.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 4.4rem;
	}
	.success-area{
		width: 100%;
		font-size: .75rem;
	}
</style>