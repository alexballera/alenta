import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch(['./src/styles/scss/**/*.scss', './src/index.scss'], ['styles'])
  gulp.watch('./src/videos/**/*.*', ['build:images'])
  gulp.watch(['./src/scripts/lib/*.*.js', './src/index.js'], ['build:scripts'])
})
