var gulp = require('gulp');
var Proxy = require('gulp-connect-proxy');
var connect = require('gulp-connect');

gulp.task('watch',function(){
	gulp.watch(['./build/*.js'],['html'])
})

gulp.task('connect',function(){
	connect.server({
		root:'./',
		port:'8089',
		ip:'192.168.31.110',
		livereload:true,
		middleware:function(connect,opt){
			opt.route='proxy';
			var proxy = new Proxy(opt);
			return [proxy];
		}
	})
})

gulp.task('html',function(){
	gulp.src('./html/*.html')
	.pipe(connect.reload())
})


gulp.task('default',['connect','watch'])