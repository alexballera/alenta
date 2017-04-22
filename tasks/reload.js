import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/styles/scss/**/*.scss',
  './src/index.scss',
  './src/index.js',
  './src/scripts/lib/*.js'
]).on('change', browserSync.reload)
