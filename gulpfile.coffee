gulp = require 'gulp'
browserSync = require 'browser-sync'
files = ['app/*.html', 'app/css/*.css', 'app/src/*.js']

gulp.task 'browserSync', ->
  browserSync.init null,
    notify: true
    browser: 'google chrome canary'
    server:
      baseDir: 'app'

gulp.task 'watch', ->
  gulp.watch files, browserSync.reload

gulp.task 'default', ['browserSync', 'watch']
