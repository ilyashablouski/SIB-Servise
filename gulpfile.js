// Plugins
const {
  parallel,
  series,
  watch,
  src,
  dest,
} = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const babel = require('gulp-babel');
const gcmq = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const smartgrid = require('smart-grid');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Globs
const config = {
  root: './dev/',
  pug: {
    src: 'pug/+(product).pug',
    watch: 'pug/**/*.pug',
    dest: './prod',
  },
  css: {
    src: 'less/+(styles).less',
    watch: 'less/**/*.less',
    dest: './prod/css',
  },
  js: {
    src: 'js/+(common).mjs',
    watch: 'js/**/*.mjs',
    prod: './prod/js',
  },
};

/**
 * Compile pug to html
 *
 * @return {string} Return file's paths
 */
function html() {
  return src(config.root + config.pug.src)
      .pipe(pug({
        pretty: true,
      }))
      .pipe(dest(config.pug.dest));
}

/**
 * Compile less to css
 *
 * @return {string} Return file's paths
 */
function css() {
  return src(config.root + config.css.src)
      .pipe(less())
      .pipe(gcmq())
      .pipe(dest(config.css.dest))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
      }))
      .pipe(cleanCSS({
        level: 2,
      }))
      .pipe(rename({
        extname: '.min.css',
      }))
      .pipe(dest(config.css.dest))
      .pipe(browserSync.stream());
}

/**
 * Save js to prod directory
 *
 * @return {string} Return file's paths
 */
function js() {
  return src(config.root + config.js.src)
      .pipe(dest(config.js.prod))
      .pipe(babel())
      .pipe(uglify({
        toplevel: true,
      }))
      .pipe(rename({
        extname: '.js',
      }))
      .pipe(dest(config.js.prod));
}

/**
 * Initialize smart-grid library
 *
 * @param {*} done End async function
 */
function grid(done) {
  smartgrid('./dev/less', {
    offset: '1.5rem',
    container: {
      maxWidth: '1140px',
    },
  });
  done();
}

/**
 * Initialize live reload
 *
 * @param {*} done End async function
 */
function livereload(done) {
  browserSync.init({
    server: {
      baseDir: './prod/',
      index: 'product.html',
    },
  });

  done();
}

/**
 * Task's assignment
 */
exports.html = html;
exports.css = css;
exports.grid = grid;
// Build final bundle from pug, less, js
exports.build = parallel(html, css, js);
// Watch changes from pug, less, js
exports.watch = series(parallel(html, css, js), livereload,
    function() {
      watch(config.root + config.pug.watch, series(html, function(done) {
        browserSync.reload();

        done();
      }));

      watch(config.root + config.css.watch, css);


      watch(config.root + config.js.watch, series(js, function(done) {
        browserSync.reload();

        done();
      }));
    });
