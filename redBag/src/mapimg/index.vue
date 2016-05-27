<script type="text/javascript">

	var qrmask = require('./qrmask');
	var dialog = require('./dialog');
	module.exports = {
			el:'#map',
			data:function(){
				return	{
					mainId:'123',  
					showMask:false, //是否显示蒙层
					maskQr:'',  //蒙层显示的二维码
					showDia:false,  //弹框显示
					words:'',  //  蒙层显示的文字
					staffName:'',  //店员名字
					staffPic:'',  //店员头像
					staffDesc:''  //店员描述短语
				}
			},
			created:function(){
				this.init();
			},
			methods:{
				init:function(){
					var vThis = this;	
					$.ajax({
		                url:"/webchat/act/openRedPage",
		                type:"POST",
		                data:{"redId":rid},
		                success: function(data) {
		                   vThis.staffName = data.staffName;
		                   vThis.staffPic = data.staffPic;
		                   vThis.staffDesc = data.redDescr;
		                }
		            })
				},

				openBag:function(){
					var vThis = this;
					$.ajax({
		                url:"/webchat/act/openRed",
		                type:"POST",
		                data:{"redId":rid},
		                success: function(data) {
		                    if(data.leftNum > 0){
		                    	vThis.words = '关注【公众号】,领取红包啦';
		                    	vThis.maskQr = data.qrCode;
		                    	vThis.showMask = true;
		                    }else{
		                    	vThis.words = '您来晚了，红包被抢光啦！<br>关注【公众号】有更多商家优惠';
		                    	vThis.maskQr = data.qrCode;
		                    	vThis.showMask = true;
		                    }
		                }
		            })
				},

				lookOthers:function(){
					var vThis = this;
					$.ajax({
						url:'/webchat/act/receivedList',
						type:'POST',
						data:{'redId':rid,'openId':openId},
						success:function(data){
							if(data.receivedNum == 0){
								vThis.showDia = true;
							}else{
								window.location.href= redJournalUrl;
							}
						}
					})
				}
			},
			components:{
				qrmask,dialog
			}
	}
</script>

<template>
	<div class="container" v-cloak>
		<div class="header-img">
			<div class="icon">
				<img :src="staffPic">
			</div>
		</div>
		<div class="title">{{staffName}}</div>
		<div class="random">{{staffDesc}}</div>
		<div class="chance">每个微信号只有一次机会喔</div>
		<div class="btn" v-tap="openBag()">开红包</div>
		<div class="list"><a href="javascript:;" v-tap='lookOthers()'>看看大家的手气&nbsp;>></a></div>
	</div>
	<qrmask :show.sync="showMask" :words.sync="words" :maskqr.sync="maskQr"></qrmask>
	<dialog :show.sync="showDia"></dialog>
</template>

<style lang='less'>
	html,body{
		height: 100%;
	}
	body{
		margin: 0;
		background-color: #ffefed;
	}
	[v-cloak] {
	  display: none;
	}
	div,img{
		box-sizing: border-box;
		text-align: center;
		-webkit-tap-highlight-color:rgba(255,255,255,0)
	}

	.container{
		width: 100%;
		height: 100%;
		background:url('img/redbg.png') center top no-repeat;
		background-size:100% auto;
		padding-top: 7.35rem;

		.header-img{
			width: 3rem;
			height: 3rem;
			margin:0 auto;
			border-radius:50%;
			padding: .125rem;
			background-color: white;
			
			.icon{
				height: 100%;
			}

			img{
				width: 100%;
				height: 100%;
				border:.1rem solid #d31a60;
				border-radius: 50%;
			}
		}

		.title{
			height: .7rem;
			font-size: .7rem;
			text-align: center;
			line-height: 1;
			padding-top: .45rem;
			color: white;
		}

		.random{
			padding-top: 1.875rem;
			font-size: .9rem;
			line-height: 1.2;
			width: 12.7rem;
			margin:0 auto;
			color: #f7ff15;
			min-height: 3rem;
		}

		.chance{
			padding-top: 1rem;
			padding-bottom: 0.575rem;
			font-size: .65rem;
			color: #ffffff;
			opacity: .85;
		}
		.btn{
			margin:0 auto;
			width: 10.575rem;
			height: 2.45rem;
			background: url('img/btn.png') center center no-repeat;
			background-size: 100%; 
			font-size: .9rem;
			color: #e71836;
			line-height: 2.2rem;
		}
		.list{
			font-size: .65rem;
			padding-top: 1rem;

			a{
				color: #f7ff15;
				text-decoration: none;
				display: inline-block;
				padding: .5rem;
			}
		}
	}


</style>