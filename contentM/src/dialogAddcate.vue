<script>
	import { closeDialog,updateCateColor,saveCate,showUpimgDia,quiteTips } from '../vuex/actions.js';
	import imgupload from './imgUpload';
	export default {
		vuex:{
			getters: {
              show: state => state.dialog.addcate,
              title: state => state.dialog.title,
              cateInfo:state => state.cateInfo,
              cateColor:state => state.cateColor,
              checkInfo:state => state.checkInfo
            },
            actions:{
              closeDialog,updateCateColor,saveCate,showUpimgDia,quiteTips
            }
		},
		components:{
			imgupload
		}
	}
</script>

<template>
	<div class="modal-mask modal-transition" v-show="show" transition="modal">
		<div class="modal-wrapper">
			<div class="modal-area">
				<div class="modal-head clearfix">
					<span class="modal-close" @click="closeDialog('addcate')"></span>
					<div class="modal-title" >{{title}}</div>
				</div>
				<table class="form-table" style="text-align:left">
					<tbody>
						<tr>
							<td>
								<div class="search-group">
									<div class="set_title">
										<label for=""><em class="must-point">*</em>专题名称</label>
										<input type="text" @focus="quiteTips('title')"  v-model="cateInfo.smName" maxlength="8">
										<div class="title_tips">
											<span>{{cateInfo.smName.length}}</span>/8
										</div>
									</div>
									<div v-show="!checkInfo.title" class="error">请输入专题名称</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="search-group">
									<div class="set_title">
										<label for="" style="vertical-align:top"><em class="must-point">*</em>图文封面</label>
										<div class="input-group cover-group" @click="quiteTips('img')">
											<div class="update-group" id="BigImg" @click="showUpimgDia('250','150','big')">
												<a href="javascript:;" class="js-upshow file" data-role="upImgs" style="width: 223px;height:127px;">
													 <i class="add_logo"></i>选择文件
													<img id="BgiImgUrl" :class="{'dis-none':cateInfo.smPicBigUrl == ''}" title="" :src.sync="cateInfo.smPicBigUrl">
												</a>
												<p style="color:#999; line-height: 1; margin-top: 5px">推送图文时，图文列表的封面大图，<br>
													建议尺寸 900X500
												</p>
											</div>
											<div class="update-group" id="SmallImg" @click="showUpimgDia('250','250','small')">
												<a href="javascript:;" class="js-upshow file" case="smallImg" data-role="upImgs" style="width: 127px;height: 127px;">
													<i class="add_logo"></i> 选择文件
													<img id="ImgSmallUrl" :class="{'dis-none':cateInfo.smPicSmallUrl == ''}" title="" :src.sync="cateInfo.smPicSmallUrl">
												</a>
												<p style="color:#999;line-height: 1; margin-top: 5px">推送图文时，图文列表的封面小图，<br>
													建议尺寸200X200
												</p>
											</div>
										</div>
									</div>
									<div v-show="!checkInfo.img" class="error">请上传图片</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="search-group">
									<label for="" style="vertical-align:top"><em class="must-point">*</em>选择标识</label>
									<div class="set_title">
										<ul class="color-type" @click="quiteTips('color')">
											<template v-for="cols in cateColor">
			                                <li  class="icon-mark" :class="[cols, cols === cateInfo.smFlag ? 'active' :'']" @click="updateCateColor(cols)"></li>
			                                </template>
			                            </ul>
			                        </div>
			                        <div v-show="!checkInfo.color" class="error">请选择标识颜色</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			 	<div class="modal-foot"> 
			 	 <button type="button" class="btn-save"  @click="saveCate('addcate');"> 保&emsp;存</button>
			   </div>
		   </div>
	   </div>
	</div>
	<imgupload></imgupload>
</template>

<style lang="less">
		.dis-none{
			display: none;
		}
		.modal-mask,.moimg-mask {
		    position: fixed;
		    z-index: 9998;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		    background-color: rgba(0, 0, 0, .5);
		    display: table;
		    transition: opacity .3s ease;
		}

		.modal-wrapper,.moimg-wrapper {
		    display: table-cell;
		    vertical-align: middle;
		    color: #666;
		    text-align: center;
		}

		.modal-area,.moimg-area{
		    padding: 30px;
		    padding-top: 0;
		    width: 600px;
		    margin: 0 auto;
		    background-color: #ffffff;
		    border-radius: 2px;
		    margin: 0 auto;
		    transition: all .3s ease;
		}
		.modal-area span.info,.moimg-area span.info{
		    color: #999;
		}

		.modal-head{
		    position: relative;
		    border-bottom: 1px solid #e8e8e8;
		    margin-bottom: 20px;
		}

		.modal-head .modal-title{
		    height: 65px;
		    line-height: 65px;
		    font-size: 25px;
		    text-align: center;
		    font-weight: normal;
		    color:#333;
		}

		.modal-head .modal-close{
		    display: inline-block;
		    width: 15px;
		    height: 15px;
		    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTA0OTAxMjY5NzBCMTFFNTk0NEQ5NzVCQzZFNkNCMjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTA0OTAxMjU5NzBCMTFFNTk0NEQ5NzVCQzZFNkNCMjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjU2OTBmNmJiLTA5MmItMjA0YS1iOTU3LTE4NmFhMDY1MjY3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NjkwZjZiYi0wOTJiLTIwNGEtYjk1Ny0xODZhYTA2NTI2NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UCCNHAAAAbElEQVR42pSRyQ3AMAgEzfbfANUSxVEkZLOI5cWDGS5z91hf2NJic0hgqPDL4ugeCvxPsATJtS6Ogk5S3gpFYSWhhwYZNUvaL6HZ10g+FgTJR4I8dvsdDK9NJZi8qpNgCFMJBLiUQIQvySPAADnqHeikkPSlAAAAAElFTkSuQmCC') no-repeat;
		    position: absolute;
		    top: 25px;
		    right: 0;
		    cursor: pointer;
		}

		.modal-foot{
		    text-align: center;
		    margin-top: 10px;
		}

		.modal-foot button {
			font-size: 16px;
			width: 130px;
			height: 40px;
			line-height: 40px;
			border-radius: 3px;
			cursor: pointer;
			border: none;
			outline: none;
		}

		.modal-foot .btn-cancel {
			color: #666;
			background: #ddd;
			margin-right: 20px;
		}
		
		.modal-foot .btn-save {
			color: #fff;
			background: #63a8eb;
		}
		.modal-foot .btn-save:hover{
			background: #548ce5;
		}
		.modal-enter, .modal-leave ,.moimg-enter, .moimg-leave {
		    opacity: 0;
		}

		.modal-enter .modal-area,
		.modal-leave .modal-area,
		.moimg-enter .moimg-area,
		.moimg-leave .moimg-area{
		    -webkit-transform: scale(1.1);
		    transform: scale(1.1);
		}
		.error {
			margin-top: 5px; 
			line-height: 1em; 
			color: #f94a05;
			font-size:14px;
			margin-left:80px;
		}
		.set_title {
		    display: inline-block;
		    min-width: 40%;
		    position: relative;
		}

		.set_title input[type="text"] {
		    width: 260px;
		}

		.title_tips {
		    position: absolute;
		    line-height: 30px;
		    top: 2px;
		    right: 2%;
		    color: #999999;
		    font-size: 14px;
		}

</style>