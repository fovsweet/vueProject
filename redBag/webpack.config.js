
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	resolve:{
		 // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
		root:'./static/js',
		alias:{
			'jquery':'jquery.min.js',
			'swiper':'swiper.min.js',
			'zepto':'zepto.min.js',
			'vue':'vue.js',
			'cacl':'caclrem.js',
			'vue-tap':'vue-tap-click.js'
		}
	},
	entry:{
		slide:'./src/3d-slide/slide.js',
		mapimg:'./src/mapimg/mapimg.js',
		listorder:'./src/mapimg/list.js'
	},
	output:{
		path:'build',
		filename:'[name].all.js'
	},
	//提取公共js
	//plugins:[commonsPlugin],
	module:{
		loaders:[
		{ test:/\.vue$/, loader: 'vue' },
		{ test:/\.css$/, loader:'style-loader!css-loader' },
		{ test:/\.(png|jpg|gif)$/, loader:'url-loader'},
		{ test:/\.html$/, loader:'html-loader'}
		]
	},
	vue:{
		loaders:{
			css:'style!css!less'
		}
	}
}