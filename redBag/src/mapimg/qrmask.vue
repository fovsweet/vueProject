<script type="text/javascript">
	module.exports = {
		props:['show','words','maskqr'],
		methods:{
			close:function(){
				this.show = false;
			}
		}
	}
</script>

<template>
	<div v-show="show" class="share-container" transition="share">
		<div class="share-content">
			<div class="share-text-no">
				<p>{{{words}}}</p>
			</div>
			<div>
			<img class="wx-img" :src="maskqr" alt=""  />
			</div>
			<div class="share-info">
				<p>微信扫一扫</p>
				<p>长按识别二维码</p>
			</div>
			<img class="close-icon" v-tap="close()" id="close-icon" src="img/close-icon.png" alt="" />
		</div>
	</div>
</template>


<style type="text/css">
.share-container {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(0,0,0,.8);
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
	transition:opacity .3s ease;
	-webkit-transition: opacity .3s ease;
	-moz-transition: opacity .3s ease;
}


.share-content {
	font-size: .75rem;
	color: #fff;
	text-align: center;
}

.share-content p {
	margin: 0;
	color: #fff;
}

.share-text p:last-of-type{
	margin: 1.25rem 0 0 0;
}

.share-text-no p{
	line-height: 1.5rem;
	font-size: .75rem;
}

.share-info {
	margin-top: 1.12rem;
}

.share-info p {
	color: #fff;
	line-height: 1rem;
	font-size: .6rem;
}

.wx-img {
	margin-top: 1.95rem;
	width: 7.67rem;
	height: 7.67rem;
	position: relative;
	z-index: 999;
}

.close-icon {
	margin-top: 1.95rem;
	width: 1.7rem;
}

.share-enter, .share-leave {
    opacity: 0;
}

/* .share-enter .share-container,
.share-leave .share-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
} */

</style>