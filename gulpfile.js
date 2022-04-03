var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass")(require("sass"));

gulp.task("serve", loadServe);

function loadServe() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/*.scss", gulp.series("sass"));
  gulp.watch("./*.html").on("change", browserSync.reload);
}

gulp.task("sass", compiler);

function compiler() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

gulp.task("start", gulp.series("serve", "sass"));
