
module.exports = {
	resolve:{
		extensions:['','.js','.vue'],
		root:'./static/js',
		alias:{
			'jquery':'jquery.min.js',
			'vue':'vue.js',
			'swiper':'swiper.min.js',
			'cacl':'caclrem.js',
			'zepto':'zepto.min.js',
			'moment':'moment.js',
			'clipboard':'clipboard.min.js'
		}
	},
	entry:{
		'main':'./src/main'
	},
	output:{
		path:'build',
		filename:'[name].all.js'
	},
	module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.less/, loader: 'style!css!autoprefixer!less'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
	vue: {
        loaders: {
            css: 'style!css!autoprefixer!less'
        }
    },
	babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devServer: {
	    historyApiFallback: true,
	    hot: false,
	    inline: true,
	    grogress: true,
	}
}