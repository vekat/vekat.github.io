var gulp = require('gulp');
var babel = require('gulp-babel');
var sequence = require('gulp-sequence');

var del = require('del');
var sync = require('browser-sync').create();
var reload = sync.reload;

gulp.task('serve', ['js', 'css', 'assets'], () => {
  sync.init({
    server: './'
  });

  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('./src/css/**/*', ['css']);
  gulp.watch('./src/assets/**/*', ['assets']);
  // gulp.watch('./index.html').on('change', sync.reload);
});

gulp.task('js', ['clean:js'], () => {
  return gulp.src('./src/js/**/*')
    .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
    .pipe(sync.stream());
});

gulp.task('css', ['clean:css'], () => {
  return gulp.src('./src/css/**/*')
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('assets', ['clean:assets'], () => {
  return gulp.src(['./src/assets/**/*'])
    .pipe(gulp.dest('./dist/assets'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('clean:js', () => del('./dist/js/**/*'));
gulp.task('clean:css', () => del('./dist/css/**/*'));
gulp.task('clean:assets', () => del('./dist/assets/**/*'));

gulp.task('default', ['serve']);
