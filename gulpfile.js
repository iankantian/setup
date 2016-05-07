const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// gulp dependencies go here

gulp.task('default', function(){
    // run eslint
    gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
    // node src
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
    // browser src
    gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', function () {
    gulp.watch('./es6/**/*.js', ['default']);
});
