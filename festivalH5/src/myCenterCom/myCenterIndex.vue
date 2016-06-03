<script>
	export default {
		el:'#app'
	}
</script>

<template>
	<a href="http://www.baidu.com">
	<div class="container">	
		<div class="header">
			<img src="../assents/images/mycenter/default-bulm.png">
			<span class="name">浪漫满屋</span>
		</div>
		<span class="arrow">></span>
	</div>
	</a>
	<div class="nav">
		<a href="javascript:;">
			<span>我的卡包</span>		
			<span class="nav-num">5</span>		
		</a>
		<div class="line"></div>  
		<a href="javascript:;">
			<span>我的卡包</span>		
			<span class="nav-num">5</span>		
		</a>
	</div>
	<a href="www.baidu.com">
	<div class="link">
		<div class="phone"></div>
		<div class="adviser">联系您的家居顾问</div>
		<!-- <div class="free">免费获取</div> -->
		<div class="free"> <img src="../assents/images/mycenter/default-bulm.png"> </div>
		<div class="arrow"></div> 
	</div>
	</a>
</template>

<style lang="less">
	html,body{
		margin:0;
		padding: 0;
		background-color: #f5f5f5;
	}
	a{
		text-decoration: none;
	}
	.container{
		width: 100%;
		height: 6.9rem;
		position: relative;
		background-image: url(../assents/images/mycenter/default-bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center center;
		display: flex;
		-webkit-align-items:center;
		display:-webkit-box;
		-webkit-box-align:center;
	}
	.header{
		padding-left: 1.5rem;
		font-size: 0;

		img{
			width: 3.05rem;
			height: 3.05rem;
			border-radius: 50%;
			border: .125rem solid white;
			display:inline-block;
			vertical-align:middle
		}

		span{
			display:inline-block;
			vertical-align:middle
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
			position: absolute;
			top: 50%;
			margin-top: -.3rem;
			right: .75rem;
		}
	}
	.nav{
		width: 100%;
		height: 1.875rem;
		background-color: white;
		border-bottom: 1px solid #e8e8e8;
		font-size: 0;
		margin-bottom: .5rem;

		.line{
			border-right: 1px solid #e8e8e8;
			display: inline-block;
			height: 1.25rem;
			vertical-align: middle;
			margin-left: -1px;
			}

		a{
			box-sizing: border-box;
			display: inline-block;
			vertical-align: middle;
			width: 50%;
			line-height: 1.875rem;
			padding-left: .75rem; 
			padding-right: .75rem;
			font-size: .6rem;
			color: #333;
			
			span{
				display: inline-block;
			}
			
			.nav-num{
				font-size: .65rem; 
				float: right;
				width: 3rem;
				text-align: right;
			}
		}
		
	}
	.link{
		width: 16rem;
		height: 2.2rem;
		display: flex;
		-webkit-align-items:center;
		display:-webkit-box;
		-webkit-box-align:center;
		background-color: white;
		box-sizing: border-box;
		vertical-align: middle;
		font-size: 0;
		position: relative;

		div{
			font-size: .6rem;
			color: #333;
			vertical-align: middle;
			display: flex;
			display:-webkit-box;

		}

		img{
			width: 1.75rem;
			height: 1.75rem;
			border-radius: 50%;
			vertical-align: middle;
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
			-webkit-box-align:end;
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