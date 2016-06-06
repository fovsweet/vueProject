webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _myCenterIndex = __webpack_require__(203);

	var _myCenterIndex2 = _interopRequireDefault(_myCenterIndex);

	var _cacl = __webpack_require__(202);

	var _cacl2 = _interopRequireDefault(_cacl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default(_myCenterIndex2.default);

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(204)
	__vue_script__ = __webpack_require__(208)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\myCenterCom\\myCenterIndex.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(209)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./myCenterIndex.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(107)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./myCenterIndex.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./myCenterIndex.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(100)();
	// imports


	// module
	exports.push([module.id, "[v-cloak] {\n  display: none;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #f5f5f5;\n}\na {\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n.blur-bg {\n  /* background-image: url(../assents/images/2.jpg); */\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 6.9rem;\n  position: absolute;\n}\n.blure {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n  /* background-image: url(../assents/images/2.jpg); */\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 6.9rem;\n  position: absolute;\n}\n.center-mask {\n  width: 100%;\n  height: 6.9rem;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.container {\n  width: 320px;\n  height: 6.9rem;\n  position: relative;\n  /* background-image: url(../assents/images/default-bg.png);\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center; */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-flex-direction: row;\n  -webkit-justify-content: space-between;\n  display: -webkit-box-flex;\n  -webkit-box-align: center;\n  -webkit-box-pack: justify;\n}\n.container img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 3.05rem;\n  height: 3.05rem;\n  border-radius: 50%;\n  border: .125rem solid white;\n  margin-left: .75rem;\n}\n.container span {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.container .name {\n  width: 9.5rem;\n  font-size: .75rem;\n  color: #fff;\n  margin-left: .75rem;\n  margin-right: .75rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.container .arrow {\n  width: .375rem;\n  height: .6rem;\n  background: url(" + __webpack_require__(206) + ") center center no-repeat;\n  background-size: 100% 100%;\n  margin-right: .75rem;\n  /* position: absolute;\n\t\ttop: 50%;\n\t\tmargin-top: -.3rem;\n\t\tright: .75rem; */\n}\n.nav {\n  width: 100%;\n  height: 1.875rem;\n  background-color: white;\n  /* border-bottom: 1px solid #e8e8e8; */\n  font-size: 0;\n  margin-bottom: .5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  position: relative;\n  z-index: 2;\n}\n.nav .line {\n  border-right: 1px solid #e8e8e8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1.25rem;\n  margin-left: -1px;\n  -webkit-transform: scaleX(0.5);\n  -webkit-transform-origin: 0 0;\n}\n.nav a {\n  box-sizing: border-box;\n  line-height: 1.875rem;\n  padding-left: .75rem;\n  padding-right: .75rem;\n  color: #333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  display: -webkit-box-flex;\n  -webkit-box-pack: justify;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.nav a span {\n  font-size: .6rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-box-flex;\n}\n.nav a .nav-num {\n  font-size: .65rem;\n  width: 3rem;\n  -webkit-justify-content: flex-end;\n  -webkit-box-pack: end;\n}\n.nav:after {\n  content: \"\";\n  position: absolute;\n  bottom: -1px;\n  left: 0px;\n  right: 0px;\n  border-bottom: 1px solid #e8e8e8;\n  -webkit-transform: scaleY(0.5);\n  -webkit-transform-origin: 0 0;\n}\n.link:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #e8e8e8;\n  -webkit-transform: scaleY(0.5);\n  -webkit-transform-origin: 0 0;\n}\n.link {\n  width: 100%;\n  height: 2.2rem;\n  background-color: white;\n  box-sizing: border-box;\n  font-size: 0;\n  position: relative;\n  /* border-top:1px solid #e8e8e8; */\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.link div {\n  font-size: .6rem;\n  color: #333;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-box;\n}\n.link img {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 50%;\n}\n.link .phone {\n  width: .75rem;\n  height: .75rem;\n  background: url(" + __webpack_require__(207) + ") center center no-repeat;\n  background-size: 100% 100%;\n  margin-left: .75rem;\n  margin-right: .5rem;\n}\n.link .adviser {\n  -webkit-box-flex: 10;\n}\n.link .free {\n  -webkit-box-flex: 3;\n  -webkit-box-pack: end;\n}\n.link .ln-0 {\n  line-height: 0;\n}\n.link .arrow {\n  width: .375rem;\n  height: .6rem;\n  background: url(" + __webpack_require__(206) + ") center center no-repeat;\n  background-size: 100% 100%;\n  margin-right: .75rem;\n  margin-left: .75rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 206:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENzNDODEwRDI5NjAxMUU2QkYyOUZBRDlFQUNERTVGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENzNDODEwRTI5NjAxMUU2QkYyOUZBRDlFQUNERTVGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3M0M4MTBCMjk2MDExRTZCRjI5RkFEOUVBQ0RFNUZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3M0M4MTBDMjk2MDExRTZCRjI5RkFEOUVBQ0RFNUZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vEt6EAAAAV9JREFUeNqU1D8ohHEcx/HnzqGUJFGuRDaDMiiLfwlXJBZ/ssjyLCaTxWYxmazKwEIM8ifdnT8ptjMI5TKc5RYDpRQp72991C3c17dew9Nzn3t+z+/3/T6RMAwD6gr1GMFN4KwoShBHI07R/p/wFwbwhBqk0OkNWz2gG4+owjH6vWGrHLpwjwrsaw9cYau8VnCNcuxg0hu2ekafTqAUm5j1hq1eMIgzncYa5rxhqzcM4QgRrGLBG7Z6xxh2db2MJW/Y6gMT2ND1IlZsNTFnM1kjzeBTmzdvvREN/FVb0Lr2Z7fecAPO0arXmMKFZ9nNSKNJGziOA7tRLNyiQYnr6EZx8nPzr3CbBqROTTOMy8If/BbuUHNUq10TyHg6rAdJBfO6znh6255wiEqNqAXvPFNlbbinWc4qmPXM8zS2UWaHr2DO8yWx79a6Ns/erVfvWrRiOoYtDb59h1+9/fotwACAFEatdbE8AAAAAABJRU5ErkJggg=="

/***/ },

/***/ 207:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzA5NEI2QTI4QUUxMUU2QkEzQUFDMUU3QjA3MTM4QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzA5NEI2QjI4QUUxMUU2QkEzQUFDMUU3QjA3MTM4QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIzMDk0QjY4MjhBRTExRTZCQTNBQUMxRTdCMDcxMzhDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIzMDk0QjY5MjhBRTExRTZCQTNBQUMxRTdCMDcxMzhDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7BnQswAAA0RJREFUeNqsl3lIVFEUxmdeZlHUZAtJC4EVJkVoUVSYkbRRRrQvWBTRBJmlZBu00PJHBUWUZWGrYZPQvhCUthC07/1ROEW0khhKZNuYTd+Jb+Bymfdm3rwO/Ji33Pu+984995wzbq/X67KwpmAW6Q22gnWu/2BxFvemge2gPfgCboFHYcYZoC/4A56C+miEjTDXGoFdwAeCYCFIBCPBWW1sO3Af3OWvH6THIiyiR8ACcBmkgiKQCTaBCZq3joM0notXuoAKMNeusDx8OjgBxoBO4Am4AJaDKcrYzSADvAQDQAIo4MvvA9t4HFE4CywB5RQfDG6AbmAjSAEzOHYSyAfvwVBwh8siwTeWXy/3zwOPlXArcABUgWyQDM6BOjAQrAYvGEA9ODYAxlNctYuc8wqMArdBdzPhpQwU+eLPoIRukomPlfEtwEn+5jKgwtlz0B9c4YuK+DBduDGYz7X00c1pdO9DZawb7KfLD4LiCPFTwxeX4GxNT+SowrJGbfjQIIXruIdVywOT+TI5UeaJeu6Q0PhCBuU/4SG8GNqjg8A1iodMoncLv0IC64fNRLWbX/8VLJPnGdx7v8BbJdA+KZM6gDK+pATe6xizZIXycVnysHhQSzeLHeIgF++VMXOt5zo5sVB0/4zj2iUqN+doSSKdghscimYw0r9LdhThjyRckcija7O5h2M1D/e+i8HmN0wG9mTaa2Ak1zgQlW14GHQFe3gctjp5mKubMxofOHTxSjCOaXWxWZFw0yXJPC9yKDqcQVlNzwXMhPO10vfNgWhnUMpjKS7vzKpTM7BWm3yKpdGuxXO5JP+vYsUzLYsi0FK73wfcY721YztAP3A6lCKthN+wjuome/wqmBml6GwWHT+Pg5GEJW2useg2S9ihGBaiqezXJElMNPmQsMElLloEfivXypnPC9n+nGE91i2B6yqxMg88s9tl7mS/VcvzFFaqXCZ5aZFugiRlThM2fkmcfzSW9lbsEgOqEnTk5vcyqYj14jXpr0awN8vkCxU4begrKX6MD9+r3W+r9dlV7EIDsTb0qom7R3PtrUxy+lTwIdr9ZkQxpoE51mvx92QFuG5noxs2xhazU6zWrvvYT9uyvwIMAIs5uz/JBa9fAAAAAElFTkSuQmCC"

/***/ },

/***/ 208:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		el: '#app',
		data: function data() {
			return {
				name: '',
				bgImg: 'url("../images/default-bg.png")',
				headImg: '../images/default-bulm.png',
				linkImg: '',
				ccCount: '',
				collectCount: '',
				ccUrl: '',
				collectUrl: '',
				linkUrl: '',
				centerUrl: ''

			};
		},
		created: function created() {
			var vThis = this;
			var setData = {};
			setData.openId = openId;
			setData.mchId = mchId;
			setData.appId = appId;
			$.get('getUserInfo', setData, function (res) {
				var data = res.data;
				if (res.msg == 'success') {
					vThis.name = data.nickName;
					if (data.headImgUrl != '' && data.headImgUrl != null) {
						vThis.bgImg = 'url(' + data.headImgUrl + ')';
						vThis.headImg = data.headImgUrl;
					}
					vThis.centerUrl = data.personalDataUrl;
					vThis.ccCount = data.ccCount;
					vThis.collectCount = data.collectCount;
					vThis.ccUrl = data.ccUrl;
					vThis.collectUrl = data.collectUrl;
					if (data.staffHeadImgUrl != '' && data.staffHeadImgUrl != null) {
						vThis.linkImg = data.staffHeadImgUrl;
					}
					vThis.linkUrl = data.staffUrl;
				}
			});
		}
	};
	// </script>
	//
	// <template>
	// <div v-cloak>
	// 	<div class="blur-bg"  :style="{backgroundImage:bgImg}"></div>
	// 	<div class="blure" :style="{backgroundImage:bgImg}"></div>
	// 	<div class="center-mask"></div>
	// 	<a :href="centerUrl">
	// 	<div class="container">	
	// 		<!-- <div class="header"> -->
	// 			<img :src="headImg">
	// 			<span class="name">{{name}}</span>
	// 		<!-- </div> -->
	// 		<span class="arrow"></span>
	// 	</div>
	// 	</a>
	// 	<div class="nav">
	// 		<a :href="ccUrl">
	// 			<span>我的卡包</span>		
	// 			<span class="nav-num">{{ccCount}}</span>		
	// 		</a>
	// 		<div class="line"></div> 
	// 		<a :href="collectUrl">
	// 			<span>我的收藏</span>		
	// 			<span class="nav-num">{{collectCount}}</span>		
	// 		</a>
	// 	</div>
	// 	<a :href="linkUrl">
	// 	<div class="link">
	// 		<div class="phone"></div>
	// 		<div class="adviser">联系您的家居顾问</div>
	// 		<div class="free" v-if="linkImg == ''">免费获取</div>
	// 		<div class="free ln-0" v-if="linkImg != ''"> <img :src="linkImg"> </div>
	// 		<div class="arrow"></div>
	// 	</div>
	// 	</a>
	// </div>
	// </template>
	//
	// <style lang="less">
	// 	[v-cloak] {
	// 		  display: none;
	// 		}
	// 	html,body{
	// 		margin:0;
	// 		padding: 0;
	// 		background-color: #f5f5f5;
	// 	}
	// 	a{
	// 		text-decoration: none;
	// 		-webkit-tap-highlight-color: rgba(0,0,0,0);
	// 		-webkit-tap-highlight-color: transparent;
	// 	}
	// 	.blur-bg{
	// 		/* background-image: url(../assents/images/2.jpg); */
	// 		background-size: 100% auto;
	// 		background-repeat: no-repeat;
	// 		background-position: center center;
	// 		width: 100%;
	// 		height: 6.9rem;
	// 		position: absolute;
	// 	}
	// 	.blure{
	// 		filter: blur(3px);
	// 		/* background-image: url(../assents/images/2.jpg); */
	// 		background-size: 100% auto;
	// 		background-repeat: no-repeat;
	// 		background-position: center center;
	// 		width: 100%;
	// 		height: 6.9rem;
	// 		position: absolute;
	// 	}
	// 	.center-mask{
	// 		width: 100%;
	// 		height: 6.9rem;
	// 		position: absolute;
	// 		background-color: rgba(0,0,0,0.3);
	// 	}
	// 	.container{
	// 		width: 320px;
	// 		height: 6.9rem;
	// 		position: relative;
	// 		/* background-image: url(../assents/images/default-bg.png);
	// 		background-size: 100% 100%;
	// 		background-repeat: no-repeat;
	// 		background-position: center center; */
	// 		display: flex;
	// 		-webkit-align-items:center;
	// 		-webkit-flex-direction:row;
	// 		-webkit-justify-content:space-between;
	//
	// 		display:-webkit-box-flex;
	// 		-webkit-box-align:center;
	// 		-webkit-box-pack:justify;
	//
	// 		img{
	// 			display:flex;
	// 			width: 3.05rem;
	// 			height: 3.05rem;
	// 			border-radius: 50%;
	// 			border: .125rem solid white;
	// 			margin-left: .75rem;
	// 		}
	//
	// 		span{
	// 			display:flex;
	// 		}
	//
	// 		.name{
	// 			width: 9.5rem;
	// 			font-size: .75rem;
	// 			color: #fff;
	// 			margin-left: .75rem;
	// 			margin-right: .75rem;
	// 			overflow: hidden;
	// 			text-overflow: ellipsis;
	// 			white-space: nowrap;
	// 		}
	// 		.arrow{
	// 			width: .375rem;
	// 			height: .6rem;
	// 			background: url(../assents/images/arrow-right.png) center center no-repeat;
	// 			background-size: 100% 100%;
	// 			margin-right: .75rem;
	//
	// 			/* position: absolute;
	// 			top: 50%;
	// 			margin-top: -.3rem;
	// 			right: .75rem; */
	// 		}
	// 	}
	// 	.nav{
	// 		width: 100%;
	// 		height: 1.875rem;
	// 		background-color: white;
	// 		/* border-bottom: 1px solid #e8e8e8; */
	// 		font-size: 0;
	// 		margin-bottom: .5rem;
	// 		display: flex;
	// 		-webkit-align-items:center;
	// 		display:-webkit-box;
	// 		-webkit-box-align:center;
	//
	// 		position: relative;
	// 		z-index: 2;
	//
	// 		.line{
	// 			border-right: 1px solid #e8e8e8;
	// 			display: flex;
	// 			height: 1.25rem;
	// 			margin-left: -1px;
	// 			-webkit-transform:scaleX(.5);
	// 	 		-webkit-transform-origin:0 0;
	// 			}
	//
	// 		a{
	// 			box-sizing: border-box;
	// 			line-height: 1.875rem;
	// 			padding-left: .75rem;
	// 			padding-right: .75rem;
	// 			color: #333;
	// 			display: flex;
	// 			-webkit-justify-content:space-between;
	// 			display: -webkit-box-flex;	
	// 			-webkit-box-pack:justify;
	// 			flex: 1;
	//
	// 			span{
	// 				font-size: .6rem;
	// 				display: flex;
	// 				display: -webkit-box-flex;
	// 			}
	//
	// 			.nav-num{
	// 				font-size: .65rem;
	// 				width: 3rem;
	// 				-webkit-justify-content:flex-end;
	// 				-webkit-box-pack:end;
	// 			}
	// 		}
	//
	// 	}
	// 	.nav:after{
	// 	  content:"";
	// 	  position: absolute;
	// 	  bottom:-1px;
	// 	  left:0px;
	// 	  right:0px;
	// 	  border-bottom:1px solid #e8e8e8;
	// 	  -webkit-transform:scaleY(.5);
	// 	  -webkit-transform-origin:0 0;
	// 	}
	// 	.link:before{
	// 		content: "";
	// 		position: absolute;;
	// 		top: 0;
	// 		left: 0;
	// 		right:0;
	// 		border-bottom: 1px solid #e8e8e8;
	// 		-webkit-transform:scaleY(.5);
	// 	  	-webkit-transform-origin:0 0;
	// 	}
	// 	.link{
	// 		width:100%;
	// 		height: 2.2rem;
	// 		background-color: white;
	// 		box-sizing: border-box;
	// 		font-size: 0;
	// 		position: relative;
	// 		/* border-top:1px solid #e8e8e8; */
	//
	// 		display: flex;
	// 		-webkit-align-items:center;
	// 		display:-webkit-box;
	// 		-webkit-box-align:center;
	//
	// 		div{
	// 			font-size: .6rem;
	// 			color: #333;
	// 			display: flex;
	// 			display:-webkit-box;
	//
	// 		}
	//
	// 		img{
	// 			width: 1.75rem;
	// 			height: 1.75rem;
	// 			border-radius: 50%;
	// 		}
	//
	// 		.phone{
	// 			width: .75rem;
	// 			height: .75rem;
	// 			background: url(../assents/images/01.png) center center no-repeat;
	// 			background-size: 100% 100%;
	// 			margin-left: .75rem;
	// 			margin-right: .5rem;
	// 		}
	//
	// 		.adviser{
	// 			-webkit-box-flex: 10
	// 		}
	//
	// 		.free{
	// 			-webkit-box-flex: 3;
	// 			-webkit-box-pack:end;
	//
	// 		}
	//
	// 		.ln-0{
	// 			line-height: 0;
	// 		}
	//
	// 		.arrow{
	// 			width: .375rem;
	// 			height: .6rem;
	// 			background: url(../assents/images/arrow-right.png) center center no-repeat;
	// 			background-size: 100% 100%;
	// 			margin-right: .75rem;
	// 			margin-left: .75rem;
	// 		}
	// 	}
	// </style>

/***/ },

/***/ 209:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n<div v-cloak>\r\n\t<div class=\"blur-bg\"  :style=\"{backgroundImage:bgImg}\"></div>\r\n\t<div class=\"blure\" :style=\"{backgroundImage:bgImg}\"></div>\r\n\t<div class=\"center-mask\"></div>\r\n\t<a :href=\"centerUrl\">\r\n\t<div class=\"container\">\t\r\n\t\t<!-- <div class=\"header\"> -->\r\n\t\t\t<img :src=\"headImg\">\r\n\t\t\t<span class=\"name\">{{name}}</span>\r\n\t\t<!-- </div> -->\r\n\t\t<span class=\"arrow\"></span>\r\n\t</div>\r\n\t</a>\r\n\t<div class=\"nav\">\r\n\t\t<a :href=\"ccUrl\">\r\n\t\t\t<span>我的卡包</span>\t\t\r\n\t\t\t<span class=\"nav-num\">{{ccCount}}</span>\t\t\r\n\t\t</a>\r\n\t\t<div class=\"line\"></div>  \r\n\t\t<a :href=\"collectUrl\">\r\n\t\t\t<span>我的收藏</span>\t\t\r\n\t\t\t<span class=\"nav-num\">{{collectCount}}</span>\t\t\r\n\t\t</a>\r\n\t</div>\r\n\t<a :href=\"linkUrl\">\r\n\t<div class=\"link\">\r\n\t\t<div class=\"phone\"></div>\r\n\t\t<div class=\"adviser\">联系您的家居顾问</div>\r\n\t\t<div class=\"free\" v-if=\"linkImg == ''\">免费获取</div>\r\n\t\t<div class=\"free ln-0\" v-if=\"linkImg != ''\"> <img :src=\"linkImg\"> </div>\r\n\t\t<div class=\"arrow\"></div> \r\n\t</div>\r\n\t</a>\r\n</div>\r\n";

/***/ }

});