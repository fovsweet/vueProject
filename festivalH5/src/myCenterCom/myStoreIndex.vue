<script>
	var count = 0;
	export default {
	  el:'#app',
	  data: {
	    content: [],
	    busy: false,
	    popShow:false,
	    page:0
	  },
	  ready(){
	  },
	  methods: {
	   loadMore: function() {
	      this.busy = true;
	      var _ = this;
	      var vd = {};
	      vd.mchId = mchId;
	      vd.openId = openId;
	      vd.page = this.page;
	      $.get('http://rap.taobao.org/mockjsdata/4347/getCollectList',vd,function(res){
        		_ .content = _.content.concat(res.data.content);
        		_.page += 1;
          })
          this.busy = false;
	    },
	    setting:function(){
	    	this.popShow = true;
	    },
	    quitPop:function(){
	    	this.popShow =false;
	    }
	}
}
</script>

<template>

<div v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
	<div>
	 	<div class="list-item" v-for="data in content">
	 		<div class="no-use">
	 			<span>已失效</span>
	 		</div>
	 		<img class="list-img" v-lazy="data.picSmallUrl">
	 		<div class="list-info">
	 			<h1>{{data.title}}</h1>
	 			<div class="action-wraper">
		 			<div class="timer">{{data.createTime}}</div>
		 			<div class="action" @click="setting"></div>
	 			</div>
	 		</div>
	 	</div>
	 	<div v-show="notMore" class="not-more">
	 		没有更多数据
	 	</div>
 	</div>
 	<div v-show="popShow" class="pop-mask" transition="pop" @click="quitPop">
		<div  class="pop-container">
			<div class="quitCollect">取消收藏</div>
			<div class="quit">关闭</div>
		</div>
	</div> 
	<a class="kefu" href="http://www.baidu.com">
		<img src="../assents/images/22.jpg">
	</a>
</div>
</template>

<style lang="less">
	html,body{
		margin: 0;
		padding: 0;
		line-height: 1;
	}
	a,div{
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent; 
	}
	.list-item{
		display: flex;
		/* -webkit-align-items:center; */

		display: -webkit-box;
		/* -webkit-box-align:center; */
		position: relative;
		height: 4.25rem;

		.list-img{
			width: 3.25rem;
			height: 3.25rem;
			border-radius: 4px;
			margin:.5rem .5rem .5rem .75rem;
			background-size: 100% 100%;
		}

		.list-info{
			flex:1;
			-webkit-box-flex:1;

			display: flex;
			flex-direction:column;
			-webkit-align-content:space-between;
			display: -webkit-box;
			box-orient:vertical;
			-webkit-box-align:space-between;

			position: relative;
			height: 100%;
			margin-right: .75rem;

			h1{
				line-height: 1;
				font-size: .65rem;
				font-weight: normal;
				color: #333;
				padding: 0;
				margin-top: .75rem;
				display: flex;
				display: -webkit-box;
			}

		}

		.action-wraper{
			display: flex;
			-webkit-justify-content:justify;
			-webkit-align-items:center;

			display:-webkit-box;
			-webkit-box-pack:justify;
			-webkit-box-align:center;
			
			width: 100%;
			position: absolute;
			bottom: .75rem;
			line-height: 0;

			.timer{
				font-size: .65rem;
				color: #999;
				line-height: 1;
			}

			.action{
				width: .85rem;
				height: .5rem;
				background: url(../assents/images/action.png) no-repeat;
				background-position: center center;
				background-size:100% auto;
			}
		}
	}
	
	.not-more{
		width: 16rem;
		display: table-cell;
		vertical-align: center;
	}

	.no-use{
		font-size: .6rem;
		width: 3.25rem;
		height: 3.25rem;
		border-radius: 4px;
		position: absolute;
		top: .5rem;
		left: .75rem;
		display: flex;
		-webkit-align-items:center;
		-webkit-justify-content:center;
		display: -webkit-box;
		-webkit-box-pack:center;
		-webkit-box-align:center;

		span{
			background-color: #ccc;
			display: inline-block;
			padding: .1rem .2rem;
			border-radius: 2px;
		}
	}

	.list-item:after{
	  content:"";
	  position: absolute;
	  bottom:-1px;
	  left:0px;
	  right:0px;
	  border-bottom:1px solid #e8e8e8;
	  -webkit-transform:scaleY(.5);
	  -webkit-transform-origin:0 0;

	}

	.kefu{
		display: inline-block;
		position: fixed;
		bottom: .75rem;
		right: .75rem;

		img{
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
		}
	}

	/* 弹框 start */
	.pop-mask {
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
	.pop-container{
		position: absolute;
		background-color: #fff;
		width: 15rem;
		height: 4.425rem;
		border-radius: 4px;
		bottom: .5rem;
		left: .5rem;
		right: .5rem;
		transition: all .3s ease;
		-webkit-transition: all .3s ease;
		-moz-transition: all .3s ease;

		display: flex;
		flex-direction: column;

		display: -webkit-box;
		-webkit-box-orient:vertical;
	}

	.quitCollect,.quit{
		flex: 1;
		box-flex:1;
		display: flex;
		-webkit-align-items:center;
		-webkit-justify-content:center;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;

		font-size: .75rem;
		color: #666;
		position: relative;
	}

	.quitCollect:after{
		 content:"";
		 position: absolute;
		 bottom:-1px;
		 left:0px;
		 right:0px;
		 border-bottom:1px solid #282828;
		 -webkit-transform:scaleY(.5);
		 -webkit-transform-origin:0 0;
	}

	.pop-enter, .pop-leave {
	    opacity: 0;
	}

	.pop-enter .pop-container,
	.pop-leave .pop-container {
	    transform: translateY(5rem);
		-webkit-transform:translateY(5rem);
	}

	/* 弹框 end */
</style>

