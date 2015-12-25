'use strict';

var argv        = require('yargs').argv;
var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var minifyCss   = require('gulp-minify-css');
var modRewrite  = require('connect-modrewrite');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var ts          = require('gulp-typescript');
var uglify      = require('gulp-uglify');

var nosourcemaps = argv.nosourcemaps;
if (nosourcemaps)
   process.stdout.write("-- generating static files with no sourcemaps -- \n");
   
var cssPaths  = ['sass/*.scss'],
    jsPaths   = ['ts/**/*.ts', '!ts/dist/*.js'],
    htmlPaths = ['**/*.html'];

// combine and compile css with sourcemaps
gulp.task('css', function () {
   return gulp.src(cssPaths)
      .pipe(gulpif(!nosourcemaps, sourcemaps.init()))
      .pipe(sass())
      .pipe(minifyCss())
      .pipe(concat('out.css'))
      .pipe(gulpif(!nosourcemaps, sourcemaps.write()))
      .pipe(gulp.dest('dist/sass/'))
      .pipe(browserSync.stream());
});

// combine and compile js with sourcemaps
gulp.task('js', function () {
   return gulp.src(jsPaths)
      .pipe(gulpif(!nosourcemaps, sourcemaps.init()))
      .pipe(ts({
         noImplicitAny: true,
         outFile: 'out.js',
         declaration: false
      }))
      .pipe(uglify())
      .pipe(gulpif(!nosourcemaps, sourcemaps.write()))
      .pipe(gulp.dest('dist/ts/'))
      .pipe(browserSync.stream());
});

// default gulp task to generate scripts & css
gulp.task('default', ['css', 'js']);

// run browser-sync server and watch for sass changes
gulp.task('serve', ['css', 'js'], function () {
  	browserSync.init({
      server: {
         baseDir: "./",
         middleware: [
            // angular html5 mode apache rewrite
            modRewrite([
               '!\\.\\w+$ /index.html [L]'
            ])
         ]
      }
  	});

   gulp.watch('sass/**/*.scss', ['css']).on('change', browserSync.reload);
   gulp.watch(jsPaths, ['js']).on('change', browserSync.reload);
   gulp.watch(htmlPaths).on("change", browserSync.reload);
});
