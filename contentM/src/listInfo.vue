<script>
	import { delSpecialInfo,searchCateInfo,copyUrl,addSpecial } from '../vuex/actions.js';
	
	export default {
		vuex:{
			getters:{
				specialList:state => state.specialList,
				activeList:state => state.activeList
			},
			actions:{
				delSpecialInfo,searchCateInfo,copyUrl,addSpecial
			}
		},
		ready:function(){
		var vThis = this;
		var clipborad =	new Clipboard('.copyBtn');
		clipborad.on('success', function(e) {
			vThis.copyUrl();
		    e.clearSelection();
		});	
		}
	}
</script>

<template>
	<div class="info-list">
		<div class="search-group">
			<input type="text" v-model="specialList.searchKey" placeholder="请输入专题名称" style="width:320px;margin-left:0">
		</div>
		<div class="search-group">
			<button class="btn-default" @click="searchCateInfo">查询</button>
			<button class="btn-default" @click="addSpecial">新增专题</button>
		</div>
		<table class="table-list" v-show="!specialList.none">
			<thead>
				<tr>
					<th>专题标题</th>
					<th>创建时间</th>
					<th>浏览次数</th>
					<th>分享次数</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="data in specialList.list">
					<td>{{data.smBodyTitle}}</td>
					<td>{{data.createTimeStr}}</script></td>
					<td>{{data.browserCount}}</td>
					<td>{{data.shareCount}}</td>
					<td>
						<div class="operate-group">
							<a class="copyBtn" href="javascript:;" data-clipboard-text="{{data.smBodyTitle}}">复制链接</a>
							<a href="smCon/init?type=0&uuid={{data.smConSysuuid}}">编辑</a>
							<a href="javascript:;" class="delete" @click="delSpecialInfo(data)">删除</a>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="no-data" v-show="specialList.none">
			暂无专题.请<a target="_blank" href="smCon/init?type=1&cateId={{activeList.smCgSysuuid}}">点击新增</a>
		</div>
		<!-- pageNav start -->
		<div v-show="specialList.totalPages > 1" id="Pagination" class="pageNav mt30"></div>
		<!--pageNav end-->
	</div>
</template>

<style lang="less">
	.no-data{
		height: 400px;
	    line-height: 400px;
	    text-align: center;
	    font-size: 16px;
	}
	.no-data a{
		color: #63a8eb;
	}
</style>