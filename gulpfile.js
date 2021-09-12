const { src, dest } = require('gulp');
var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');



function defaultTask(cb) {
    return src(['./src/pages/index.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(dest('./'));
    cb();
  }
  
  exports.default = defaultTask