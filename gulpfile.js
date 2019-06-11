let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let imageMin = require('gulp-imagemin');
let minifyJs = require('gulp-minify');
let concatJs = require('gulp-concat');
let replace = require('gulp-replace');

let configPath = {
    src: './dev/src/sass/**/*.scss',
    srcJs: './dev/src/js/**/*.js',
    dest: './dev/src/css/',
    dev: './dev/**/*',
    dist: './dist/'
};

gulp.task('build', ['sassTransformToCss', 'dist', 'imgMinify', 'changePath'], () =>  {
});

gulp.task('dist', () => {
    return gulp.src('./dev/**/*')
    .pipe(gulp.dest(configPath.dist));
});

gulp.task('serverSimulate', ['watch'], () =>  {
    browserSync.init({
        server: {
            baseDir: './dev'
        },
        startPath: 'index.html'
    });
});

gulp.task('sassTransformToCss', () =>  {
    return gulp.src(configPath.src)
        .pipe(sass())
        .pipe(gulp.dest(configPath.dest));
});

gulp.task('minifyJs', () => {
    return gulp.src(configPath.srcJs)
    .pipe(concatJs('main.js'))
    .pipe(minifyJs())
    .pipe(gulp.dest('./dev/src/js/'));
});

gulp.task('watch', () =>  {
    gulp.watch(configPath.src, ['sassTransformToCss']).on('change', browserSync.reload);
    gulp.watch('./dev/src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./dev/index.html').on('change', browserSync.reload);
});

gulp.task('imgMinify', () =>  {
    gulp.src('./dev/src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/src/img/'));
});

gulp.task('changePath', () => {
    gulp.src(['./dev/index.html'])
    .pipe(replace('src/', 'sextafeira/src/'))
    .pipe(gulp.dest('./dist'));
});
