<script>
	import store from '../vuex/store.js';
	import share from './diaShare';
	import successHelp from './diaSuccessHelp.vue';
	import forbid from './diaForbid.vue';
	import follow from './diaFollow.vue';
	import win from './diaWin.vue';
	import look from './diaLookprize.vue';
	import writeInfo from './diaWriteinfo.vue';
	import begin from './diaBegin.vue';
	import over from './diaOver.vue';
	import listInfo from './listInfo.vue';
	import activeInfo from './activeInfo.vue';
	import prizeInfo from './prizeInfo.vue';
	import {sharGetPrize,quiteDia,initData,getPrizeList,setList} from '../vuex/actions';

	export default {
		el:'#app',
		store,
		vuex:{
			actions:{
				sharGetPrize,initData,getPrizeList,setList
			},
			getters:{
				currentDialog:state=> state.dialog,
				initDialog:state => state.initDia,
				festivalInfo:state => state.festivalInfo,
				boatMove:state => state.boatMove,
				remainLotteryTimes:state => state.remainLotteryTimes,
				currentList:state => state.currentList
			}
		},
		components:{
			share,successHelp,forbid,follow,win,look,writeInfo,begin,over,activeInfo,listInfo,prizeInfo
		},
		ready(){
			var load = document.querySelector('.loading');
			load.style.opacity = 0;
			load.style.zIndex = -1;
		},
		compiled(){
			this.initData();
		}
	}
</script>

<template>
	<div class="container" v-cloak  v-bind:style="{backgroundImage:festivalInfo.backUrl}">
		<div class="head">
			<div class="river">
				<div class="boat" :style="{top:boatMove.top,left:boatMove.left,opacity:boatMove.boatOp,transition:boatMove.ani}">					
				</div>
			</div>
			<div class="tips" >
				{{festivalInfo.tips}}
			</div>
			<div class="get-gift" v-bind:class="{'get-gift-gray':remainLotteryTimes == '0'}"  @click="sharGetPrize(initDialog)">
				{{festivalInfo.btnName}}
			</div>
			<div class="my-gift" v-if="festivalInfo.hitPrize">
				<a href="javascript:;" @click="getPrizeList('look')">查看我的奖品</a>
			</div>
		</div>
		<!-- 显示何种弹窗组件 start -->
		<component :is="currentDialog"></component>
		<!-- 显示何种弹窗组件 end-->
		<div class="content">
			<div class="tab-group">
				<div class="tab" @click="setList('listInfo')" :class="{'current':currentList == 'listInfo'}">
					好友助力榜
				</div>
				<div class="tab" @click="setList('activeInfo')" :class="{'current':currentList == 'activeInfo'}">
					活动详情
				</div>
				<div class="tab" @click="setList('prizeInfo')" :class="{'current':currentList == 'prizeInfo'}">
					奖品介绍
				</div>
			</div>
		</div>
		<component :is="currentList" keep-alive></component>
	</div>
</template>

<style lang="less">
	body{
		height: 100%;
		margin: 0;
		background-color: #493119;
	}
	div{
		box-sizing: border-box;
	}
	a{
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent; 
	}
	.clearfix{
		zoom: 1;
	}
	.clearfix:after{
		content: '';
		display:block;
		clear: both;
	}
	[v-cloak] {
	  display: none;
	}
	.container{
		/*background:url('../static/img/newbg.jpg') center top no-repeat;*/
		background-size: 100% auto;
		background-repeat: no-repeat;
	}
	.river{
		width: 100%;
		height: 14.5rem;
		background:url('../static/img/river.png') center top no-repeat;
		background-size: 100% auto;
		position: relative;
	}
	.boat{
		width: 3rem;
		height: 3.1rem;
		background: url('../static/img/boat.png') center center no-repeat;
		background-size: 100% 100%;
		position: absolute;
		transition: all 0s ease-in;
		opacity: 0
	}
	.tips{
		width: 16rem;
		height: 2.875rem;
		background: url('../static/img/river-tips.png') center center no-repeat;
		background-size: 100% 100%;
		font-size: .55rem;
		color: white;
		line-height: 1.5;
		padding: .6rem 1.5rem;
		display: table-cell;
		vertical-align: middle;
		word-break: break-all;
	}
	.get-gift{
		width: 10rem;
		height: 2.25rem;
		border-radius: 2.25rem;
		background-color: #ffeb55;
		font-size: .9rem;
		text-align: center;
		color: #333;
		line-height: 2.25rem;
		margin:0 auto;
	}
	.get-gift-gray{
		background-color: #ccc!important;
	}
	.my-gift{
		width: 6rem;
		height: 1.125rem;
		line-height: 1.125rem;
		border-radius:1.125rem;
		text-align: center;
		margin: .5rem auto 0 auto;
		font-size: .6rem;
		color: #f8f2c7;
		background-color: rgba(56,38,19,.9);
	}
	.my-gift a{
		display: inline-block;
		color: #f8f2c7;

	}
	.content{
		.tab-group{
			margin-top: .75rem;
			text-align: center;
			font-size: 0;

			.tab{
			display: inline-block;
			width: 5.15rem;
			height: 2.8rem;
			background: url('../static/img/tab-btn.png') center center no-repeat;
			background-size: 100% 100%;
			font-size: .65rem;
			line-height: 2.8rem;
			color: #dfdfdf;
			text-align: center;
			}
			 .current{
				background: url('../static/img/tab-btn-hover.png') center center no-repeat;
				background-size: 100% 100%;
				color: white;
			}
		}
	}


	/*弹框样式*/
	.dia-mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right:0;
		width: 100%;
		height: 100%;
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
	.dia-enter, .dia-leave {
	    opacity: 0;
	}

	.dia-enter .dia-container,
	.dia-leave .dia-container {
	  /*   -webkit-transform: scale(1.1);
	  transform: scale(1.1); */
	}

	.dia-close{
		display: inline-block;
		position: absolute;
		top: 1rem;
		right: 0rem;
		width: 1.2rem;
		height: 1.2rem;
		background: url(../static/img/close.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.dia-container {
		position:relative;
		background-color: #fff;
		transition: all .3s ease;
		-webkit-transition: all .3s ease;
		-moz-transition: all .3s ease;
	}
</style>