/*
We keep things pretty simple here:
  - Require Gulp
  - Require Gulp Load Plugins and load all dependencies
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  cleanCSS = require('gulp-clean-css');
/* 
The main styles compliation function:
  1. Minify it.
  2. Turn it into a single file.
  3. Drop it into the css dir.
*/
gulp.task('styles', function(){
  return gulp.src('css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'))
});

/*
The main watch function:
  1. Look in the SASS dir for changes to .scss files.
  2. Run the 'styles' task on anything that changes.
*/

gulp.task('default', function(){
  gulp.watch('css/*.css', gulp.series('styles'));
});

gulp.task('watch', function(){
  gulp.watch('css/*.css', gulp.series('styles'));
});
