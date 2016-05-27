<script>
	export default {
		ready(){
			console.log(111);
		}
	}
</script>

<template>
	<div class="footer">
			<div class="count">
				<div class="count-info">已有2位好友帮了友谊的小船</div> 
			</div>
			<ul class="list-order">
				<li class="clearfix">
					<div class="item-icon">
						<img src="../static/img/1315539365.jpg">
					</div>
					<div class="item-info">
						<div class="item-name">徐克</div>
						<div class="item-tips">帮你划了40米，快来感谢我</div>
					</div>
				</li>
				<li class="clearfix">
					<div class="item-icon">
						<img src="../static/img/1315539365.jpg">
					</div>
					<div class="item-info">
						<div class="item-name">徐克</div>
						<div class="item-tips">帮你划了40米，快来感谢我</div>
					</div>
				</li>
				<li class="clearfix">
					<div class="item-icon">
						<img src="../static/img/1315539365.jpg">
					</div>
					<div class="item-info">
						<div class="item-name">徐克</div>
						<div class="item-tips">帮你划了40米，快来感谢我</div>
					</div>
				</li>
				<li class="clearfix">
					<div class="item-icon">
						<img src="../static/img/1315539365.jpg">
					</div>
					<div class="item-info">
						<div class="item-name">徐克</div>
						<div class="item-tips">帮你划了40米，快来感谢我</div>
					</div>
				</li>
			</ul>
		</div>
</template>

<style lang="less">
	.footer{
		margin-top: .5rem;

		.count{
			text-align: center;
			font-size: 0;

			.count-info{
				text-align: center;
				display: inline-block;
				height: 1.125rem;
				line-height: 1.125rem;
				padding: 0 1.125rem;
				border-radius: 1.125rem;
				background-color: rgba(132,113,93,1); 
				font-size: .6rem;
				margin:0 auto;
				color: #333;
			}
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

	}
</style>