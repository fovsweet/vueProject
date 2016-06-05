<script>
	export default {
		el:'#app',
		data(){
			return{
				name:'',
				bgImg:'',
				headImg:'/src/assents/images/mycenter/default-bulm.png',
				linkImg:'',
				ccCount:'',
				collectCount:'',
				ccUrl:'',
				collectUrl:'',
				linkUrl:'',

			}
		},
		ready(){
			var vThis = this;
			$.post('http://rap.taobao.org/mockjsdata/4347/getDesc?',{},function(res){
				var data = res.data;
				if(res.msg == 'success'){
					vThis.name = data.nickName;
					vThis.bgImg = 'url('+data.headImgUrl+')';
					vThis.headImg = data.headImgUrl;
					vThis.linkImg = data.staffHeadImgUrl;
					vThis.ccCount = data.ccCount;
					vThis.collectCount = data.collectCount;
					vThis.ccUrl = data.ccUrl;
					vThis.collectUrl = data.collectUrl;
					vThis.linkUrl = data.staffUrl;
				}
			})
		}
	}
</script>

<template>
<div v-cloak>
	<div class="blur-bg"  :style="{backgroundImage:bgImg}"></div>
	<div class="blure" :style="{backgroundImage:bgImg}"></div>
	<a href="http://www.baidu.com">
	<div class="container">	
		<!-- <div class="header"> -->
			<img :src="headImg">
			<span class="name">{{name}}</span>
		<!-- </div> -->
		<span class="arrow"></span>
	</div>
	</a>
	<div class="nav">
		<a :href="ccUrl">
			<span>我的卡包</span>		
			<span class="nav-num">{{ccCount}}</span>		
		</a>
		<div class="line"></div>  
		<a :href="collectUrl">
			<span>我的卡包</span>		
			<span class="nav-num">{{collectCount}}</span>		
		</a>
	</div>
	<a :href="linkUrl">
	<div class="link">
		<div class="phone"></div>
		<div class="adviser">联系您的家居顾问</div>
		<div class="free" v-if="linkImg == ''">免费获取</div>
		<div class="free ln-0" v-if="linkImg != ''"> <img :src="linkImg"> </div>
		<div class="arrow"></div> 
	</div>
	</a>
</div>
</template>

<style lang="less">
	[v-cloak] {
		  display: none;
		}
	html,body{
		margin:0;
		padding: 0;
		background-color: #f5f5f5;
	}
	a{
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent; 
	}
	.blur-bg{
		/* background-image: url(../assents/images/mycenter/2.jpg); */
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center center;
		width: 100%;
		height: 6.9rem;
		position: absolute;
	}
	.blure{
		filter: blur(3px);
		/* background-image: url(../assents/images/mycenter/2.jpg); */
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: center center;
		width: 100%;
		height: 6.9rem;
		position: absolute;
	}
	.container{
		width: 100%;
		height: 6.9rem;
		position: relative;
		/* background-image: url(../assents/images/mycenter/default-bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center center; */
		display: flex;
		-webkit-align-items:center;
		-webkit-flex-direction:row;
		-webkit-justify-content:space-between;

		display:-webkit-box-flex;
		-webkit-box-align:center;

		img{
			display:flex;
			width: 3.05rem;
			height: 3.05rem;
			border-radius: 50%;
			border: .125rem solid white;
			margin-left: .75rem;
		}

		span{
			display:flex;
		}

		.name{
			width: 8.5rem;
			font-size: .75rem;
			color: #333;
			margin-left: .75rem;
			margin-right: .75rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.arrow{
			width: .375rem;
			height: .6rem;
			background: url(../assents/images/mycenter/arrow-right.png) center center no-repeat;
			background-size: 100% 100%;
			margin-right: .75rem;

			/* position: absolute;
			top: 50%;
			margin-top: -.3rem;
			right: .75rem; */
		}
	}

	.nav{
		width: 100%;
		height: 1.875rem;
		background-color: white;
		border-bottom: 1px solid #e8e8e8;
		font-size: 0;
		margin-bottom: .5rem;
		display: flex;
		-webkit-align-items:center;
		display:-webkit-box;
		-webkit-box-align:center;

		position: relative;
		z-index: 2;

		.line{
			border-right: 1px solid #e8e8e8;
			display: flex;
			height: 1.25rem;
			margin-left: -1px;
			}

		a{
			box-sizing: border-box;
			line-height: 1.875rem;
			padding-left: .75rem; 
			padding-right: .75rem;
			color: #333;
			display: flex;
			-webkit-justify-content:space-between;
			display: -webkit-box-flex;	
			-webkit-box-pack:justify;
			flex: 1;
			
			span{
				font-size: .6rem;
				display: flex;
				display: -webkit-box-flex;
			}
			
			.nav-num{
				font-size: .65rem; 
				width: 3rem;
				-webkit-justify-content:flex-end;
				-webkit-box-pack:end;
			}
		}
		
	}
	.link{
		width: 16rem;
		height: 2.2rem;
		background-color: white;
		box-sizing: border-box;
		font-size: 0;
		border-top:1px solid #e8e8e8;

		display: flex;
		-webkit-align-items:center;
		display:-webkit-box;
		-webkit-box-align:center;

		div{
			font-size: .6rem;
			color: #333;
			display: flex;
			display:-webkit-box;

		}

		img{
			width: 1.75rem;
			height: 1.75rem;
			border-radius: 50%;
		}

		.phone{
			width: .75rem;
			height: .75rem;
			background: url(../assents/images/mycenter/01.png) center center no-repeat;
			background-size: 100% 100%;
			margin-left: .75rem;
			margin-right: .5rem;
		}
			
		.adviser{
			-webkit-box-flex: 10
		}

		.free{
			-webkit-box-flex: 3;
			-webkit-box-pack:end;

		}

		.ln-0{
			line-height: 0;
		}

		.arrow{
			width: .375rem;
			height: .6rem;
			background: url(../assents/images/mycenter/arrow-right.png) center center no-repeat;
			background-size: 100% 100%;
			margin-right: .75rem;
			margin-left: .75rem;
		}
	}
</style>