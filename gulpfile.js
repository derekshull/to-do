var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var scsslint = require('gulp-scss-lint');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var styleInject = require("gulp-style-inject");
var ignore = require("gulp-ignore");

gulp.task("build-components", ["inject"], function () {
    return gulp.src("build/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"))
      .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('collect-sass', function() {
  return gulp.src('components/**/*.scss') // Gets all files ending with .scss
    .pipe(concat('styles.scss'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('change-css', function() {
  return gulp.src('components/**/*.scss') // Gets all files ending with .scss
    .pipe(ignore.exclude('_*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('inject', ['change-css'], function() {
  return gulp.src('components/**/*.js') // Gets all files ending with .scss
    .pipe(styleInject())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('sass', ['collect-sass'], function() {
  return gulp.src('dist/styles.scss') // Gets all files ending with .scss
    .pipe(scsslint({'config': 'lint.yml'}))
    .pipe(sass().on('error', sass.logError))
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

gulp.task('build', ['build-components']);

gulp.task('watch', ['browserSync', 'build-components'], function (){
    gulp.watch('components/**/*.scss', ['build-components']);
    gulp.watch('components/**/*.js', ['build-components']);
});

