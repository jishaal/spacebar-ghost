'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            includePaths: require('node-neat').includePaths
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
});

gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('copy', function () {
    gulp.src('prism.js', {cwd: './src/js'})
        .pipe(gulp.dest('./assets/js'));

    gulp.src(['icomoon.eot', 'icomoon.svg', 'icomoon.ttf', 'icomoon.woff'], {cwd: './src/fonts/fonts'})
        .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('default', ['copy', 'sass', 'sass:watch']);
