var jcrop_api;
var MyImg = {
    'x':'',
    'y':'',
    'width':'',
    'height':'',
    'boxwidth':'',
    'boxheight':''
};
var imgHtml =
    '<div class="update-group">' +
    '<div class="update-img">' +
    '<div class="img-box " id="localImag">' +
    '<p id="img-box-tips">支持jpg、jpeg、png格式图片</p>' +
    '<img id="preview" class="preview" style="max-width: 100%" />' +
    '</div>' +
    '<div class="view-box">' +
    '<p class="tips">效果预览</p>' +
    '<div class="view-img" id="view-img">' +
    '<img id="smallview"  class="smallview" />' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="update-btn-group">' +
    '<form method="get" action="xznetwork" name="textfile">' +
    '<input v-on:change="jsUpfile()" autoComplete="off" type="file" name="doc" id="doc" class="doc js-upfile" accept="image/jpg,image/jpeg,image/png"/>' +
    '</form>' +
    '<button class="btn-update" onclick="" type="button"><span class="icon-add"></span>上传本地图片</button>' +
    '<p class="tips">支持jpg、jpeg、png格式图片大小不超过2M</p>' +
    '</div>' +
    '</div>'

$(document).on('change','.js-upfile',function(){
    $('#preview').Jcrop({
    },function(){
        jcrop_api = this;   });
    setImagePreview();
});

function setImagePreview() {
    $('.update-btn-group .tips').css('color','#999').html('支持jpg、jpeg、png格式图片大小不超过2M');
    var im_w,im_h;
    var fileSuffixs = 'image/jpg,image/jpeg,image/png';
    var doc = document.getElementById('doc');
    var pre = document.getElementById('preview');
    var smlView = document.getElementById('smallview');
    var sViewBox = document.getElementById('view-img');
    var sWidth = parseFloat(sViewBox.style.width);
    var sHeight = parseFloat(sViewBox.style.height);
    //console.log(sWidth);
    var localImag = document.getElementById('localImag');
    var imgTips = document.getElementById('img-box-tips');
    var files = doc.files[0];
    var fileType = files.type;
    jcrop_api.destroy();
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
                onSelect: showPreview,
                onChange: showPreview,
                aspectRatio: sWidth/sHeight,
                maxSize: [290,200],
                setSelect:[0,0,im_w,100]
            },function(){
                jcrop_api = this;
                var bounds = jcrop_api.getBounds();
                boundx = bounds[0];
                boundy = bounds[1];
            });
        }
    }

};
function showPreview(coords)
{
    setTimeout(function(){
        var rx = $('.view-img').width() / coords.w;
        var ry = $('.view-img').height() / coords.h;
        $('#smallview').css({
            width: Math.round(rx*boundx ) + 'px',
            height: Math.round(ry*boundy ) + 'px',
            marginLeft: '-' + Math.round(rx * coords.x) + 'px',
            marginTop: '-' + Math.round(ry * coords.y) + 'px'
        });
        $('#smallview').attr({
            'src': $('#preview').attr('src')
        });
        MyImg.x = Math.abs(parseInt($('#view-img img').css('margin-left')));
        MyImg.y = Math.abs(parseInt($('#view-img img').css('margin-top')));
        MyImg.width = parseInt($('#view-img').width());
        MyImg.height = parseInt($('#view-img').height());
        MyImg.boxwidth =  parseInt($('#smallview').width());
        MyImg.boxheight = parseInt($('#smallview').height());
    },10);
}

	