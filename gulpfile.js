var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var scsslint = require('gulp-scss-lint');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("build-components", function () {
    return gulp.src("components/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"))
      .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('check-sass', function() {
  return gulp.src(['components/**/*.scss']) // Gets all files ending with .scss
    .pipe(scsslint({'config': 'lint.yml'}))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('sass', function() {
  return gulp.src('components/**/*.scss') // Gets all files ending with .scss
    .pipe(scsslint({'config': 'lint.yml'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      	stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('build', ['build-components', 'sass']);

gulp.task('watch', ['browserSync', 'build-components', 'sass'], function (){
  	gulp.watch('components/**/*.scss', ['check-sass', 'sass']);
    gulp.watch('components/**/*.js', ['build-components']);
});

