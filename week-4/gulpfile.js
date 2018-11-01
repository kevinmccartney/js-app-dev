const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch("*.html").on('change', bs.reload);
  gulp.watch("*.js").on('change', bs.reload);
});
