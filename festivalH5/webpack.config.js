var webpack = require('webpack');
/*var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name:['cacl','vue'],
	minChunks:Infinity
});*/
module.exports = {
	resolve:{
		extensions:['','.js','.vue'],
		root:'./static/js',
		alias:{
			'jquery':'jquery.min.js',
			'swiper':'swiper.min.js',
			'cacl':'caclrem.js',
			'zepto':'zepto.min.js',
			'moment':'moment.js',
		}
	},
	entry:{
		festival:'./src/festival',
		mycenter:'./src/myCenter.js',
		vuer: ["vue","vuex"],
	},
	output:{
		path:'build',
		filename:'[name].all.js'
	},
	plugins: [
	    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vuer", /* filename= */"vuer.common.js")
	],
	module:{
		loaders:[
		{test:/\.vue$/,loader:'vue'},
		{test:/\.js$/,loader:'babel',exclude:/node_modules/},
		{test:/\.css$/,loader:'style!css!autoprefixer'},
		{test:/\.less/,loader:'style!css!autoprefixer!less'},
		{test:/\.(png|gif|jpg)$/,loader:'url?limit=8&name=fesImg/[name].[ext]'},
		{test:/\.(html|tpl)/,loader:'html-loader'}
		]
	},
	vue:{
		loaders:{
			css:'style!css!autoprefixer!less'
		}
	},
	babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	},
	devSever:{
		historyApiFallback:true,
		hot:false,
		inline:true,
		grogress:true
	}
}