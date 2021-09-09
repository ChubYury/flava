module.exports = function() {
    $.gulp.task('watch',function(){
        // $.gulp.watch('src/pug/templates/**/*.pug',$.gulp.series('pug'));
        $.gulp.watch('src/pug/templates/**/*.html',$.gulp.series('pug'));
        $.gulp.watch('src/static/css/**/*.scss',$.gulp.series('sass'));
        $.gulp.watch('src/static/img/*',$.gulp.series('copy'));
    });
}
