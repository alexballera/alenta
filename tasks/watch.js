import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch('./src/styles/scss/**/*.scss', ['styles'])
  gulp.watch('./src/scripts/**/*.js' ['build:scripts'])
  gulp.watch('./src/videos/**/*.*', ['build:images'])
})
