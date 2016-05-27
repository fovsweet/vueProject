<script type="text/javascript">
	var share = require('./share');
	module.exports = {
		el:'#list',
		data:{
			'menu':'',
			'showShare':false,
			'listOrder':[],   //列表数据
			staffName:'',    //门店名字
			staffPic:'',    //门店头像
			staffQrUrl:'',  //门店二维码
			recevieDescr:'',	//领取情况说明
			isRecive:'', //当前角色是否领取
			reciveMoney:'0.00', //当前角色领取了多少钱,
			staffDesc:''  //店员红包描述短语
		},
		created:function(){
			this.init();
		},
		components:{
			share
		},
		methods:{
			showS:function(){
				this.showShare = true;
			},
			init:function(){
				var vThis = this;
				$.ajax({
		                url:"/webchat/act/receivedList",
		                type:"POST",
		                data:{"redId":rid,"openId":openId},
		                success: function(data) {
		                	if(data){
		                		vThis.staffName = data.staffName;
		                		vThis.staffPic = data.staffPic;
		                		vThis.staffQrUrl = data.qrCode;
		                		vThis.totlRedNum = data.totalRedNum;
		                		vThis.ReceiveNum = data.receivedNum;
		                		vThis.recevieDescr = data.recevieDescr;
		                		vThis.staffDesc = data.redDescr;
		                		vThis.isRecive = data.hadReceived;
		                		if(data.hadReceived){
		                			vThis.reciveMoney = data.receivedAmount;
		                		}
		                		if(data.content.length > 0){
		                			vThis.listOrder = data.content;
		                		}
		                	}
		                	
		                }
		            })
			}
		}
	}
</script>
<template >
	<div class="list-info">
		<div class="info">
			<div class="icon">
				<img :src="staffPic">
			</div>
		</div>
		<div class="info-name">
			{{staffName}}的红包
		</div>
		<div class="random">
			{{staffDesc}}
		</div>
		<div class="info-money">
			<div class="qr-code">
				<img :src="staffQrUrl">
			</div>
			<div class="qr-money">
				<template v-if="isRecive">
					<div class="qr-count">{{reciveMoney}}<span>元</span></div>
				</template>
				<template v-else>
					<div class="qr-words">扫描即可领红包</div>
				</template>
				<div class="qr-tips">微信扫一扫<br>长按识别二维码</div>
			</div>
		</div>
		<div class="info-tips">
			每个微信账号只有一次机会喔！
		</div>
	</div>
	<div class="list-store">
			<span>{{recevieDescr}}</span>
		</div>
	<ul class="list-item clearfix">
			<li v-for="item in listOrder">
				<div class="item-icon">
					<img :src="item.headUrl">
				</div>
				<div class="item-name">
					<div>{{item.wxNickname}}</div>
					<div class="item-time">{{item.sendTimeDescr}}</div>
				</div>
				<div class="item-money">
					<div class="item-num">{{item.money}}元</div>
					<div class="item-best" v-if="item.isBest == 1"><span class="best-icon"></span>手气最佳</div>
				</div>
			</li>
		</ul>
		<div class="share">
			<span @click='showS()'>分享红包 >></span>
		</div>

	<share :show.sync="showShare"></share>
</template>

<style lang='less'>
	html,body{
		width: 100%;
		margin:0;
	}
	div,img{
		box-sizing: border-box;
	}
	[v-cloak] {
	  display: none;
	}
	.ovHiden{
		overflow: hidden;
		height: 100%;
	}
	.clearfix{
		zoom: 1;
	}
	.clearfix:after{
		content: '';
		display:block;
		clear: both;
	}
	.list-info{
		height: 14rem;
		background: url('img/listbg.png') center top no-repeat;
		background-size:100% auto;

		.info{
			padding-top: 1.91rem;

			.icon{
				width: 2.55rem;
				height: 2.55rem;
				margin:0 auto;

				img{
					width: 100%;
					height: 100%;
					border:.1rem solid white;
					border-radius: 50%;
				}
			}	

		}

		.info-name{
			padding-top: .45rem;
			font-size: .76rem;
			color: #333;
			text-align: center;
		}
		
		.random{
			padding-top: .35rem;
			font-size: .6rem;
			height: .95rem;
			color: #666;
			text-align: center;
			width: 10.6rem;
			margin:0 auto;
		}
	}
	.info-money{
		width: 10.6rem;
		margin:0 auto;
		padding-top: 1rem;
		display: -webkit-box!important;
		display: -webkit-flex!important;
		display: -ms-flexbox!important;
		display: flex!important;
		line-height: 0;

		.qr-code{
			flex:1;
			text-align: left;

			img{
				width: 4.25rem;
				height: 4.25rem;
			}
		}
		.qr-money{
			flex:1;
			font-size: 2.3rem;
			color: #333;
			text-align: center;
			line-height: 1.2;

			span{
				font-size: .7rem;
			}
			
			.qr-count{
				height: 2.5rem;
				line-height: 2.5rem;
				font-size: 2.1rem;
			}
			.qr-words{
				height: 2.5rem;
				line-height: 2.5rem;
				font-size: .7rem;
			}

			.qr-tips{
				font-size: .6rem;
				color: #333;
				text-align: center;
			}
		}
	}

	.info-tips{
		text-align: center;
		color: #d84e43;
		font-size: .6rem;
		padding-top: .4rem;
	}

	.list-store{
		font-size: .6rem;
		line-height: 1;
		padding-left: .63rem;
		padding-top: .85rem;
		padding-bottom: .34rem;
		border-top: 1px solid #e8e8e8;
		border-bottom: 1px solid #e8e8e8;
		background-color: #f8f8f8;     

		span{
			color: #bbb;
		}
	}

	.list-item{
		list-style:none;	
		padding: 0;
		margin:0;
	}

	.list-item li{
		padding: .63rem;
		float: left;
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #e8e8e8;
		
		.item-icon{
			float: left;
			padding-right: .63rem;

			
			img{
				width:1.7rem;
				height: 1.7rem;
				border-radius: 50%;
			}
		}

		.item-name{
			float: left;
			font-size: .6rem;
			color: #333;
			line-height: 1.5;

			div.item-time{
				color: #bbb;
			}
		}

		.item-money{
			float:right;
			color: #333;
			font-size: .6rem;
			text-align: center;
			line-height: 1.5;

			.item-num{
				text-align: right;
				padding-right:.2rem; 
			}
			
			.item-best{
				color: #ffaf27;
				text-align: right;

				.best-icon{
				display: inline-block;
				width: .63rem;
				height: .63rem;
				margin-left: -0.63rem;
				margin-right: .2rem;
				background:url('img/best.png') center center no-repeat;
				background-size: 100%;
				}	
			}

		}
	}

	.share{
		padding-top: 2.3rem;
		color: #d84e43;
		font-size: .6rem;
		text-align: center;
		padding-bottom: 1.25rem;
	}
	
</style>