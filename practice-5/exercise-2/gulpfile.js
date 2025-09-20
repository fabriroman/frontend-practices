const { src, dest, series, parallel, watch } = require('gulp');
const { deleteAsync } = require('del');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const inject = require('gulp-inject');
const copy = require('gulp-copy');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');



const paths = {
  html: 'src/index.html',
  scssAll: 'src/css/**/*.scss',
  jsAll: 'src/js/**/*.js',
  imgAll: 'src/img/**/*.{png,jpg,jpeg,gif,svg}',
  dist: 'dist',
  distCSS: 'dist/css',
  distJS: 'dist/js',
  distIMG: 'dist/img'
};

function clean() {
  return deleteAsync([paths.dist]);
}

function styles() {
  return src(paths.scssAll)
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(dest(paths.distCSS))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(paths.jsAll)
    .pipe(concat('bundle.min.js'))
    .pipe(terser())
    .pipe(dest(paths.distJS));
}

function html() {
  const sources = src([`${paths.distCSS}/*.css`, `${paths.distJS}/*.js`], { read: false });
  return src(paths.html)
    .pipe(inject(sources, { ignorePath: 'dist', addRootSlash: false }))
    .pipe(dest(paths.dist));
}

function images() {
  return src(paths.imgAll)
    .pipe(imagemin({ verbose: true }))
    .pipe(copy('dist', { prefix: 1 }));
}


const build = series(clean, parallel(styles, scripts, images), html);

function serve() {
  browserSync.init({ server: { baseDir: paths.dist }, open: false, port: 3000 });
  watch(paths.scssAll, series(styles, html));
  watch(paths.jsAll, series(scripts, html)).on('change', browserSync.reload);
  watch(paths.html, series(html)).on('change', browserSync.reload);
  watch(paths.imgAll, series(images)).on('change', browserSync.reload);
}

exports.build = build;
exports.serve = series(build, serve);
exports.default = exports.serve;
