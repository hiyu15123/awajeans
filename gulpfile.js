const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;

gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("pug", function () {
  return gulp
    .src("src/pug/**/*.pug")
    .pipe(pug({ pretty: false }))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("js", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(uglify()) // JavaScriptファイルを圧縮
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("sass", "pug", "js"));

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
});

gulp.task("dev", gulp.series("default", "watch"));
