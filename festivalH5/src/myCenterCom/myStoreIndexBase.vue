<script>
	var count = 0;
	export default {
	  	el:'#app',
	  	data: function () {
      		return { content: [], b: [] }
	    },
	    ready: function () {
	      var me = this;
	      me.$options.vue = me;
	    },
	    /**
	     * 加载数据
	     * @param fn
	     */
	    loadListData: function (fn) {
	      var me = this.vue;
	      var vd = {};
	      vd.mchId = mchId;
	      vd.openId = openId;
	      $.ajax({
	        url: 'getCollectList',
	        data: vd,
	        type: 'GET',
	        success: function (data) {
	          fn(res.data.content)
	        }
	      });
	    },
	    methods: {
	      down_a: function () {
	      	alert(1)
	        var me = this
	        me.$options.loadListData(function (data) {
	            me.content = me.content.concat(data)
	            // 通过设置的key 方法下拉对象方法
	            // 如果没有更多数据。你可以 调用 me.ascroll.noData()
	            me.ascroll.resetload()
	        });

	      },
	      up_a: function () {
	      	alert(2)
	        var me = this
	        me.$options.loadListData(function (data) {
	              me.content = data
	              me.ascroll.resetload()
	        });
	      }
	    }
}
</script>

<template>
<div class="app" v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-up="up_a()" drapload-down="up_a()">
	<div>
	 	<div class="list-item" v-for="data in content">
	 		<img class="list-img" :src="data.picSmallUrl">
	 		<div class="list-info">
	 			<h1>{{data.title}}</h1>
	 			<div class="action-wraper">
		 			<div class="timer">{{data.createTime}}</div>
		 			<div class="action" @click=""></div>
	 			</div>
	 		</div>
	 	</div>
	 </div>
</div>
</template>

<style lang="less">
.dropload-up {
      position: relative;
      height: 0;
      overflow: hidden;
      font-size: 12px;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .dropload-refresh, .dropload-update, .dropload-load, .dropload-noData {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .dropload-load .loading {
      display: inline-block;
      height: 15px;
      width: 15px;
      border-radius: 100%;
      margin: 6px;
      border: 2px solid #666;
      border-bottom-color: transparent;
      vertical-align: middle;
      -webkit-animation: rotate 0.75s linear infinite;
      animation: rotate 0.75s linear infinite;
    }
    @-webkit-keyframes rotate {
      from {-webkit-transform:rotate(0deg);}
      to {-webkit-transform:rotate(360deg);}
    }
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
			/* background: url('../assents/images/22.jpg') no-repeat; */
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

