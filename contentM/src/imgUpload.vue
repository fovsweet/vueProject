<script>
	import imgjcrop from './imgJcrop';
	import gallery from './gallery';
	import store from '../vuex/store.js';
	export default {
		vuex:{
			getters:{
				show:state => state.dialog.addimg
			},
		},
		data (){
			return {
<<<<<<< HEAD
				datas:store.state,
				currentView:''
=======
				MyImg : {
				    'x':'',
				    'y':'',
				    'width':'',
				    'height':'',
				    'boxwidth':'',
				    'boxheight':''
				},
				jcrop_api:'',
				imgFileUrl:'',
				boundx:'',
				boundy:''
>>>>>>> a64f34a571d1800957158ed381a16ada05aac875
			}
		},
		 watch:{
			'datas.dialog.addimg':function(val,oldVal){
				if(val){
					this.currentView = 'imgjcrop'
				}else if(!val){
					this.currentView = ''
				}
			}
		},
<<<<<<< HEAD
		components:{
			imgjcrop,gallery
		},
		events:{
			'change-components':function(val){
				this.currentView = val;
=======
		methods:{
			jsUpfile:function(){
				var vThis = this;
				 $('#preview').Jcrop({},function(){vThis.jcrop_api = this; });
				 this.setImagePreview();
			},
			setImagePreview:function(){
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
			            //console.log(real_h)
			            var lv = real_w/real_h;
			            if(lv > 1){
			                var curW = real_w > 290 ? 290 : real_w ;
			                pre.style.width = '';
			                pre.style.height = '';
			                pre.height = curW/lv;
			                pre.width = curW;
			                if(pre.height>200){
			                    pre.height = 200;
			                    pre.width = real_w/(real_h/200)
			                }
			            }else {
			                var curH = real_h > 200 ?  200 :real_h;
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
			                maxSize: [290,200],
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
			showPreview:function(coords){
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
		        vThis.MyImg.boxwidth =  parseInt($('#smallview').width());
		        vThis.MyImg.boxheight = parseInt($('#smallview').height());
		        console.log(vThis.MyImg);
		    },10);
>>>>>>> a64f34a571d1800957158ed381a16ada05aac875
			}
		}
	}
</script>

<template>
	 <div style="z-index:9999" class="moimg-mask" v-show="show" transition="moimg">
	    <div class="modal-dialog moimg-wrapper">
<<<<<<< HEAD
	    <!-- 可脱离部分 start -->
			<components :is="currentView"></components>
		<!-- 可脱离部分 end -->
=======
		    <div class="modal-content moimg-area" style="width: 550px;">
			    <div class="modal-head">
			    <span @click="closeDialog('addimg')" class="modal-close"></span>
			    <div class="modal-title">编辑图文封面</div>
			    </div>
			    <div class="modal-body">
				<!-- 可脱离部分 start -->
					<div class="update-group">
					    <div class="update-img">
					    <div class="img-box " id="localImag">
					    <p id="img-box-tips">支持jpg、jpeg、png格式图片</p>
					    <img id="preview" class="preview" style="max-width: 100%" />
					    </div>
					    <div class="view-box">
					    <p class="tips">效果预览</p>
					    <div class="view-img" id="view-img">
					    <img id="smallview"  class="smallview" />
					    </div>
					    </div>
					    </div>
					    <div class="update-btn-group">
					    <input @change="jsUpfile()" type="file" name="doc" id="doc" class="doc js-upfile" accept="image/jpg,image/peg,image/png"/>
					    <button class="btn-update" onclick="" type="button"><span class="icon-add"></span>上传本地图片</button>
					    <p class="tips">支持jpg、jpeg、png格式图片大小不超过2M</p>
					    </div>
					</div>
				<!-- 可脱离部分 end -->
			    </div>
			    <div class="modal-foot">
			    <button type="button" @click="closeDia()" class="btn-default">关&emsp;闭</button>
			    <button type="button" @click="getUrl($el)" class="btn-default">确&emsp;定</button>
			    </div>
		    </div>
>>>>>>> a64f34a571d1800957158ed381a16ada05aac875
	    </div>
    </div>
</template>

<style lang="less">

</style>