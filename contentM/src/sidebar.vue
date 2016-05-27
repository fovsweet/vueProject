<script>
	import { getCateInfo ,addCate, editCateInfo ,delCateDia,addMoreData} from '../vuex/actions.js';
	export default {
		vuex:{
			getters: {
              cateList: state => state.cateList,
              activeList :state => state.activeList,
              addMore :state => state.addMore
            },
			actions:{
				getCateInfo,addCate,editCateInfo,delCateDia,addMoreData
			}
		}
	}
</script>

<template>
	<div class="sideBar">
		<button class="btn-default" style="width:220px" @click="addCate"><span class="icon-add"></span>新建分类</button>
		<div class="cate-list">
		<template v-for="data in cateList">
			<div class="cat-type" :class="{active:activeList === data}"  @click="getCateInfo(data)">
               <div class="cateInfo" onclick="">
                   <img :src="data.smPicSmallUrl">
                   <div class="cateMsg">
                   <div>{{data.smName}}</div>
                   <div>{{data.smCreateTimeString}}</div>
                   </div>
               </div>
               <ul>
                   <li class="flagStyle icon-mark" :class="data.smFlag"></li>
                   <li><a data-role="cm_setting" @click.stop="editCateInfo(data)" href="javascript:void(0)">编辑</a></li>
                   <li><a data-role="cm_confirm" @click.stop="delCateDia(data)" href="javascript:void(0)">删除</a> </li>
               </ul>
           </div>
        </template>
        <div class="add-more" v-show="addMore.status">
        	<a href="javascript:;" @click="addMoreData">点击加载更多</a>
        </div>
		</div>
	</div>
</template>

<style lang="less">
		.info .sideBar .cate-list{ 
			height: 800px; 
			overflow-y: auto; 
			margin-top: 20px; 
		}
		.icon-add {
		    display: inline-block;
		    margin-right: 10px;
		    width: 12px;
		    height: 12px;
		    vertical-align: middle;
		    position: relative;
		    top: -2px;
		}

		.icon-add:before {
		    content: '';
		    width: 12px;
		    height: 2px;
		    background: #fff;
		    position: absolute;
		    top: 5px;
		    left: 0px;
		}

		.icon-add:after {
		    content: '';
		    width: 2px;
		    height: 12px;
		    background: #fff;
		    position: absolute;
		    top: 0px;
		    left: 5px;
		}
		.cat-type {
			text-align: center;
			cursor: pointer;
			border-collapse: collapse;
			border-spacing: 0;
			border: 1px solid #ddd;
			border-radius: 2px;
			width: 198px;
			font-size: 14px;
			padding: 10px;
			margin-bottom:20px;
		}
		.cat-type.active {
			text-align: center;
			border-collapse: collapse;
			border-spacing: 0;
			border: 1px solid #63a8eb;
			border-radius: 2px;
			width: 198px;
			font-size: 14px;
			margin-bottom: 20px;
			padding: 10px;
		}
		.cat-type .cateInfo {
			width: 208px;
			height: 50px;
		}
		.cat-type .cateInfo img {
			width: 50px;
			height: 50px;
			float: left;
		}
		.cat-type .cateInfo .cateMsg{
			text-align:left;
			float: left;
		}
		.cat-type .cateInfo .cateMsg div{
			height: 25px;
			line-height: 25px;
			padding-left: 10px;
			box-sizing: border-box;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			width: 150px;
		}
		.cat-type ul {
			margin-top: 10px;
			font-size: 0;
			text-align: left;
			padding-left: 15px;
		}
		.cat-type ul li {
			display: inline-block;
			vertical-align: top;
			font-size: 14px;
		}
		.cat-type ul li a {
			padding: 0 5px;
			color: #666;
		}
		.cat-type ul li a:hover{
			color:#63a8eb;
		}

	    .color-type {
		    display: inline-block;
		    box-sizing: border-box;
		}
		.color-type li {
		    width: 22px;
		    height: 22px;
		    margin-left: 25px;
		    float: left;
		    /*background-repeat: no-repeat;*/
		    /*background-position: left center;*/
		    cursor: pointer;
		}
		.color-type li:first-of-type {
		    margin-left: 10px;
		}
		.flagStyle {
		    width: 40px;
		    height: 20px;
		    background-repeat: no-repeat;
		    background-position: center top;
		}
		.icon-mark {
			background: url("../static/img/marks.png") no-repeat;
			background-position: 0 0 ;
		}
		.green {
		     background-position: 0px 0px ;
		 }
		.green.active {
		    background-position: 0px -29px ;
		}
		.blue {
		    background-position: -46px 0px ;
		}
		.blue.active {
		    background-position: -46px  -29px ;
		}

		.yellow {
		    background-position: -90px 0px ;
		}
		.yellow.active {
		    background-position: -90px  -29px ;
		}
		.pink {
		    background-position: -137px 0px ;
		}
		.pink.active {
		    background-position: -137px  -29px ;
		}
		.red {
		    background-position: -183px 0px;
		}
		.red.active {
		    background-position: -183px  -29px ;
		}
		.add-more {
			text-align: center;
			cursor: pointer;
			border-collapse: collapse;
			border-spacing: 0;
			width: 198px;
			font-size: 14px;
			padding: 10px;
			margin-bottom:20px;
		}

</style>