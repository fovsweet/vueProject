/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//require('cacl');
	//require('zepto');
	var vueTap = __webpack_require__(1);
	//var Vue = require('vue');
	var app  = __webpack_require__(17);
	Vue.use(vueTap);

	var mapVue = new Vue(app);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 二哲 on 15/12/6.
	 */
	/*
	* 不带参数指令
	* v-tap=handler
	* or
	* 带参数指令
	* v-tap=handler($index,el,$event)
	*
	* !!!新增!!!
	* 把tapObj对象注册在原生event对象上
	* event.tapObj拥有6个值
	* pageX,pageY,clientX,clientY,distanceX,distanceY
	* 后面2个分别的手指可能移动的位置(以后可用于拓展手势)
	*
	* */
	;(function() {
	    var vueTap = {};
	    vueTap.install = function(Vue) {
	        Vue.directive('tap', {
	            isFn : true,
	            acceptStatement : true,
	            bind : function() {
	                 //bind callback
	            },
	            update : function(fn) {
	                var self = this;
	                    self.tapObj = {};

	                if(typeof fn !== 'function') {
	                    return console.error('The param of directive "v-tap" must be a function!');
	                }
	                self.handler = function(e) { //This directive.handler
	                    e.tapObj = self.tapObj;
	                    fn.call(self,e);
	                };
	                if(self.isPC()) {
	                    self.el.addEventListener('click',function(e) {
	                        e.preventDefault();
	                        fn.call(self,e);
	                    },false);
	                } else {
	                    this.el.addEventListener('touchstart',function(e) {

	                        if(self.modifiers.stop)
	                            e.stopPropagation();
	                        if(self.modifiers.prevent)
	                            e.preventDefault();
	                        self.touchstart(e,self);
	                    },false);
	                    this.el.addEventListener('touchend',function(e) {
	                        //e.preventDefault();
	                        self.touchend(e,self,fn);
	                    },false);
	                }
	            },
	            unbind : function() {},
	            isTap : function() {
	                var self   = this;
	                if(self.el.disabled){
	                  return false;
	                }
	                var tapObj = this.tapObj;
	                return this.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
	            },
	            isPC : function() {
	                var uaInfo = navigator.userAgent;
	                var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
	                var flag = true;
	                for (var i = 0; i < agents.length; i++) {
	                    if (uaInfo.indexOf(agents[i]) > 0) { flag = false; break; }
	                }
	                return flag;
	            },
	            touchstart : function(e,self) {
	                var touches = e.touches[0];
	                var tapObj = self.tapObj;
	                tapObj.pageX = touches.pageX;
	                tapObj.pageY = touches.pageY;
	                tapObj.clientX = touches.clientX;
	                tapObj.clientY = touches.clientY;
	                self.time = +new Date();
	            },
	            touchend : function(e,self) {
	                var touches = e.changedTouches[0];
	                var tapObj = self.tapObj;
	                self.time = +new Date() - self.time;
	                tapObj.distanceX = tapObj.pageX - touches.pageX;
	                tapObj.distanceY = tapObj.pageY - touches.pageY;

	                if (self.isTap(tapObj))
	                    self.handler(e);
	            }
	        });
	    };

	    if (true) {
	        module.exports = vueTap;
	    } else if (typeof define == "function" && define.amd) {
	        define([], function(){ return vueTap })
	    } else if (window.Vue) {
	        window.vueTap = vueTap;
	        Vue.use(vueTap);
	    }

	})();

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\mapimg\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\nodestudy\\spa-swiper\\src\\mapimg\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  background-color: #ffefed;\n}\n[v-cloak] {\n  display: none;\n}\ndiv,\nimg {\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n.container {\n  width: 100%;\n  height: 100%;\n  background: url(" + __webpack_require__(20) + ") center top no-repeat;\n  background-size: 100% auto;\n  padding-top: 7.35rem;\n}\n.container .header-img {\n  width: 3rem;\n  height: 3rem;\n  margin: 0 auto;\n  border-radius: 50%;\n  padding: .125rem;\n  background-color: white;\n}\n.container .header-img .icon {\n  height: 100%;\n}\n.container .header-img img {\n  width: 100%;\n  height: 100%;\n  border: .1rem solid #d31a60;\n  border-radius: 50%;\n}\n.container .title {\n  height: .7rem;\n  font-size: .7rem;\n  text-align: center;\n  line-height: 1;\n  padding-top: .45rem;\n  color: white;\n}\n.container .random {\n  padding-top: 1.875rem;\n  font-size: .9rem;\n  line-height: 1.2;\n  width: 12.7rem;\n  margin: 0 auto;\n  color: #f7ff15;\n  min-height: 3rem;\n}\n.container .chance {\n  padding-top: 1rem;\n  padding-bottom: 0.575rem;\n  font-size: .65rem;\n  color: #ffffff;\n  opacity: .85;\n}\n.container .btn {\n  margin: 0 auto;\n  width: 10.575rem;\n  height: 2.45rem;\n  background: url(" + __webpack_require__(21) + ") center center no-repeat;\n  background-size: 100%;\n  font-size: .9rem;\n  color: #e71836;\n  line-height: 2.2rem;\n}\n.container .list {\n  font-size: .65rem;\n  padding-top: 1rem;\n}\n.container .list a {\n  color: #f7ff15;\n  text-decoration: none;\n  display: inline-block;\n  padding: .5rem;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaYAAABiCAMAAAAsoYcnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMmaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTgxOUJDNzAyREYxMUU2QkI4RjkxM0U5MDNDOTcxNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMTgxOUJDODAyREYxMUU2QkI4RjkxM0U5MDNDOTcxNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExODE5QkM1MDJERjExRTZCQjhGOTEzRTkwM0M5NzE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExODE5QkM2MDJERjExRTZCQjhGOTEzRTkwM0M5NzE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+E7FeVQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADPUExURUxpcd0BMt0BMvzrVfzrVfzrVd0BMt0BMvzrVd0BMt0BMvzrVd0BMvzrVfzrVfzrVfzrVd0BMt0BMt0BMt0BMt0BMvzrVfzrVfzrVd0BMvzrVfzrVfzrVfzrVd0BMvzrVfzrVfzrVd0BMvzrVd0BMt0BMvzrVd0BMt0BMvzrVfzrVd0BMvzrVfzrVd0BMt0BMvzrVeEdNvzpVfnSUfGaSfzqVfOrS/vgU+xvQvvmVOEeNutuQvvlVOhSPvrfU+ZJPehUPuEgN+pnQetrQvOqS0UORW0AAAAvdFJOUwDk/v7z/aceHv25uPP4dx9X+nggd1h45KZzb07jpbjycbki/G9a1/lOIaf4+VnyjcF3qQAAAaxJREFUeNrt2FdSG0EUhtErgkZI5IxtDE7gBM0gIbKJ+1+TGQnbLMAPl6rzPWgB/6me7lLEuM76h3dzR0rU1F5v/Vu8rLP5ySwZm97s/FN6u2OQtGfq4I/Sm2lr5G1yd6y0OGmL1E6Lo3tpyhLJv3vN/bRth+x9j1hwMeV/7y3EvBXyNx89I+SvFxtGyN9G+IfoFfQzbPAawoRJmDAJkzBhEiZhwiRMwoRJmDAJkzBhEiZhwiRMwoRJmDAJkzBhEiZhwiRMwoRJmIQJkzBhEiZhwiRMwoRJmIQJkzBhEiZhwiRMwoRJmIQJkzAJEyb9T6YrG+TvKvpGyF8/hkbI32NcGiF/l3FxbIXsHV9EGZghe4MSpT61Q+5O6yemcn1iicydXJeGqdy7njIrPZQxU7n5ZY20X7zbRih+NL/1wIHK+cYb1I3PfrTKqPps2D83S6bO+8Ozu7FOK7pF6Xsfq0bI32qszFghezMrEW0zZK8dEdWsHXI3Wz0xxdqEJTI3sRajPrueMittxXNfD62R9ov3Jf5WtR2onG+8dhUvq5a7rSWzZGqp1V3++MzzG4aWIH7YkJosAAAAAElFTkSuQmCC"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var qrmask = __webpack_require__(23);
	var dialog = __webpack_require__(30);
	module.exports = {
		el: '#map',
		data: function data() {
			return {
				mainId: '123',
				showMask: false,
				maskQr: '',
				showDia: false,
				words: '',
				staffName: '',
				staffPic: '',
				staffDesc: '' };
		},
		created: function created() {
			this.init();
		},
		methods: {
			init: function init() {
				var vThis = this;
				$.ajax({
					url: "/webchat/act/openRedPage",
					type: "POST",
					data: { "redId": rid },
					success: function success(data) {
						vThis.staffName = data.staffName;
						vThis.staffPic = data.staffPic;
						vThis.staffDesc = data.redDescr;
					}
				});
			},

			openBag: function openBag() {
				var vThis = this;
				$.ajax({
					url: "/webchat/act/openRed",
					type: "POST",
					data: { "redId": rid },
					success: function success(data) {
						if (data.leftNum > 0) {
							vThis.words = '关注【公众号】,领取红包啦';
							vThis.maskQr = data.qrCode;
							vThis.showMask = true;
						} else {
							vThis.words = '您来晚了，红包被抢光啦！<br>关注【公众号】有更多商家优惠';
							vThis.maskQr = data.qrCode;
							vThis.showMask = true;
						}
					}
				});
			},

			lookOthers: function lookOthers() {
				var vThis = this;
				$.ajax({
					url: '/webchat/act/receivedList',
					type: 'POST',
					data: { 'redId': rid, 'openId': openId },
					success: function success(data) {
						if (data.receivedNum == 0) {
							vThis.showDia = true;
						} else {
							window.location.href = redJournalUrl;
						}
					}
				});
			}
		},
		components: {
			qrmask: qrmask, dialog: dialog
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(24)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\mapimg\\qrmask.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\nodestudy\\spa-swiper\\src\\mapimg\\qrmask.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./qrmask.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./qrmask.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".share-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n  -webkit-align-items: center;\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  font-family: 'SimSun';\n  transition: opacity .3s ease;\n  -webkit-transition: opacity .3s ease;\n  -moz-transition: opacity .3s ease;\n}\n.share-content {\n  font-size: .75rem;\n  color: #fff;\n  text-align: center;\n}\n.share-content p {\n  margin: 0;\n  color: #fff;\n}\n.share-text p:last-of-type {\n  margin: 1.25rem 0 0 0;\n}\n.share-text-no p {\n  line-height: 1.5rem;\n  font-size: .75rem;\n}\n.share-info {\n  margin-top: 1.12rem;\n}\n.share-info p {\n  color: #fff;\n  line-height: 1rem;\n  font-size: .6rem;\n}\n.wx-img {\n  margin-top: 1.95rem;\n  width: 7.67rem;\n  height: 7.67rem;\n  position: relative;\n  z-index: 999;\n}\n.close-icon {\n  margin-top: 1.95rem;\n  width: 1.7rem;\n}\n.share-enter,\n.share-leave {\n  opacity: 0;\n}\n/* .share-enter .share-container,\n.share-leave .share-container {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n} */\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['show', 'words', 'maskqr'],
		methods: {
			close: function close() {
				this.show = false;
			}
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div v-show=\"show\" class=\"share-container\" transition=\"share\">\n\t<div class=\"share-content\">\n\t\t<div class=\"share-text-no\">\n\t\t\t<p>{{{words}}}</p>\n\t\t</div>\n\t\t<div>\n\t\t<img class=\"wx-img\" :src=\"maskqr\" alt=\"\"  />\n\t\t</div>\n\t\t<div class=\"share-info\">\n\t\t\t<p>微信扫一扫</p>\n\t\t\t<p>长按识别二维码</p>\n\t\t</div>\n\t\t<img class=\"close-icon\" v-tap=\"close()\" id=\"close-icon\" src=\"" + __webpack_require__(29) + "\" alt=\"\" />\n\t</div>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABHCAMAAACNrMETAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAOEaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjA3NmViODMtYTZjMC0wZDRlLThhZjUtMDI4OWIxODhiNDU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg0MEM0ODI5MDJCNDExRTY4QzI5Qjg0NEJCRDZFQkVBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg0MEM0ODI4MDJCNDExRTY4QzI5Qjg0NEJCRDZFQkVBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRlNjIxYTJlLTAzMTYtMzc0Ny1iNzA1LWQyYmE3YTM2N2FhNiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQxZWIyZTgwLTAyNGYtMTFlNi1hMGFmLTgzOThlYzBlM2NjYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvyZpFUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAABHVBMVEVMaXFDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkJDQkLMzMyMi4uNjY2NjIyLi4uurq6oqKiysbGFhISMjIxiYWGAgIBubW2BgIC0tLSBgYGEg4NCXK8RAAAATXRSTlMAHQIH0mLy2BwB8AOok97R+mCr2RUUyATa77BK97RjL68P6SytWVMT5pzFBrVI50dM8UZV5U9JZJCGj4cbWF3EqlxhlF/GrFSpEqf17rfwbMkAAAJ3SURBVFjDtdhpV9pAFAbgCWaBsAsIiiwKCmqta2vVtnbfb8CyVO3y/39Gg9IKydy5MwO+H5OT5+QkM3dmLmNoYo3sadM8tgHsY7N5mm3EmHI+W1/WIZD1hNVSMSLllQxwk1kpRySR4jsHBHGyRRnlMAdEcockEn0FElmMipXNZZDK8kcBspAE6SQXMKVwAQrZLiCfxQGlONwPFE2BYlIcJ58D5eTyQWVnCTSytBNgkqCVt4HxAprZnFSeu7qMa0wwi6CdR/fKHsyQJ//LizML48THzAuYKRvjmmsGb1z1r5FH/gxuQtfMuxr9NHSj73nfucql5/0KXy3fMonQ9Z8e3/EVbxi+nBgpa6vhGz+4zkjpcvTVNZ+xeG/PczAFwPKZOsg5uAJ1xuJI9e34T3XkFHDjrIYNh2lHpADUWBVkHLECVfYMJBxCgTNWAdqhFKiwNJAOqUCaPQbK6ZEKtJkNpEMqYDOqDIzepUcWC4q5vH2bDsnYpNKjHVv8ie/+UYd02sIf/u9Pk05aNPzuxwvlVASTYXLUEc4ZPjWnx67YqaKFIjgDhE6NxV0pRej4ZYtfRLucGYA7daSkd7nzCHUs/gIzRGbjyLlGFhjOcjfA5rTv9JHljrP43gyGyC/53b/CFt/wVkAt460A25jLxmRe2yS2O5dN27y2kCx6oKscTG5o2Utd5vX0Nn1LT9kKHuz0jh6hI16+pK6U8g91LGPMUD0kGsiRdVtFeV942AO0nyPJ47x7JG4LGFLz4oNBdin2yD9f2pVqvLwRN16somwbaB9vA+1HVBpKrZNEuCn16aSl3t6KNbLnTbP9FTLfUunmuVaLTDF/AeQEet+6WzFOAAAAAElFTkSuQmCC"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(34)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\mapimg\\dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(35)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\nodestudy\\spa-swiper\\src\\mapimg\\dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialog.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dia-mask {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.8);\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  display: -webkit-flex;\n  -webkit-justify-content: center;\n  -webkit-align-items: center;\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  font-family: 'SimSun';\n  transition: opacity .3s ease;\n  -webkit-transition: opacity .3s ease;\n  -moz-transition: opacity .3s ease;\n}\n.dia-close {\n  display: inline-block;\n  position: absolute;\n  top: -0.5rem;\n  right: -0.5rem;\n  height: 1.45rem;\n  background: url(" + __webpack_require__(33) + ") center center no-repeat;\n  background-size: 100%;\n}\n.dia-container {\n  position: relative;\n  font-size: .75rem;\n  color: #000;\n  text-align: center;\n  width: 12rem;\n  background-color: #fff;\n  border-radius: .25rem;\n  transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  -moz-transition: all .3s ease;\n}\n.sure-tips {\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  height: 4rem;\n  font-weight: normal;\n  display: table;\n  padding: .5rem;\n  box-sizing: border-box;\n}\n.sure-cont {\n  display: table-cell;\n  vertical-align: middle;\n}\n.close-btn {\n  width: 100%;\n  text-align: center;\n  line-height: 2rem;\n  margin: 0;\n  border-top: 1px solid #ddd;\n  color: #02c6dc;\n  font-weight: normal;\n}\n.dia-enter,\n.dia-leave {\n  opacity: 0;\n}\n.dia-enter .dia-container,\n.dia-leave .dia-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA6CAMAAAA9UgEZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMhaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUY0NEMzOUJBMkQyMTFFNUEwRENFMUJDRTQ2NjhGNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUY0NEMzOUNBMkQyMTFFNUEwRENFMUJDRTQ2NjhGNjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RjQ0QzM5OUEyRDIxMUU1QTBEQ0UxQkNFNDY2OEY2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjQ0QzM5QUEyRDIxMUU1QTBEQ0UxQkNFNDY2OEY2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/2uC0AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAA+VBMVEVMaXH/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/eAD/////gRH/9u6fjFsTAAAAT3RSTlMAAgs/Gf3MAZb86fMVLhfS9Iw5f+8MkjVTbFxMN2+R+dq73+SCyk742YH35y3mqCz1NrypQhoi/g8QX4uYYJnJUlc9cFZbA2pL8DvOz9TVW0eBkwAAActJREFUSMe1l9dywjAQRUUxvfceaugQOgkhvbcF///HxKbbVrNmuG/W7LGs9Up7hdAZZLVP7VaTjNOf7wVDoCoU7OX9Tk5u4PKAVh5XjmO6h3vAyZFiTJysAUm1JC0nLgnIklxxEthvAF2NPh788AJL3iwOfHUDW+6MEbzkARX0RQ9+XQGfLmxaMNAFXnUDp6ClBPwqWU7IdzCj9BH0xUyRMd+BLIA5JfagvWWSbNl3ZFUzvFqtMMHa0eousRVgorqxytuGHDPCANaGkTEhP/pAWdZ/RWFD/rJWhfn8PxWczxgJwa17dq2QEWzij+H4XEcU8gaoKB6EpUJGgYYSQIgq5AIoKAmEsELeAgUlgXBHJckzbsmF0JxhSobo64yS/wojt0tiJbD+p1oJc0mghiS1+tC3QN3+bPZKWGCvhDekTT9s2MjK81obsj3onWUDKOveJevQ8q6BN1mgAW3uT806C9Sh9f2piRKiJ7XZ7vB57A4oLdqRkGVoAhxaNJ23zQ22A9qm/STa7fkdxqPRnGREXQ1CWVEnhVCnyACLHZLxi4s6RtWlOoigY8BwximHmDNWlRNz4/sbwOhwAxg9c98ADg57Mp1Yz3Gd+QeeTcBKcsp8eAAAAABJRU5ErkJggg=="

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['show'],
		methods: {
			closeDia: function closeDia() {
				this.show = false;
			}
		}
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\r\n<div v-show=\"show\" class=\"dia-mask\" transition=\"dia\">\r\n\t<div  class=\"dia-container\">\r\n\t\t<!-- <a href=\"javascript:;\" class=\"dia-close\" @click='closeDia()'></a>-->\r\n\t\t<p class=\"sure-tips\">\r\n\t\t\t<span class=\"sure-cont\">暂时还没有人领红包哦，快来当第一个幸运者吧。</span>\r\n\t\t</p>\r\n\t\t<p class=\"close-btn\" v-tap='closeDia'>我知道了</p>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\" v-cloak>\n\t<div class=\"header-img\">\n\t\t<div class=\"icon\">\n\t\t\t<img :src=\"staffPic\">\n\t\t</div>\n\t</div>\n\t<div class=\"title\">{{staffName}}</div>\n\t<div class=\"random\">{{staffDesc}}</div>\n\t<div class=\"chance\">每个微信号只有一次机会喔</div>\n\t<div class=\"btn\" v-tap=\"openBag()\">开红包</div>\n\t<div class=\"list\"><a href=\"javascript:;\" v-tap='lookOthers()'>看看大家的手气&nbsp;>></a></div>\n</div>\n<qrmask :show.sync=\"showMask\" :words.sync=\"words\" :maskqr.sync=\"maskQr\"></qrmask>\n<dialog :show.sync=\"showDia\"></dialog>\n";

/***/ }
/******/ ]);