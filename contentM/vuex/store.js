import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	//主页导航内容配置
	nave: {
		indexTitle:'专题管理',
        links:[
            {'link':'配置','hr':'http://www.baidu.com','act':'active'},
            {'link':'列表','hr':'http://www.baidu.com','act':''}
        ]
    },
    //弹框状态管理 
    dialog:{
    	addcate:false,
    	addimg:false,
    	confirm:false,
    	title:''
    },
   	//上传图片与素材管理状态
   	uploadImg:{
   		component:'',
   	},
    //确认弹框状态
    confirmDia:{
    	title:'',
    	tips:'',
    	cancel:true,
    	confirm:true,
    	actions:'',

    },
    //分类列表数据
    cateList:[{smName:'12313445',smCreateTimeString:'2016-05-16 12:12:12'}],
    //分类列表详细信息
    cateInfo:{
    	id:'',
    	smCgSysuuid:'',
    	smName:'',
    	smPicBigUrl:'',
    	smPicSmallUrl:'',
    	smFlag:''
    },
	//检查分类信息状态
	checkInfo:{
		title:true,
		img:true,
		color:true,
		saveOk:true
	},
    //分类列表详细信息中的几种颜色
    cateColor:['green','blue','yellow','pink','red'],
    //当前选中的列
	activeList:{},
	//当前要删除分类数据
	delCate:{},
	//设置图片是大图，还是小图状态，以及宽高确定比例
	imgPre:{
		w:'',
		h:'',
		status:''
	},
	//图片数据信息
	imgInfo:{
		'x':'',
	    'y':'',
	    'width':'',
	    'height':'',
	    'boxwidth':'',
	    'boxheight':''
	},
	//是否显示加载更多
	addMore:{
		status:false,
		page:0
	},
	//专题列表
	specialList:{
		list:{},
		none:false,
		totalPages:'',
		searchKey:''
	},
	//当前要删除的专题数据
	delSpecial:{

	},
	//翻页数据
	pagination:{
		current:0
	}

}

const mutations = {
	//更新分类列表数据
	UPDATE_CATE_LIST(state ,data){
		state.cateList = data.content;
		if(data.total > data.size*state.addMore.page+20){
			state.addMore.status = true;
		}else{
			state.addMore.status = false;
		}

	},
	//设置当前选中的cate列
	SET_ACTIVE_LIST(state, list){
		state.activeList = list;
	},
	//设置当前要删除分类列
	SET_DEL_CATE(state, list){
		state.delCate =list;
	},
	//设置删除分类框信息
	SET_CONFIRM_CATE_INFO(state){
		state.confirmDia.title="确认信息";
		state.confirmDia.tips="请确认是否删除?";
		state.confirmDia.actions = 'delCate';
		state.confirmDia.cancel = true;
	},
	//设置要删除的专题
	SET_DEL_SPECIAL(state, list){
		state.delSpecial =list;
	},
	//设置删除专题框信息
	SET_CONFIRM_SPECIAL_INFO(state){
		state.confirmDia.title="确认信息";
		state.confirmDia.tips="请确认是否删除";
		state.confirmDia.actions = 'delSpecial';
		state.confirmDia.cancel = true;
	},
	//显示弹窗
	SET_SHOW_DIALOG(state, dia , tit){
		state.dialog[dia] = true;
		state.dialog.title = tit;
	},
	//设置复制链接时的提示信息
	SET_COPY_INFO(state){
		state.confirmDia.title="提示";
		state.confirmDia.tips="已将链接复制到粘贴板";
		state.confirmDia.actions = 'copyTips';
		state.confirmDia.cancel = false;
	},
	//设置新增专题时如果没有分类的提示信息
	SET_SPE_INFO(state){
		state.confirmDia.title="提示";
		state.confirmDia.tips="请先新建一个分类";
		state.confirmDia.actions = 'addSpecial';
		state.confirmDia.cancel = false;
	},
	//显示上传图片弹窗
	SET_SHOW_UPIMG_DIA(state, w, h ,s){
		state.dialog.addimg = true;
		state.imgPre.w = w;
		state.imgPre.h = h;
		state.imgPre.status= s;
	},
	//关闭弹窗
	SET_CLOSE_DIALOG(state, dia){
		state.dialog[dia] = false;
	},
	//设置添加弹窗时标识颜色
	SET_CATE_COLOR(state, color){
		state.cateInfo.smFlag = color;
	},
	//检查分类信息是否输完
	CHECK_CATE_TIPS(state){
		if(state.cateInfo.smName.trim() == '' || state.cateInfo.smName.length < 0 || state.cateInfo.smName == null){
			state.checkInfo.title = false;
			state.checkInfo.saveOk = false;
		}
		if(state.cateInfo.smPicBigUrl.trim() == '' || state.cateInfo.smPicBigUrl.length < 0 || state.cateInfo.smPicBigUrl == null){
			state.checkInfo.img = false;
			state.checkInfo.saveOk = false;
		}
		if(state.cateInfo.smPicSmallUrl.trim() == '' || state.cateInfo.smPicSmallUrl.length < 0 || state.cateInfo.smPicSmallUrl == null){
			state.checkInfo.img = false;
			state.checkInfo.saveOk = false;
		}
		if(state.cateInfo.smFlag.trim() == '' || state.cateInfo.smFlag.length < 0 || state.cateInfo.smFlag == null){
			state.checkInfo.color = false;
			state.checkInfo.saveOk = false;
		}
		if(state.checkInfo.title == true &&　state.checkInfo.img == true　&& state.checkInfo.color == true){
			state.checkInfo.saveOk = true;
		}
	},
	//取消提示信息
	QUITE_CATE_TIPS(state ,tip){
		state.checkInfo[tip] = true;
	},
	//取消所有提示信息
	QUITE_ALL_TIPS(state ,tip){
		state.checkInfo.title = state.checkInfo.img =state.checkInfo.color = state.checkInfo.saveOk  = true;
	},
	//保存分类
	SAVE_CATE(state){
		
	},
	//清空分类的值
	CLEAN_CATE_INFO(state){
	 state.cateInfo.id = state.cateInfo.smCgSysuuid = state.cateInfo.smName = state.cateInfo.smPicBigUrl = state.cateInfo.smPicSmallUrl = state.cateInfo.smFlag = '';
	},
	//更改图片的值
	UPLOAD_IMG(state, res){
		if(state.imgPre.status == 'big'){
            state.cateInfo.smPicBigUrl = res.url;
        }else if(state.imgPre.status == 'small'){
            state.cateInfo.smPicSmallUrl = res.url;
        }
       state.dialog.addimg = false;
	},
	//更改当前分类的详细信息
	UPDATE_CATE_INFO(state,res){
		state.cateInfo.id = res.data[0].id;
		state.cateInfo.smCgSysuuid = res.data[0].smCgSysuuid;
		state.cateInfo.smName = res.data[0].smName;
		state.cateInfo.smPicBigUrl = res.data[0].smPicBigUrl; 
		state.cateInfo.smPicSmallUrl = res.data[0].smPicSmallUrl; 
		state.cateInfo.smFlag = res.data[0].smFlag; 
		console.log(state.cateInfo);
	},
	//更新当前分类显示的页码
	UPDATE_CATE_PAGE(state){
		state.addMore.page = state.addMore.page+1;
	},
	//增加分类显示的内容
	ADD_CATE_LIST(state,data){
		state.cateList = state.cateList.concat(data.content);
		if(data.total > data.size*state.addMore.page+20){
			state.addMore.status = true;
		}else{
			state.addMore.status = false;
		}
	},
	//设置专题列表
	SET_SPECIAL_LIST(state,res){
		if(res.total > 0){
			state.specialList.none = false;
			state.specialList.list = res.content;
			state.specialList.totalPages = res.totalPages;
			console.log(state.specialList.totalPages);
		}else{
			state.specialList.none = true;
			state.specialList.totalPages = res.totalPages;
		}
		
	},
	//设置翻页页码
	SET_PAGINATION(state,data){
		state.pagination.current = data;
		console.log(state.pagination.current);
	},
	//重置搜索关键词
	RESET_SEARCH_KEY(state){
		state.specialList.searchKey = '';
	},
	//测试方法
	TEST(state){
		console.log(1);
	}



}

export default new Vuex.Store({
	state,
	mutations
})