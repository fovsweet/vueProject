var webpack = require('webpack');
/*var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name:['cacl','vue'],
	minChunks:Infinity
});*/
module.exports = {
	resolve:{
		extensions:['','.js','.vue'],
		root:'./src/assents/js',
		alias:{
			'jquery':'jquery.min.js',
			'swiper':'swiper.min.js',
			'cacl':'caclrem.js',
			'zepto':'zepto.min.js',
			'moment':'moment.js',
		}
	},
	entry:{
		festival:'./src/festivalCom/festival',
		mycenter:'./src/myCenterCom/myCenter.js',
		mystore:'./src/myCenterCom/myStore.js',
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
		/*{test:/\.(png|gif|jpg)$/,loader:'url?limit=8&name=../images/[name].[ext]'},*/
		{test:/\.(png|gif|jpg)$/,loader:'url?limit=&name=images/festival/[name].[ext]'},
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