import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import babelify from 'babelify'
import rename from 'gulp-rename'

gulp.task('build:scripts', () => {
  var presets = {
    presets: 'env'
  }

  return browserify('./src/index.js')
    .transform(babelify, {presets})
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/scripts'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/scripts'))
    .pipe(gulp.dest('./build/scripts'))
    .pipe(gulp.dest('./public/scripts'))
})
