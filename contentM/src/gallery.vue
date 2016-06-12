<script>
import { closeDialog,uploadImg } from '../vuex/actions.js';
import pagenav from './pagination.vue';
	export default {
		vuex:{
			actions:{
				closeDialog,uploadImg
			}
		},
		data(){
			return {
				sideBar:{},
				imgContent:{},
                activeCate:'',
                activePic:'',
                searchKey:'',
                pageAll:'',
                pageCur:0,
                listAll:'',
			}
		},
        components:{
            pagenav
        },
		ready(){
			var vThis = this;
		    $.post('photo/getphotosysinfo',{},function(res){
		    	vThis.sideBar = res;
                vThis.activeCate = res[0];

                //查询默认选中分类的图片列表
                vThis.changePicList();
		    })
		},
		methods:{
			changeCom(com){
				this.$dispatch('change-components',com);
			},
            setActiveCate(data){
                this.activeCate = data;
                this.changePicList();
            },
            setActivePic(data){
                this.activePic = data;
            },
            changePicList(){
                var vThis = this;
                 $.post('photo/getphoto',{sysCode:vThis.activeCate.sysCode},function(res){
                    vThis.imgContent = res.content;
                    vThis.pageAll = res.totalPages;
                    vThis.listAll = res.total;
                })
            },
            searchPic(){
                var vThis = this;
                var vd = {};
                vd.sysCode = this.activeCate.sysCode;
                vd.fileName =  this.searchKey;
                $.post('photo/getphoto',vd,function(res){
                     vThis.imgContent = res.content;
                     vThis.pageAll = res.totalPages;
                     vThis.listAll = res.total;
                })
            },
            listen:function(data){
                console.log('点击了第'+data+'页');
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
			<div class="picChoose" @click="changeCom('imgjcrop')">本地上传</div>
	    	<div class="picChoose on" @click="changeCom('gallery')">图库选择</div>
			<div class="search_pics">
				<input type="text" class="search_input" v-model="searchKey" placeholder="请输入图片名称">
				<div class="search_pic">
					<img src="../static/img/pic_saerch.png" alt="" class="search_img" @click="searchPic()">
				</div>
			</div>
		</div>
		<div class="creative_center">
			<div class="creative_center_left">
				<template v-for="data in sideBar">
				<a href="javascript:;" class="creative_center_left_items" :class="{haschecked:activeCate === data}" @click="setActiveCate(data)">{{data.sysName}}({{data.picTotal}})</a>
				</template>
			</div>
			<div class="creative_center_right">
				<div class="imgListContent">
                   <div class="creative_center_right_items" v-for="data in imgContent">   
                       <div data-pre="0" class="right_items_imgbox" :class="{haschecked:activePic === data}" @click="setActivePic(data)">      
                            <img :src="data.url">   
                       </div>   
                       <div class="right_items_info">       
                           <h2>{{data.width}}x{{data.height}}</h2>       
                           <p>{{data.fileName}}</p>   
                       </div>
                   </div>      
                </div>
                <!-- pageNav start -->
                <pagenav :cur.sync="pageCur" :all.sync="pageAll" :listall.sync="listAll" v-on:btn-click="listen"></pagenav>
                <!--pageNav end-->
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
.search_input {
    width: 250px;
    margin-top: 6px;
    float: right;
    height: 33px;
    background: #fff;
    padding-left: 10px;
}
.search_pic {
    position: relative;
}
.search_img {
    position: absolute;
    top: 13px;
    right: 10px;
    cursor: pointer;
}

	/*—————素材库样式—————*/
.creative_center {
    width: 100%;
    height: 417px;
    display: flex;
}

.creative_center .creative_center_left {
    height: 100%;
    width: 123px;
    overflow: auto;
    overflow-x:hidden;
    border-right:1px solid #ddd;
}

.creative_center .creative_center_left .creative_center_left_items {
    display: inline-block;
    line-height: 34px;
    border: 1px solid transparent;
    width: 100px;
    height: 34px;
    margin-right: 20px;
    text-align: center;
    color: #666;
}

.creative_center .creative_center_left .creative_center_left_items:hover, .creative_center .creative_center_left .haschecked,.creative_center .creative_center_right .creative_center_right_items .right_items_imgbox.haschecked {
    border: 1px solid #63a8eb;
    border-radius: 2px;
    color: #63a8eb;
}

.creative_center .creative_center_right {
    width: 520px;
    height: 425px;
    overflow: auto;
    margin-left: 10px;
}

.creative_center .creative_center_right .creative_center_right_items .right_items_imgbox {
    width: 115px;
    height: 130px;
    border: 1px solid #ddd;
    -webkit-box-sizing: border-box;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    cursor:pointer;
}

.creative_center .creative_center_right .creative_center_right_items {
    margin-left: 10px;
    margin-bottom: 10px;
    float: left;
}

.creative_center .creative_center_right .imgListContent{
    width:100%;
    height:377px;
}

.creative_center .creative_center_right .creative_center_right_items:after{
    content:'';
    display:block;
    width:100%;
    clear: both;
}

.creative_center .creative_center_right .creative_center_right_items .right_items_imgbox img {
    max-height: 126px;
    max-width: 111px;
}

.creative_center .creative_center_right .creative_center_right_items  .right_items_info{
    margin-top:5px;
}

.creative_center .creative_center_right .creative_center_right_items  .right_items_info *{
    margin:0;
    padding:0;
    text-align:left;
    font-size:14px;
    color:#666;
    font-weight: normal;
    line-height: 1.5;
    width:115px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>