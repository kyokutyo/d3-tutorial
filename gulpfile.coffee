gulp = require 'gulp'
jshint = require 'gulp-jshint'
browserSync = require 'browser-sync'
files = ['app/*.html', 'app/css/*.css', 'app/src/*.js']

gulp.task 'browserSync', ->
  browserSync.init null,
    notify: true
    browser: 'google chrome canary'
    server:
      baseDir: 'app'

gulp.task 'jshint', ->
  gulp.src 'app/src/*.js'
  .pipe jshint()
  .pipe jshint.reporter 'default'

gulp.task 'watch', ->
  gulp.watch 'app/src/*.js', ['jshint']
  gulp.watch files, browserSync.reload

gulp.task 'default', ['browserSync', 'watch']
