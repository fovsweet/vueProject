webpackJsonp([2],{0:function(t,i,e){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=e(14),l=o(n),a=e(205),r=o(a),d=e(21),s=(o(d),e(39)),c=o(s),u=e(38),p=o(u),m={domUp:{initialCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-refresh">我的下拉</div>'},loadingCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-load"><span class="loading"></span>拼命加载中...</div>'},loadEndCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-load">总算完成了</div>'},pullingCall:function(t){var i=this;t<=i.distance?i.initialCall():t>i.distance&&t<=2*i.distance&&(i.dom.innerHTML='<div class="dropload-update">禽兽放开我</div>')}}};l["default"].use(p["default"],m),l["default"].use(c["default"]),new l["default"](r["default"])},37:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RTBBQTBBRDJDN0IxMUU2ODY2MUY0QjkyODc5QjE1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RTBBQTBBRTJDN0IxMUU2ODY2MUY0QjkyODc5QjE1OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMEFBMEFCMkM3QjExRTY4NjYxRjRCOTI4NzlCMTU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFMEFBMEFDMkM3QjExRTY4NjYxRjRCOTI4NzlCMTU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1pe/3AAAAMlJREFUeNpinDlzJhsDA0MzECcyQMB2IC4E4ncM+AEXEPcAcRSUvxyIi4H4GwF9QkA8AYgDgPgHEM8H4loWINEBtRgG4oBYGohdCBg4CYiTkfgZQAwyL5WAvpVIZvMCcRkQszIBiXgsip2BWAaPYZw49CVA5XABWRwejGfCo4mRgBwjAxUByCELsYjvBeLHePR9w6EPJPYdj77HULMx9IHitAKIf0MTKyhYNwJxHhGeyIXqi4DyVwBxERH6wqDpyx/q6AVAXAMQYADxwiL1zom4GwAAAABJRU5ErkJggg=="},38:function(t,i,e){!function(t,e){e(i)}(this,function(t){"use strict";function i(t){t.touches||(t.touches=t.originalEvent.touches)}function e(t){var i=this;i._startY=t.touches[0].pageY,i.touchScrollTop=d(i.element)}function o(t){var i=this,e=i._options,o=e.domUp;i._curY=t.touches[0].pageY,i._moveY=i._curY-i._startY,i._moveY>0?i.direction="up":i._moveY<0&&(i.direction="down");var n=Math.abs(i._moveY);""!=e.loadUpFn&&i.touchScrollTop<=0&&"up"==i.direction&&(t.preventDefault(),l(o.dom,0),n<=o.distance||(n=n>o.distance&&n<=2*o.distance?o.distance+.5*(n-o.distance):o.distance+.5*o.distance+.2*(n-2*o.distance)),o.dom.style.height=n+"px",o.pullingCall(n))}function n(){var t=this,i=t._options,e=i.domUp,o=Math.abs(t._moveY);t.touchScrollTop<=0&&"up"==t.direction&&(l(i.domUp.dom,300),o>i.domUp.distance?(e.dom.style.height=i.domUp.distance+"px",e.loadingCall(),t.loading=!0,t.directive.vm.$get(i.loadUpFn)):e.dom.style.height="0px",t._moveY=0)}function l(t,i){t.transNum!=i&&(t.transNum=i,t.style.transition="all "+i+"ms",t.style.webkitTransition="all "+i+"ms")}function a(t,i){i=i||{},i.domUp&&p(f.domUp,i.domUp),i.domDown&&p(f.domDown,i.domDown),t.directive("Drapload",{bind:function(){var t=this;t.scroll=new m(t),t.scroll.bind(f)},unbind:function(){var t=this;t.scroll.unbind()}})}var r=function(t,i){var e,o,n,l,a,r=function(){t.apply(l,a),o=e};return function(){if(l=this,a=arguments,e=Date.now(),n&&(clearTimeout(n),n=null),o){var t=i-(e-o);0>t?r():n=setTimeout(function(){r()},t)}else r()}},d=function(t){return t?t.scrollTop:document.documentElement.scrollTop},s=function(t){return t?t.offsetHeight:document.documentElement.offsetHeight},c=function(t){return t?t.scrollHeight:document.documentElement.scrollHeight},u=function(t){for(var i=t.parentNode;i;){if("HTML"===i.tagName)return!0;if(11===i.nodeType)return!1;i=i.parentNode}return!1},p=function(t,i){for(var e in i)t[e]=i[e]},m=function(t){var a=t;return{_options:{},_initConfig:function(){var t=this;if(!this.__initConfig){this.__initConfig=!0;var i=a.el;t.directive=a,t.element=i,t.isData=!0,t._options={key:"scroll_"+parseInt(10*Math.random()),domUp:{dom:null,distance:50,domClass:"dropload-up",initialCall:function(){},pullingCall:function(){},loadingCall:function(){},loadEndCall:function(){}},domDown:{dom:null,domClass:"dropload-down",initialCall:function(){},loadingCall:function(){},domNoData:function(){},distance:50},loadUpFn:"",loadDownFn:""},p(t._options.domUp,t.baseConfig.domUp),p(t._options.domDown,t.baseConfig.domDown);var e=i.getAttribute("drapload-key");e&&(a.vm[e]=t,t._options.key=e),t._options.loadUpFn=i.getAttribute("drapload-up"),t._options.loadDownFn=i.getAttribute("drapload-down")}},_initDom:function(){var t=this;if(!this.__initDom){this.__initDom=!0;var i=t._options,e=t.element,o=e.firstElementChild;1!=e.childElementCount?console.error("滚动元素最好只有一个孩子节点"):(i.loadUpFn&&(i.domUp.dom=document.createElement("div"),i.domUp.dom.setAttribute("class",i.domUp.domClass),i.domUp.initialCall(),e.insertBefore(i.domUp.dom,o),i.domUp.distance=i.domUp.dom.firstElementChild.clientHeight),i.loadDownFn&&(i.domDown.dom=document.createElement("div"),i.domDown.dom.setAttribute("class",i.domDown.domClass),i.domDown.initialCall(),e.appendChild(i.domDown.dom),i.domDown.distance=i.domDown.dom.firstElementChild.clientHeight))}},_initEvent:function(){var t=this;if(!this.__initEvent){this.__initEvent=!0;var l=t.element,d=t._options;d.loadUpFn&&(t.touchstartCall=function(o){t.loading||(i.call(t,o),e.call(t,o))},t.touchmoveCall=function(e){t.loading||(i.call(t,e),o.call(t,e))},t.touchendCall=function(){t.loading||n.call(t)},l.addEventListener("touchmove",t.touchmoveCall),l.addEventListener("touchstart",t.touchstartCall),l.addEventListener("touchend",t.touchendCall)),d.loadDownFn&&(t.scrollListener=r(t.doCheck.bind(t),200),l.addEventListener("scroll",t.scrollListener));var s=l.getAttribute("drapload-initialize"),c=!1;s&&(c=Boolean(a.vm.$get(s))),a.initialize=c,c&&t.doCheck()}},noData:function(){var t=this;t.isData=!1},resetload:function(){var t=this,i=t._options;t.loading=!1,"up"==t.direction?(l(i.domUp.dom,300),i.domUp.dom.style.height="0px",i.domUp.loadEndCall()):t.isData?i.domDown.initialCall():(i.loadDownFn=null,i.domDown.domNoData())},doBind:function(){var t=this;this.binded||(this.binded=!0,t._initConfig(),t._initDom(),t._initEvent())},doCheck:function(t){var i=this;console.log("key----",i._options.key);var e=i.element,o=i._options,n=s(e)+d(e)+20>=c(e);n&&o.loadDownFn&&(o.domDown.loadingCall(),a.vm.$get(o.loadDownFn))},bind:function(t){var i=this,e=a.el;i.baseConfig=t||{},a.vm.$on("hook:ready",function(){u(e)&&i.doBind()}),this.bindTryCount=0;var o=function n(){a.bindTryCount>10||(a.bindTryCount++,u(e)?i.doBind():setTimeout(n,50))};o()},unbind:function(){var t=this;t.scrollListener&&t.element.removeEventListener("scroll",t.scrollListener),t.touchstartCall&&t.element.removeEventListener("touchstart",t.touchstartCall),t.touchmoveCall&&t.element.removeEventListener("touchmove",t.touchmoveCall),t.touchendCall&&t.element.removeEventListener("touchend",t.touchendCall);var i=t._options.key;i&&delete a.vm[i]}}},f={domUp:{initialCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-refresh">↓下拉刷新</div>'},loadingCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-load"><span class="loading"></span>加载中...</div>'},loadEndCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-load">加载完成</div>'},pullingCall:function(t){var i=this;t<=i.distance?i.initialCall():t>i.distance&&t<=2*i.distance&&(i.dom.innerHTML='<div class="dropload-update">↑释放更新</div>')}},domDown:{initialCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-refresh">加载更多</div>'},loadingCall:function(){var t=this;t.dom.innerHTML='<div class="dropload-load"><span class="loading"></span>加载中...</div>'},domNoData:function(){var t=this;t.dom.innerHTML=""}}};m.install=a,window.Vue&&(window.Drapload=m,Vue.use(a)),t.install=a,t.Drapload=m})},39:function(t,i){"use strict";i.install=function(t,i){var e="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";i||(i={error:e,loading:e,"try":3});var o={error:i.error?i.error:e,loading:i.loading?i.loading:e,hasbind:!1,isInChild:!1,childEl:null,"try":i["try"]?i["try"]:1},n=[],l=function(t,i){var e=void 0;return function(){var o=this,n=arguments;clearTimeout(e),e=setTimeout(function(){t.apply(o,n)},i)}},a=l(function(){for(var t=0;t<n.length;++t){var i=n[t];r(i)}},300),r=function(t){var i=void 0,e=void 0;t.parentEl?(i=t.parentEl.offsetHeight,e=t.parentEl.scrollTop):(i=window.screen.availHeight,e=document.documentElement.scrollTop||document.body.scrollTop);var o=(e+i)*window.devicePixelRatio*1.3;t.y<o&&d(t)},d=function(t){return t["try"]>=o["try"]?!1:(t["try"]++,void s(t).then(function(i){var e=n.indexOf(t);-1!==e&&n.splice(e,1),t.bindType?t.el.setAttribute("style",t.bindType+": url("+t.src+")"):t.el.setAttribute("src",t.src),t.el.setAttribute("lazy","loaded")})["catch"](function(i){t.bindType?t.el.setAttribute("style",t.bindType+": url("+o.error+")"):t.el.setAttribute("src",o.error),t.el.setAttribute("lazy","error")}))},s=function(t){return t.bindType?t.el.setAttribute("style",t.bindType+": url("+o.loading+")"):t.el.setAttribute("src",o.loading),new Promise(function(i,e){var o=new Image;o.src=t.src,o.onload=function(){i(t.src)},o.onerror=function(){e()}})},c=function(t){var i=void 0,o=n.length;for(t=t||e,i=0;o>i;i++)n[i].src==t&&n.splice(i,1);0==n.length&&(window.removeEventListener("scroll",a),window.removeEventListener("wheel",a),window.removeEventListener("mousewheel",a),window.removeEventListener("resize",a))},u=function(t){var i=t.offsetTop,e=t.offsetHeight;for(i;t=t.offsetParent;)i+=t.offsetTop;return{y:(i+e)*window.devicePixelRatio}};t.directive("lazy",{bind:function(){var i=this;o.hasbind||t.nextTick(function(){document.getElementById(Object.keys(i.modifiers)[0])&&(o.isInChild=!0,o.childEl=document.getElementById(Object.keys(i.modifiers)[0])),o.hasbind=!0,o.isInChild&&o.childEl.addEventListener("scroll",a),window.addEventListener("scroll",a),window.addEventListener("wheel",a),window.addEventListener("mousewheel",a),window.addEventListener("resize",a),a()})},update:function(t,i){var e=this;this.el.setAttribute("lazy","loading"),this.arg?this.el.setAttribute("style",this.arg+": url("+o.loading+")"):this.el.setAttribute("src",o.loading);var l=null;this.vm.$nextTick(function(){document.getElementById(Object.keys(e.modifiers)[0])&&(l=document.getElementById(Object.keys(e.modifiers)[0]));var i=u(e.el);n.push({bindType:e.arg,"try":0,parentEl:l,el:e.el,src:t,y:i.y}),a()})},unbind:function(t){c(t)}})}},126:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i["default"]={el:"#app",data:function(){return{content:[],busy:!1,popShow:!1,page:0,activeId:""}},ready:function(){var t=this;t.$options.vue=t},loadListData:function(t){this.vue;$.ajax({url:"getCollectList",data:{},type:"GET",success:function(i){t(i.data.content)}})},methods:{down_a:function(){var t=this;t.$options.loadListData(function(i){t.content=t.content.concat(i),t.ascroll.resetload(!0)})},up_a:function(){var t=this;t.$options.loadListData(function(i){t.content=i,t.ascroll.resetload()})},quiteCollect:function(){var t=this,i={};i.mchId=mchId,i.openId=openId,i.pmConSysUuid=this.activeId,$.post("cancel",i,function(i){t.page=0,t.loadMore()})},setting:function(t){this.popShow=!0,this.activeId=t},quitPop:function(){this.popShow=!1}}}},156:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,".app,body,html{margin:0;padding:0;height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.dropload-up{position:relative;height:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.dropload-load,.dropload-noData,.dropload-refresh,.dropload-update{height:50px;line-height:50px;text-align:center}.dropload-load .loading{display:inline-block;height:15px;width:15px;border-radius:100%;margin:6px;border:2px solid #666;border-bottom-color:transparent;vertical-align:middle;-webkit-animation:rotate .75s linear infinite;animation:rotate .75s linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}a,div{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.kefu{display:inline-block;position:fixed;bottom:.75rem;right:.75rem}.kefu img{width:2rem;height:2rem;border-radius:50%}.list-item{display:-ms-flexbox;display:flex;display:-webkit-box;position:relative;height:4.25rem}.list-item .list-img{width:3.25rem;height:3.25rem;border-radius:4px;margin:.5rem .5rem .5rem .75rem;background-size:100% 100%}.list-item .list-info{-ms-flex:1;flex:1;-webkit-box-flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;box-orient:vertical;-webkit-box-align:space-between;position:relative;height:100%;margin-right:.75rem}.list-item .list-info,.list-item .list-info h1{display:-ms-flexbox;display:flex;display:-webkit-box}.list-item .list-info h1{line-height:1;font-size:.65rem;font-weight:400;color:#333;padding:0;margin-top:.75rem}.list-item .action-wraper{display:-ms-flexbox;display:flex;-webkit-justify-content:justify;-webkit-align-items:center;display:-webkit-box;-webkit-box-pack:justify;-webkit-box-align:center;width:100%;position:absolute;bottom:.75rem;line-height:0}.list-item .action-wraper .timer{font-size:.65rem;color:#999;line-height:1}.list-item .action-wraper .action{width:.85rem;height:.5rem;background:url("+e(37)+') no-repeat;background-position:50%;background-size:100% auto}.list-item:after{content:"";position:absolute;bottom:-1px;left:0;right:0;border-bottom:1px solid #e8e8e8;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.pop-mask{position:fixed;top:0;bottom:0;left:0;width:100%;padding:1rem;background:rgba(0,0,0,.8);text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;-webkit-justify-content:center;-webkit-align-items:center;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;font-family:SimSun;transition:opacity .3s ease;-webkit-transition:opacity .3s ease;-moz-transition:opacity .3s ease}.pop-container{position:absolute;background-color:#fff;width:15rem;height:4.425rem;border-radius:4px;bottom:.5rem;left:.5rem;right:.5rem;transition:all .3s ease;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-ms-flex-direction:column;flex-direction:column;-webkit-box-orient:vertical}.pop-container,.quit,.quitCollect{display:-ms-flexbox;display:flex;display:-webkit-box}.quit,.quitCollect{-webkit-box-flex:1;-ms-flex:1;flex:1;box-flex:1;-webkit-align-items:center;-webkit-justify-content:center;-webkit-box-align:center;-webkit-box-pack:center;font-size:.75rem;color:#666;position:relative}.quitCollect:after{content:"";position:absolute;bottom:-1px;left:0;right:0;border-bottom:1px solid #282828;-webkit-transform:scaleY(.5);-webkit-transform-origin:0 0}.pop-enter,.pop-leave{opacity:0}.pop-enter .pop-container,.pop-leave .pop-container{transform:translateY(5rem);-webkit-transform:translateY(5rem)}',""])},159:function(t,i,e){t.exports=e.p+"images/22.jpg"},189:function(t,i,e){t.exports='<div class=app v-drapload drapload-key=ascroll drapload-initialize=true drapload-down=down_a() drapload-up=up_a()> <div> <div class=list-item v-for="data in content"> <img class=list-img v-lazy=data.picSmallUrl> <div class=list-info> <h1>{{data.title}}</h1> <div class=action-wraper> <div class=timer>{{data.createTime}}</div> <div class=action @click=setting(data.sysUuid)></div> </div> </div> </div> </div> </div> <div v-show=popShow class=pop-mask transition=pop @click=quitPop> <div class=pop-container> <div class=quitCollect @click=quiteCollect>取消收藏</div> <div class=quit>关闭</div> </div> </div> <a class=kefu href=http://www.baidu.com> <img src='+e(159)+"> </a>"},205:function(t,i,e){var o,n;e(221),o=e(126),n=e(189),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},221:function(t,i,e){var o=e(156);"string"==typeof o&&(o=[[t.id,o,""]]);e(2)(o,{});o.locals&&(t.exports=o.locals)}});