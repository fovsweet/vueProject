<script>
import store from '../vuex/store.js';
import { closeDialog,uploadImg } from '../vuex/actions.js';
	export default {
		data:function(){
			return {
				MyImg:{
					'x':'',
				    'y':'',
				    'width':'',
				    'height':'',
				    'boxWidth':'',
				    'boxHeight':''
				},
				jcrop_api:'',
				imgFileUrl:'',
				boundx:'',
				boundy:'',
			}
		},
		vuex:{
			getters:{
				imgPre:state => state.imgPre
			},
			actions:{
				closeDialog,uploadImg
			}
		},
		methods:{
			jsUpfile (){
				var vThis = this;
				 $('#preview').Jcrop({},function(){vThis.jcrop_api = this; });
				 this.setImagePreview();
			},
			setImagePreview (){
				$('.update-btn-group .tips').css('color','#999').html('支持jpg、jpeg、png格式图片大小不超过2M');
			    var im_w,im_h;
			    var vThis = this;
			    var fileSuffixs = 'image/jpg,image/jpeg,image/png';
			    var doc = document.getElementById('doc');
			    var pre = document.getElementById('preview');
			    var smlView = document.getElementById('smallview');
			    var sViewBox = document.getElementById('view-img');
			    var sWidth = parseFloat(sViewBox.offsetWidth);
			    var sHeight = parseFloat(sViewBox.offsetHeight);
			    var localImag = document.getElementById('localImag');
			    var imgTips = document.getElementById('img-box-tips');
			    var files = doc.files[0];
			    var fileType = files.type;
			    vThis.jcrop_api.destroy();
			    pre.removeAttribute('style');
			    if(fileType == '' || fileSuffixs.indexOf(fileType) == -1)
			    {
			        $('.update-btn-group .tips').css('color','red').html('仅支持jpg,jpeg,png格式的图片');
			    }else if(doc.files[0].size > 2*1024*1024){
			        $('.update-btn-group .tips').css('color','red').html('图片不能大于2M');
			    }else {
			        var src = window.URL.createObjectURL(doc.files[0]);
			        var newImage = new Image();
			        newImage.src = src;
			        imgTips.style.display = 'none';
			        pre.src = src;
			        smlView.src = src;
			        pre.onload = function(){
			            var real_w = newImage.width;
			            var real_h = newImage.height;
			            console.log(real_w+ ' ,'+ real_h);
			            var lv = real_w/real_h;
			            if(lv > 1){
			                var curW = real_w > 370 ? 370 : real_w ;
			                pre.style.width = '';
			                pre.style.height = '';
			                pre.height = curW/lv;
			                pre.width = curW;
			                if(pre.height>340){
			                    pre.height = 340;
			                    pre.width = real_w/(real_h/340)
			                }
			            }else {
			                var curH = real_h > 340 ?  340 :real_h;
			                pre.style.width = '';
			                pre.style.height = '';
			                pre.height = curH;
			                pre.width = curH*lv;
			            }
			            im_w = pre.width;
			            im_h = pre.height;
			            $(pre).Jcrop({
			                onSelect: vThis.showPreview,
			                onChange: vThis.showPreview,
			                aspectRatio: sWidth/sHeight,
			                maxSize: [370,340],
			                setSelect:[0,0,im_w,100]
			            },function(){
			                var bounds = this.getBounds();
			                vThis.boundx = bounds[0];
			                vThis.boundy = bounds[1];
			                vThis.jcrop_api = this;
			            });
			        }
			    }
			},
			showPreview (coords){
				var vThis = this;
				setTimeout(function(){
		        var rx = $('.view-img').width() / coords.w;
		        var ry = $('.view-img').height() / coords.h;
		        $('#smallview').css({
		            width: Math.round(rx*vThis.boundx ) + 'px',
		            height: Math.round(ry*vThis.boundy ) + 'px',
		            marginLeft: '-' + Math.round(rx * coords.x) + 'px',
		            marginTop: '-' + Math.round(ry * coords.y) + 'px'
		        });
		        $('#smallview').attr({
		            'src': $('#preview').attr('src')
		        });
		        vThis.MyImg.x = Math.abs(parseInt($('#view-img img').css('margin-left')));
		        vThis.MyImg.y = Math.abs(parseInt($('#view-img img').css('margin-top')));
		        vThis.MyImg.width = parseInt($('#view-img').width());
		        vThis.MyImg.height = parseInt($('#view-img').height());
		        vThis.MyImg.boxWidth =  parseInt($('#smallview').width());
		        vThis.MyImg.boxHeight = parseInt($('#smallview').height());
		    },10);
			},
			changeCom (com){
				this.$dispatch('change-components',com);
			}
		}
	}
</script>

<template>
	<div class="moimg-area" style="width: 650px;">
	    <div class="modal-head">
	    <span @click="closeDialog('addimg')" class="modal-close"></span>
	    <div class="modal-title">编辑图文封面</div>
	    </div>
	    <div class="pic-title">
	    	<div class="picChoose on" @click="changeCom('imgjcrop')">本地上传</div>
	    	<div class="picChoose" @click="changeCom('gallery')">图库选择</div>
	    </div>
	    <div class="modal-body">
		  <div class="update-group" transition="moimg">
			    <div class="update-img">
			    <div class="img-box " id="localImag">
			    <p id="img-box-tips">支持jpg、jpeg、png格式图片</p>
			    <img id="preview" class="preview" style="max-width: 100%" />
			    </div>
			    <div class="view-box">
			    <div class="view-img" id="view-img" :style="{ width:imgPre.w+'px', height:imgPre.h+'px' }">
			    <img id="smallview"  class="smallview" />
			    </div>
			    <br>
			    <p class="tips">效果预览</p>
			    </div>
			    </div>
			    <div class="update-btn-group">
			    <input @change="jsUpfile()" type="file" name="file" id="doc" class="doc js-upfile" accept="image/jpg,image/peg,image/png"/>
			    <button class="btn-update" onclick="" type="button"><span class="icon-add"></span>上传本地图片</button>
			    <p class="tips">支持jpg、jpeg、png格式图片大小不超过2M</p>
			    </div>
			</div>
	    </div>
	    <div class="modal-foot" style="margin-top:30px">
	    <button type="button" @click="closeDialog('addimg')" class="btn-cancel">关&emsp;闭</button>
	    <button type="button" @click="uploadImg(MyImg)" class="btn-save">确&emsp;定</button>
	    </div>
    </div>
</template>

<style lang="less">
/*分类title样式*/
.pic-title {
    margin-top: -10px;
    border-bottom: 1px solid #e8e8e8;
    height: 45px;
    font-size: 14px;
    padding-left: 10px;
    margin-bottom: 20px;
}
.pic-title .picChoose {
    cursor: pointer;
    line-height: 43px;
    width: 60px;
    margin-right: 25px;
    float: left;
    padding: 0 10px;
}
.pic-title .on {
    border-bottom: 3px solid #63a8eb;
    color: #63a8eb;
}

	/* jquery.Jcrop.css v0.9.12 - MIT License */
/*
  The outer-most container in a typical Jcrop instance
  If you are having difficulty with formatting related to styles
  on a parent element, place any fixes here or in a like selector
  You can also style this element if you want to add a border, etc
  A better method for styling can be seen below with .jcrop-light
  (Add a class to the holder and style elements for that extended class)
*/
.jcrop-holder {
  direction: ltr;
  text-align: left;
}
/* Selection Border */
.jcrop-vline,
.jcrop-hline {
  background: #ffffff;
  font-size: 0;
  position: absolute;
}
.jcrop-vline {
  height: 100%;
  width: 1px !important;
}
.jcrop-vline.right {
  right: 0;
}
.jcrop-hline {
  height: 1px !important;
  width: 100%;
}
.jcrop-hline.bottom {
  bottom: 0;
}
/* Invisible click targets */
.jcrop-tracker {
  height: 100%;
  width: 100%;
  /* "turn off" link highlight */
  -webkit-tap-highlight-color: transparent;
  /* disable callout, image save panel */
  -webkit-touch-callout: none;
  /* disable cut copy paste */
  -webkit-user-select: none;
}
/* Selection Handles */
.jcrop-handle {
  background-color: #333333;
  border: 1px #eeeeee solid;
  width: 7px;
  height: 7px;
  font-size: 1px;
}
.jcrop-handle.ord-n {
  left: 50%;
  margin-left: -4px;
  margin-top: -4px;
  top: 0;
}
.jcrop-handle.ord-s {
  bottom: 0;
  left: 50%;
  margin-bottom: -4px;
  margin-left: -4px;
}
.jcrop-handle.ord-e {
  margin-right: -4px;
  margin-top: -4px;
  right: 0;
  top: 50%;
}
.jcrop-handle.ord-w {
  left: 0;
  margin-left: -4px;
  margin-top: -4px;
  top: 50%;
}
.jcrop-handle.ord-nw {
  left: 0;
  margin-left: -4px;
  margin-top: -4px;
  top: 0;
}
.jcrop-handle.ord-ne {
  margin-right: -4px;
  margin-top: -4px;
  right: 0;
  top: 0;
}
.jcrop-handle.ord-se {
  bottom: 0;
  margin-bottom: -4px;
  margin-right: -4px;
  right: 0;
}
.jcrop-handle.ord-sw {
  bottom: 0;
  left: 0;
  margin-bottom: -4px;
  margin-left: -4px;
}
/* Dragbars */
.jcrop-dragbar.ord-n,
.jcrop-dragbar.ord-s {
  height: 7px;
  width: 100%;
}
.jcrop-dragbar.ord-e,
.jcrop-dragbar.ord-w {
  height: 100%;
  width: 7px;
}
.jcrop-dragbar.ord-n {
  margin-top: -4px;
}
.jcrop-dragbar.ord-s {
  bottom: 0;
  margin-bottom: -4px;
}
.jcrop-dragbar.ord-e {
  margin-right: -4px;
  right: 0;
}
.jcrop-dragbar.ord-w {
  margin-left: -4px;
}
/* The "jcrop-light" class/extension */
.jcrop-light .jcrop-vline,
.jcrop-light .jcrop-hline {
  background: #ffffff;
  filter: alpha(opacity=70) !important;
  opacity: .70!important;
}
.jcrop-light .jcrop-handle {
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #000000;
  border-color: #ffffff;
  border-radius: 3px;
}
/* The "jcrop-dark" class/extension */
.jcrop-dark .jcrop-vline,
.jcrop-dark .jcrop-hline {
  background: #000000;
  filter: alpha(opacity=70) !important;
  opacity: 0.7 !important;
}
.jcrop-dark .jcrop-handle {
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #ffffff;
  border-color: #000000;
  border-radius: 3px;
}
/* Simple macro to turn off the antlines */
.solid-line .jcrop-vline,
.solid-line .jcrop-hline {
  background: #ffffff;
}
/* Fix for twitter bootstrap et al. */
.jcrop-holder img,
img.jcrop-preview {
  max-width: none;
}

/**
 * 鑷畾涔夎鍓浘鐗囧脊妗嗘牱寮�
 */
.imgup-block {
    float: left;
}
.imgup-block .img-drag-pane {
    border-radius: 4px;
}
.imgup-block .img-drag-container {
    margin-left: -1px;
    border:dotted 1px #ddd;
    background-color: #fff;
}
.imgup-block .img-drag-container .p1 {
    margin-top: 32%;
    color: #999;
    text-align: center;
    border-bottom: none;
    padding-top: 0;
    padding-bottom: 0;
}
.imgup-block .img-drag-container .p1 b {
    font-size: 24px;
    vertical-align: -3px;
    color: #999;
}
.imgup-block .img-drag-container .p2 {
    color: #999;
    margin-top: 5px;
    text-align: center;
    border-bottom: none;
    padding-top: 0;
}

.imgup-block1 .file-btn {
    display:block;
    width: 180px;
		height: 40px;
    line-height: 40px;
    border:solid 1px #2bc486;
    border-radius:2px;
    cursor:pointer;
    text-align: center;
    color:#2bc486;
}
.imgup-block1 b {
    font-size: 20px;
    width:16px;
    height:16px;
    display:inline-block;
    margin-right:15px;
    vertical-align: -3px;
    /* background:url(../images/add_green_ico.png); */
}
.imgup-block1 .file-tips {
    display:inline-block;
    width:290px;
    margin-top:10px;
    color:#999;
    text-align:center;
}
.imgup-block2 {
    margin-left: 25px;
}
.imgup-block2 .img-fi-preview {
    border: solid 1px #ddd;
    border-radius: 2px;
    position: relative;
}
.jcrop-holder .preview-pane {
  display: block;
  position: absolute;
  z-index: 2000;
  border-radius: 2px;
  border: solid 1px #ddd;
}

/********上传图片弹框 start******/
		.cover-group .update-group {
			display: inline-block;
			vertical-align: top;
		}

		.cover-group .update-group .file {
			line-height: 124px;
		}

		.cover-group  .update-group:first-of-type {
			margin-right: 15px;
		}
		.input-group {
			display: inline-block;
			position: relative;
			margin-left: 10px;
			font-size: 14px;
			/*width: calc(100% - 78px);*/
		}
		.input-group .tips {
			position: absolute;
			line-height: 34px;
			font-size: 14px;
			bottom: 0;
			right: 10px;
			color: #999;
		}

		.update-group .file{
			position:relative;
			display: inline-block;
			width: 137.5px;
			height: 110px;
			line-height: 110px;
			color: #999;
			text-align: center;
			background: transparent;
			border-radius: 2px;
			border: 1px dashed #dddddd;
			overflow: hidden;
		}

		.update-group .file img{
		    position: absolute;
		    top: 0;
		    left: 0;
		    max-width: 100%;
		    max-height: 100%;
		}

		.js-upshow img{width:100%}

		.update-group .file .add_logo {
		    background: url("../static/img/add_logo.png") no-repeat 50%;
		    display: inline-block;
		    width: 16px;
		    height: 16px;
		    position: relative;
		    top: 3px;
		    right: 5px;
		}
		    
		.img-error {
			font-style: normal;
			color: #ff6600;
		}

		.update-img {
			display: flex;
		}


		.img-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width:370px;
			height: 340px;
			line-height: 120px;
			text-align: center;
			vertical-align: top;
			color: #ddd;
			text-align: center;
			border: 1px dashed #ddd;
			overflow: hidden;
		}

		.img-box  div{
			/*max-width: 100%;*/
			/*max-height: 100%;*/
			
		}

		.view-box {
			display: inline-block;
			margin-left: 25px;
			vertical-align: top;
			overflow: hidden;
		}

		.view-box .tips {
			margin-bottom: 10px;
			color: #999;
			line-height: 1;
		}

		.view-img {
			width: 210px;
			height: 140px;
			color: #ddd;
			border: 1px solid #ddd;
			overflow: hidden;
		}

		.update-btn-group {
			position: relative;
			margin-top: 10px;
			text-align:left;
		}

		.update-btn-group input[type='file'] {
			width: 370px;
		    height: 34px;
		    opacity: 0;
		    position: absolute;
			cursor:pointer;
		}

		.update-btn-group .tips {
			margin-top: 10px;
			width: 290px;
			color: #999;
			vertical-align: middle;
		}

		.btn-update {
			width: 370px;
			height: 34px;
			color: #63a8eb;
			border-radius: 2px;
			background: transparent;
			border: 1px solid #63a8eb;
			vertical-align: middle;
		}

		

		/********上传图片弹框 end**********/
</style>