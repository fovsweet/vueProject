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
	<div class="share-container" @click='quiteDia' transition="share">
   		<img src="../static/img/fenxiangzhiyin.png">
	</div>
</template>

<style lang="less">

.share-container {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(0,0,0,.8);
	transition:opacity .3s ease;
	-webkit-transition: opacity .3s ease;
	-moz-transition: opacity .3s ease;

	img{
		width: 12rem;
		float: right;
		margin-right: 1.25rem;
		margin-top: 1rem;
	}
}

.share-enter, .share-leave {
    opacity: 0;
}

</style>