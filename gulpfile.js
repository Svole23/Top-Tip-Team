"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "app"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
// function browserSyncReload(done) {
//   browsersync.reload()
//   done();
// }

// Clean assets
function clean() {
  return del(["dist"]);
}

// Optimize Images
function images() {
  return gulp
    .src("app/images/**/*")
    .pipe(newer("dist/images/"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest("dist/images/"));
}

// CSS task
function css() {
  return gulp
    .src("app/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("app/css/"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("dist/css/"))
}

// html task
function html() {
  return gulp
    .src("app/*.html")
    .pipe(gulp.dest("dist"))
}

// video task
function video() {
  return gulp
    .src("app/video/**/*")
    .pipe(gulp.dest("dist/video"))
}

// font task
function fonts() {
  return gulp
    .src("app/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"))
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["app/js/**/*"])
    .pipe(plumber())
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(["app/js/**/*"])
      .pipe(plumber())
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("dist/js/"))
      .pipe(browsersync.stream())
  );
}


// Watch files
function watchFiles() {
  gulp.watch("app/sass/**/*", css);
  gulp.watch("app/css/style.css", css);
  gulp.watch("app/js/**/*", gulp.series(scriptsLint, scripts));
  gulp.watch("app/img/**/*", images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(css, images, js, html, fonts, video));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
