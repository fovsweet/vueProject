//更新分类列表
export const initCateList = ({ dispatch,state }) => {
	$.post('classify/search',function(list){
        dispatch('UPDATE_CATE_LIST',list.data)
        dispatch('SET_ACTIVE_LIST',list.data.content[0]);
        $.post('smCon/search',{smCgSysuuid:list.data.content[0].smCgSysuuid},function(res){
            dispatch('SET_SPECIAL_LIST',res);
                //翻页
             $("#Pagination").pagination(res.total, {
                callback:pageselectCallback,//PageCallback() 为翻页调用次函数。
                prev_text: " 上一页",
                next_text: "下一页 ",
                items_per_page: 10, //每页的数据个数
                num_display_entries: 4, //两侧首尾分页条目数
                current_page: state.pagination.current,   //当前页码
                num_edge_entries: 2 //连续分页主体部分分页条目数
            });
        })
    })
    function pageselectCallback(page_id, jq) {
        dispatch('SET_PAGINATION',page_id);
        $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,currentPage:state.pagination.current},function(res){
            dispatch('SET_SPECIAL_LIST',res);
        })
        return false;
    }
}
//查询分类下的专题列表
export const getCateInfo = ({ dispatch,state }, list) => {
    dispatch('RESET_SEARCH_KEY');
	dispatch('SET_ACTIVE_LIST', list);
    $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,smBodyTitle:state.specialList.searchKey},function(res){
        dispatch('SET_SPECIAL_LIST',res);
        //翻页
         $("#Pagination").pagination(res.total, {
            callback:pageselectCallback,//PageCallback() 为翻页调用次函数。
            prev_text: " 上一页",
            next_text: "下一页 ",
            items_per_page: 10, //每页的数据个数
            num_display_entries: 4, //两侧首尾分页条目数
            current_page: state.pagination.current,   //当前页码
            num_edge_entries: 2 //连续分页主体部分分页条目数
        });
    })
    function pageselectCallback(page_id, jq) {
        dispatch('SET_PAGINATION',page_id);
        $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,currentPage:state.pagination.current},function(res){
            dispatch('SET_SPECIAL_LIST',res);
        })
        return false;
    }
}

//查询分类下的专题列表
export const searchCateInfo = ({ dispatch,state }) => {
    $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,smBodyTitle:state.specialList.searchKey},function(res){
        dispatch('SET_SPECIAL_LIST',res);
        //翻页
         $("#Pagination").pagination(res.total, {
            callback:pageselectCallback,//PageCallback() 为翻页调用次函数。
            prev_text: " 上一页",
            next_text: "下一页 ",
            items_per_page: 10, //每页的数据个数
            num_display_entries: 4, //两侧首尾分页条目数
            current_page: state.pagination.current,   //当前页码
            num_edge_entries: 2 //连续分页主体部分分页条目数
        });
    })
    function pageselectCallback(page_id, jq) {
        dispatch('SET_PAGINATION',page_id);
        $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,currentPage:state.pagination.current},function(res){
            dispatch('SET_SPECIAL_LIST',res);
        })
        return false;
    }
}
//删除专题信息弹窗
export const delSpecialInfo = ({ dispatch } ,list) =>{
    dispatch('SET_SHOW_DIALOG','confirm');
    dispatch('SET_CONFIRM_SPECIAL_INFO');
    dispatch('SET_DEL_SPECIAL', list)
}

//新增分类
export const addCate = ({dispatch}, dia) =>{
    dispatch('CLEAN_CATE_INFO');
    dispatch('QUITE_ALL_TIPS');
    dispatch('SET_SHOW_DIALOG','addcate' ,'添加分类');
}

//显示上传图片窗口
export const showUpimgDia = ({ dispatch }, w , h , s) => {
	dispatch('SET_SHOW_UPIMG_DIA',w ,h ,s )
}

//关闭弹窗
export const closeDialog = ({ dispatch }, dia) => {
	dispatch('SET_CLOSE_DIALOG',dia);
} 

//更新分类当中的颜色
export const updateCateColor = ({ dispatch }, color) => {
	dispatch('SET_CATE_COLOR',color)
}

//保存添加分类并作验证检查
export const saveCate = ({ dispatch,state },dia) => {
	dispatch('CHECK_CATE_TIPS');
	if(state.checkInfo.saveOk){
        const newCate = {
            id:state.cateInfo.id,
            smCgSysuuid:state.cateInfo.smCgSysuuid,
            smName:state.cateInfo.smName,
            smPicBigUrl:state.cateInfo.smPicBigUrl,
            smPicSmallUrl:state.cateInfo.smPicSmallUrl,
            smFlag:state.cateInfo.smFlag
        }
        $.post('classify/SaveOrUpdate',newCate,function(res){
            if(res.flag == 'success'){
                dispatch('CLEAN_CATE_INFO');
                dispatch('QUITE_ALL_TIPS');
                $.post('classify/search',function(list){
                    dispatch('UPDATE_CATE_LIST',list.data);
                    dispatch('SET_ACTIVE_LIST',list.data.content[0]);
                    $.post('smCon/search',{smCgSysuuid:list.data.content[0].smCgSysuuid},function(res){
                        dispatch('SET_SPECIAL_LIST',res);
                            //翻页
                         $("#Pagination").pagination(res.total, {
                            callback:pageselectCallback,//PageCallback() 为翻页调用次函数。
                            prev_text: " 上一页",
                            next_text: "下一页 ",
                            items_per_page: 10, //每页的数据个数
                            num_display_entries: 4, //两侧首尾分页条目数
                            current_page: state.pagination.current,   //当前页码
                            num_edge_entries: 2 //连续分页主体部分分页条目数
                        });

                         function pageselectCallback(page_id, jq) {
                            dispatch('SET_PAGINATION',page_id);
                            $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,currentPage:state.pagination.current},function(res){
                                dispatch('SET_SPECIAL_LIST',res);
                            })
                            return false;
                        }
                    })
                })
            }else{
                console.log(res.flag);
            }
        })  
		dispatch('SET_CLOSE_DIALOG',dia);
	}
}
//取消检查提示语
export const quiteTips = ({ dispatch,state },tip) =>{
	dispatch('QUITE_CATE_TIPS',tip)
}
//上传图片
export const uploadImg = ({ dispatch,state } ,img_info) => {
	var vThis = this;
	var datas = img_info;
	$.ajaxFileUpload({
        url: 'up/ntpl/upload', //用于文件上传的服务器端请求地址
        type:'post',
        secureuri: false, //一般设置为false
        fileElementId:'doc',
        dataType: 'json', //返回值类型 一般设置为json
        data:datas,//传参数给后台
        success: function (res){  //服务器成功响应处理函数
            dispatch('UPLOAD_IMG',res);
        },
        error:function(res){
            console.log(res)
        }
	});
} 
//编辑分类信息
export const editCateInfo = ({ dispatch,state },data) =>{
    dispatch('CLEAN_CATE_INFO');
    dispatch('QUITE_ALL_TIPS');
    dispatch('SET_SHOW_DIALOG','addcate', '编辑分类');
    console.log(data.id);
    $.post('classify/toEdit',{id:data.id},function(res){
        if(res.flag == 'success'){
            dispatch('UPDATE_CATE_INFO',res)
        }
    })
}
//删除分类信息弹窗
export const delCateDia = ({ dispatch } ,list) =>{
    dispatch('SET_SHOW_DIALOG','confirm');
    dispatch('SET_CONFIRM_CATE_INFO');
    dispatch('SET_DEL_CATE', list)
}
//确认弹窗确认后执行何种删除方法
export const delCateList = ({ dispatch,state }, action) =>{
    if(action == 'delCate'){
        const aid = state.delCate.id;
        $.post('classify/delete',{id:aid},function(res){
            if(res.flag == 'success'){
                dispatch('SET_CLOSE_DIALOG','confirm');
                $.post('classify/search',function(list){
                    dispatch('UPDATE_CATE_LIST',list.data)
                    dispatch('SET_ACTIVE_LIST',list.data.content[0]);
                    $.post('smCon/search',{smCgSysuuid:list.data.content[0].smCgSysuuid},function(res){
                        dispatch('SET_SPECIAL_LIST',res);
                            //翻页
                         $("#Pagination").pagination(res.total, {
                            callback:pageselectCallback,//PageCallback() 为翻页调用次函数。
                            prev_text: " 上一页",
                            next_text: "下一页 ",
                            items_per_page: 10, //每页的数据个数
                            num_display_entries: 4, //两侧首尾分页条目数
                            current_page: state.pagination.current,   //当前页码
                            num_edge_entries: 2 //连续分页主体部分分页条目数
                        });
                    })
                })
                function pageselectCallback(page_id, jq) {
                    dispatch('SET_PAGINATION',page_id);
                    $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,currentPage:state.pagination.current},function(res){
                        dispatch('SET_SPECIAL_LIST',res);
                    })
                    return false;
                }
            }else{
                console.log(res.flag);
            }
        })
    }else if(action == 'delSpecial'){
        $.post('smCon/delete',{id:state.delSpecial.id,smConSysuuid:state.delSpecial.smConSysuuid},function(res){
            if(res.status == 'success'){
                dispatch('SET_CLOSE_DIALOG','confirm');
                $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,smBodyTitle:state.specialList.searchKey},function(res){
                    dispatch('SET_SPECIAL_LIST',res);
                        //翻页
                     $("#Pagination").pagination(res.total, {
                        callback:pageselectCallback,//PageCallback() 为翻页调用次函数。
                        prev_text: " 上一页",
                        next_text: "下一页 ",
                        items_per_page: 10, //每页的数据个数
                        num_display_entries: 4, //两侧首尾分页条目数
                        current_page: state.pagination.current,   //当前页码
                        num_edge_entries: 2 //连续分页主体部分分页条目数
                    });
                    function pageselectCallback(page_id, jq) {
                        dispatch('SET_PAGINATION',page_id);
                        $.post('smCon/search',{smCgSysuuid:state.activeList.smCgSysuuid,currentPage:state.pagination.current},function(res){
                            dispatch('SET_SPECIAL_LIST',res);
                        })
                        return false;
                    }
              })
           }
        })
    }else if(action == 'copyTips'){
        dispatch('SET_CLOSE_DIALOG','confirm');
    }else if(action == 'addSpecial'){
        dispatch('SET_CLOSE_DIALOG','confirm');
    }
    
}
//点击添加更多
export const addMoreData = ({ dispatch,state }) =>{
    dispatch('UPDATE_CATE_PAGE');
    const page = state.addMore.page;
    $.post('classify/searchMore',{pages:page},function(res){
        if(res.flag=='success'){
            dispatch('ADD_CATE_LIST',res.data);
        }else{
            console.log(res.flag);
        }
    })
}

//复制链接弹窗
export const copyUrl = ({ dispatch }) =>{
    dispatch('SET_COPY_INFO');
    dispatch('SET_SHOW_DIALOG','confirm');
}

//新增专题
export const addSpecial = ({ dispatch,state }) =>{
    if(state.cateList.length < 1){
        dispatch('SET_SPE_INFO');
        dispatch('SET_SHOW_DIALOG','confirm');
    }else{
        //新增加专题跳转地址
        window.location.href ='http://www.nativejs.org.cn';
    }
    
}


