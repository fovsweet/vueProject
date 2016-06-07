<script>
	var count = 0;
	export default {
	  el:'#app',
	  data: {
	    data: [],
	    busy: false
	  },
	  ready(){
	  	for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
	  },
	  methods: {
	    loadMore: function() {
	      this.busy = true;
	      setTimeout(() => {
	        for (var i = 0, j = 10; i < j; i++) {
	          this.data.push({ name: count++ });
	        }
	        this.busy = false;
	      }, 1000);
	    }
	  }
	}
</script>

<template>
<div v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
 	<div class="list-item">
 		<div class="list-img">
 		</div>
 		<div class="list-info">
 			<h1>测试当中的例子</h1>
 			<div class="action-wraper">
	 			<div class="timer">2016-06-06 20:34:23</div>
	 			<div class="action">...</div>
 			</div>
 		</div>
 	</div>
</div>
</template>

<style lang="less">
	html,body{
		margin: 0;
		padding: 0;
		line-height: 1;
	}
	.list-item{
		display: flex;
		/* -webkit-align-items:center; */

		display: -webkit-box;
		/* -webkit-box-align:center; */
		position: relative;
		height: 2.5rem;

		.list-img{
			width: 2.6rem;
			height: 2rem;
			margin:.25rem;
			background: url('../assents/images/22.jpg') no-repeat;
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
				font-size: .8rem;
				line-height: 1.2;
				padding: 0;
				display: flex;
				display: -webkit-box;
			}

		}

		.action-wraper{
			display: flex;
			-webkit-justify-content:justify;

			display:-webkit-box;
			-webkit-box-pack:justify;
			
			width: 100%;

			.timer{
				font-size: .6rem;
			}

			.action{
				font-size: .75rem;
				margin-right: .75rem;
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
</style>

