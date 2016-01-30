'use strict';

var argv        = require('yargs').argv,
    // babel       = require('gulp-babel'),
    bower       = require('gulp-bower'),
    browserSync = require('browser-sync').create(),
    cache       = require('gulp-angular-templatecache'),
    concat      = require('gulp-concat'),
    cssnano     = require('gulp-cssnano'),
    gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    jshint      = require('gulp-jshint'),
    modRewrite  = require('connect-modrewrite'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    ts          = require('gulp-typescript'),
    uglify      = require('gulp-uglify');

var nosourcemaps = argv.nosourcemaps;
if (nosourcemaps)
    process.stdout.write("-- generating static files with no sourcemaps -- \n");

var cssPaths  = ['sass/*.scss'],
    jsPaths   = ['ts/**/*.ts', 'ts/**/*.js', '!ts/dist/*.js'],
    htmlPaths = ['**/*.html'],
    templates = ['templates/**/*.html'];

// combine and compile css with sourcemaps
gulp.task('css', function () {
    return gulp.src(cssPaths)
        .pipe(gulpif(!nosourcemaps, sourcemaps.init()))
        .pipe(sass())
        .pipe(concat('out.css'))
        .pipe(cssnano())
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

// generate and register html templates
gulp.task('templates', function () {
    return gulp.src(templates)
        .pipe(cache('templates.js', {
            root: 'templates/',
            standalone: true,
            module: 'templates'
        }))
        .pipe(gulp.dest('ts/app/'));
});

// download bower dependencies if needed
gulp.task('bowerInstall', function () {
    return bower();
});

// jshint
gulp.task('jshint', function () {
    return gulp.src(jsPaths)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// default gulp task to generate scripts & css
gulp.task('default', ['bowerInstall', 'css', 'jshint', 'templates', 'js']);

// run browser-sync server and watch for sass changes
gulp.task('serve', ['default'], function () {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [
                // angular html5 mode apache rewrite
                modRewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        }
    });

    gulp.watch('sass/**/*.scss', ['css']);
    gulp.watch(jsPaths, ['js']).on('change', browserSync.reload);
    gulp.watch(htmlPaths, ['templates', 'js']).on('change', browserSync.reload);
});
