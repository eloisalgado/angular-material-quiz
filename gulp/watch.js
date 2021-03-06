'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

  gulp.watch([
    path.join(conf.paths.src, '/*.html'),
    path.join(conf.paths.src, '/views/**/*.html'),
    'bower.json'
    ], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/styles/*.css'),
    path.join(conf.paths.src, '/styles/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/scripts/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/views/**/*.html'),
  ], function(event) {
    browserSync.reload(event.path);
  });
});
