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
	import {sharGetPrize,quiteDia,initData,getPrizeList} from '../vuex/actions';

	export default {
		store,
		vuex:{
			actions:{
				sharGetPrize,initData,getPrizeList
			},
			getters:{
				currentDialog:state=> state.dialog,
				initDialog:state => state.initDia,
				festivalInfo:state => state.festivalInfo,
				boatMove:state => state.boatMove

			}
		},
		components:{
			share,successHelp,forbid,follow,win,look,writeInfo,begin,over
		},
		ready(){
			var load = document.querySelector('.loading');
			load.style.opacity = 0;
			load.style.zIndex = -1;
		},
		compiled(){
			/*var vThis = this;
			this.$http.post("http://rap.taobao.org/mockjsdata/4090/getReplyInfo",{"uuid":1}).then(function(res){
				console.log(res.data);
				if(res.data.success){
					vThis.initData(res.data);
				}
			})*/
			this.initData();
		}
	}
</script>

<template>
	<div class="container" v-cloak>
		<div class="head">
			<div class="river">
				<div class="boat" :style="{top:boatMove.top,left:boatMove.left}">					
				</div>
			</div>
			<div class="tips" >
				{{festivalInfo.tips}}
			</div>
			<!-- 未集满，不能抽奖 -->
			<div class="get-gift"  @click="sharGetPrize('look')">
				{{festivalInfo.btnName}}
			</div>
			<!-- 已集满，可抽奖 -->
			<!-- <div class="get-gift"  v-if="festivalInfo.hitPrize " @click="sharGetPrize(initDialog)">
				 还剩余X次抽奖机会
			</div> -->
			<!-- <div class="get-gift"  v-if="festivalInfo.hitPrize " >
				 还剩余0次抽奖机会
			</div> -->
			<div class="my-gift" v-if="festivalInfo.hitPrize">
				<a href="javascript:;" @click="getPrizeList('look')">查看我的奖品</a>
			</div>
		</div>
		<!-- 显示何种弹窗组件 start -->
		<component :is="currentDialog"></component>
		<!-- 显示何种弹窗组件 end-->
		<div class="content">
			<div class="tab-group">
				<div class="tab" v-link="{path:'/list',activeClass:'current'}">
					好友助力榜
				</div>
				<div class="tab"  v-link="{path:'/active',activeClass:'current'}">
					活动详情
				</div>
				<div class="tab"  v-link="{path:'/prize',activeClass:'current'}">
					奖品介绍
				</div>
			</div>
		</div>
		 <router-view keep-alive></router-view>
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
		background:url('../static/img/newbg.jpg') center top no-repeat;
		background-size: 100% auto;
		padding-top: 1rem;
	}
	.river{
		width: 100%;
		height: 13.6rem;
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
		top: 1rem;
		left: 2.2rem;
		transition: all .5s ease-in;
	}
	.tips{
		width: 100%;
		height: 2.875rem;
		background: url('../static/img/river-tips.png') center center no-repeat;
		background-size: 100% 100%;
		font-size: .55rem;
		color: white;
		line-height: 1.5;
		padding: .6rem 1.5rem;
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
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
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