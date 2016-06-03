<!-- <script>
	import store from '../vuex/festival/actions';
	export default {
		store,
	}
</script>

<template>
	<div class="container">
		<div class="head">
			<div class="river">
				<div class="boat">					
				</div>
			</div>
			<div class="tips">
				友谊的小船已红划了40米，还差260米即有机会领取丰富大奖，快来帮他吧！
			</div>
			<div class="get-gift">
				划龙舟，拿大奖
			</div>
			<div class="my-gift">
				<a href="javascript:;">查看我的奖品</a>>
			</div>
		</div>
		<div class="content">
			<div class="tab-group">
				<div class="tab" v-link="{path:'/index/list',activeClass:'current'}">
					好友助力榜
				</div>
				<div class="tab"  v-link="{path:'/index/active',activeClass:'current'}">
					活动详情
				</div>
				<div class="tab"  v-link="{path:'/index/prize',activeClass:'current'}">
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
	.river{
		margin-top: 1rem;
		width: 100%;
		height: 14.175rem;
		background:url('../assents/images/river.png') center top no-repeat;
		background-size: 100% auto;
		position: relative;
	}
	.boat{
		width: 2.675rem;
		height: 2.775rem;
		background: url('../assents/images/boat.png') center center no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: -.5rem;
		left: 10rem;
	}
	.tips{
		width: 13.05rem;
		margin:.5rem auto;
		font-size: .55rem;
		color: white;
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
		margin-top: .9rem;
		font-size: .6rem;
		text-align: center;
		color: #f8f2c7;
	}
	.my-gift a{
		color: #f8f2c7;
	}
	.content{
		.tab-group{
			margin-top: 1rem;
			text-align: center;
			font-size: 0;

			.tab{
			display: inline-block;
			width: 5.15rem;
			height: 2.8rem;
			background: url('../assents/images/tab-btn.png') center center no-repeat;
			background-size: 100% 100%;
			font-size: .65rem;
			line-height: 2.8rem;
			color: white;
			text-align: center;
			}
			 .current{
				background: url('../assents/images/tab-btn-hover.png') center center no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	
	
	.footer{
		margin-top: .75rem;
		.count{
		text-align: center;
		font-size: .6rem;
		}

		.list-order{
			width: 14rem;
			margin: .5rem auto;
			border:.125rem solid #32200e;
			border-radius: .3rem;
			background-color: #fff2e5;
			padding: 0;
			list-style: none;
			
			li{
				margin: 0;
				border-top: 1px solid #ccd;
			}
			li:first-of-type{
				border-top: none;
			}

			.item-icon{
				float: left;
				padding: .375rem .5rem;
					
					img{
						width:1.7rem;
						height: 1.7rem;
						border-radius: 50%;
					}
			}

			.item-info{
				padding: .375rem 0;
				.item-name{
					font-size: .6rem;
					color: #333;	
				}

				.item-tips{
					font-size: .6rem;
					color: #666;
					margin-top: .2rem;	
				}

			}
		}

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
	
</style> -->