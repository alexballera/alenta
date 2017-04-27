import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/styles/scss/**/*.scss',
  './src/components/**/*.scss',
  './src/index.scss',
  './src/index.js',
  './src/scripts/lib/*.js',
  './src/components/**/*.js'
]).on('change', browserSync.reload)
