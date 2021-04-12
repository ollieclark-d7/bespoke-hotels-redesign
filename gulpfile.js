const gulp = require("gulp");
const sass = require("gulp-sass");
const sassglob = require("gulp-sass-glob");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");
const del = require("del");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const replace = require("gulp-replace");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");

const paths = {
  styles: {
    src: "src/scss/screen.scss",
    dest: "dist/css",
  },
  unminstyles: {
    src: "src/scss/screen.scss",
    dest: "dist/css",
  },
  fonts: {
    src: "src/fonts/**/*",
    dest: "dist/fonts",
  },
  scripts: {
    src: "src/js/footer/*.js",
    dest: "dist/js",
  },
  headscripts: {
    src: "src/js/head/*.js",
    dest: "dist/js",
  },
  vendors: {
    src: "src/vendors/**/*.js",
    dest: "dist/js",
  },
  images: {
    src: "src/images/**/*",
    dest: "dist/assets/images",
  },
};

const clean = () => del(["dist"]);

const unminstyles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(plumber())
    .pipe(sassglob())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(
      rename({
        basename: "screen",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());

// Convert scss to css, auto-prefix and rename into styles.min.css
const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(plumber())
    .pipe(sassglob())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        basename: "screen",
        suffix: ".min",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());

// Minify all javascript files and concat them into a single app.min.js
const scripts = () =>
  gulp
    .src(paths.scripts.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["babel-preset-env"],
      })
    )
    .pipe(terser())
    .pipe(concat("footer.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest));

const fonts = () => gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));

const headscripts = () =>
  gulp
    .src(paths.headscripts.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["babel-preset-env"],
      })
    )
    .pipe(terser())
    .pipe(concat("head.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.headscripts.dest));

// Minify all javascript vendors/libs and concat them into a single vendors.min.js
const vendors = () =>
  gulp
    .src(paths.vendors.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["babel-preset-env"],
      })
    )
    .pipe(terser())
    .pipe(concat("vendors.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.vendors.dest));

// Copy and minify images
const images = () =>
  gulp
    .src(paths.images.src)
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));

// Watches all .scss, .js and .html changes and executes the corresponding task
function watchFiles() {
  browserSync.init({
    proxy: "http://localhost/bespoke-redesign/",
    ghostMode: false,
  });

  gulp.watch("**/*.scss", unminstyles);
  gulp.watch("**/*.scss", styles);
  gulp.watch(paths.vendors.src, vendors).on("change", browserSync.reload);
  gulp
    .watch(paths.headscripts.src, headscripts)
    .on("change", browserSync.reload);
  gulp.watch(paths.scripts.src, scripts).on("change", browserSync.reload);
  gulp.watch(paths.images.src, images).on("change", browserSync.reload);
  gulp.watch("**/*.php").on("change", browserSync.reload);
  gulp.watch("**/*.twig").on("change", browserSync.reload);
}

const build = gulp.series(
  clean,
  gulp.parallel(
    unminstyles,
    fonts,
    styles,
    vendors,
    headscripts,
    scripts,
    images
  )
);

const watch = gulp.series(build, watchFiles);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.vendors = vendors;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = build;
