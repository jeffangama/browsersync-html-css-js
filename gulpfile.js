var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch("src/*.html").on("change", bs.reload);
    gulp.watch("src/*.css").on("change", bs.reload);
    gulp.watch("src/*.js").on("change", bs.reload);
});