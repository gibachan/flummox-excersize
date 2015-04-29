var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

function errorHandler(err) {
  console.log('### ' + err.message);
}

gulp.task('build', function() {
    return browserify({
        entries:['./app.js'],
    })
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['build']);
