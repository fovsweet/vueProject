<script type="text/javascript">
	module.exports = {
		props:['show'],
		methods:{
			closeDia:function(){
				this.show = false;
			}
		}
	}
</script>
<template>
<div  class="dia-mask" transition="dia">
	<div  class="dia-container">
		 <a href="javascript:;" class="dia-close" @click='closeDia()'></a>
		<p class="sure-tips">
			<span class="sure-cont">暂时还没有人领红包哦，快来当第一个幸运者吧。</span>
		</p>
		<p class="close-btn" v-tap='closeDia'>我知道了</p>
	</div>
</div>
</template>
<style lang="less">

/* .dia-mask {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 1rem;
	background: rgba(0,0,0,.8);
	text-align: center;
	display: flex;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    display: -webkit-box;
	-webkit-box-pack: center;
	-webkit-box-align: center;
	font-family: 'SimSun';
	transition: opacity .3s ease;
	-webkit-transition: opacity .3s ease;
	-moz-transition: opacity .3s ease;
}

.dia-close{
	display: inline-block;
	position: absolute;
	top: -.5rem;
	right: -.5rem;
	height: 1.45rem;
	background: url(../assents/images/festival/close.png) center center no-repeat;
	background-size: 100%;
}

.dia-container {
	position:relative;
	font-size: .75rem;
	color: #000;
	text-align: center;
	width: 12rem;
	background-color: #fff;
	border-radius: .25rem;
	transition: all .3s ease;
	-webkit-transition: all .3s ease;
	-moz-transition: all .3s ease;
}

.sure-tips {
    width: 100%;
    margin: 0;
    text-align: center;
    height: 4rem;
    font-weight: normal;
    display: table;
    padding: .5rem;
    box-sizing: border-box;
}

.sure-cont{
	display: table-cell;
	vertical-align: middle;
}


.dia-enter, .dia-leave {
    opacity: 0;
}

.dia-enter .dia-container,
.dia-leave .dia-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
} */
</style>