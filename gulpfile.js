var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
//var plumber = require('plumber');
var plumber = require('gulp-plumber');

//sass
gulp.task('sass', function() {
	gulp.src('scss/main.scss')
	.pipe(plumber())
	.pipe(sass({errLogToConsole:true}))
	.pipe(gulp.dest('css/'))
})

//default
gulp.task('default', function() {
	gulp.run('sass');
	gulp.watch('scss/**', function(event){
		gulp.run('sass');
	})
})
