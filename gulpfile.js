var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var imageMin = require('gulp-imagemin');
var minifyJs = require('gulp-minify');
var concatJs = require('gulp-concat');

var configPath = {
    src: './dev/src/sass/**/*.scss',
    srcJs: './dev/src/js/**/*.js',
    dest: './dev/src/css/',
    dev: './dev/**/*',
    dist: './dist/'
};

gulp.task('build', ['sassTransformToCss', 'minifyJs', 'imgMinify'], function(){
    return gulp.src([
        './dev/index.html',
        './dev/data/**/*',
        './dev/src/css/reset.css',
        './dev/src/css/main.css',
        './dev/src/fonts/**/*',
        './dev/src/img/**/*',
        './dev/src/js/main-min.js',
        './dev/src/utils/angular/**/*'
    ])
    .pipe(gulp.dest(configPath.dist));
});

gulp.task('serverSimulate', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: './dev'
        },
        startPath: 'index.html'
    });
});

gulp.task('sassTransformToCss', function() {
    return gulp.src(configPath.src)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(configPath.dest));
});

gulp.task('minifyJs', function (){
    return gulp.src(configPath.srcJs)
    .pipe(concatJs('main.js'))
    .pipe(minifyJs())
    .pipe(gulp.dest('./dev/src/js/'));
});

gulp.task('watch', function() {
    gulp.watch(configPath.src, ['sassTransformToCss']).on('change', browserSync.reload);
    gulp.watch('./dev/src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./dev/index.html').on('change', browserSync.reload);
});

gulp.task('imgMinify', function() {
    gulp.src('./dev/src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/src/img/'));
});
