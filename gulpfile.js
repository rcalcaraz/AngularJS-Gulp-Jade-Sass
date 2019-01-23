/* TODO 
- Concat, minify and uglify
*/

const {
    src,
    dest,
    series,
    watch
} = require('gulp');

const jade = require('gulp-jade');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');
const server = require('browser-sync').create();

function html() {
    return src(['./src/**/*.jade', '!./src/bower_components/**'])
        .pipe(jade())
        .pipe(dest('./dist/'));
}

function css() {
    return src(['./src/**/*.scss', '!./src/bower_components/**'])
        .pipe(sass())
        .pipe(dest('./dist/'));
}

function bowerComponents() {
    return src('./src/bower_components/**')
        .pipe(dest('./dist/bower_components/'));
}

function buildES2015() {
    return browserify({
            entries: ["./src/app.js"]
        })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source("app.js"))
        .pipe(dest("./dist"));
}

function bowerComponents() {
    return src('./src/bower_components/**')
        .pipe(dest('./dist/bower_components/'));
}

function startServer() {
    server.init({
        server: {
            baseDir: "./dist"
        }
    });
}

function reload(done) {
    server.reload();
    done();
  }

watch('./src/**/*.jade', series(html,reload));
watch('./src/**/*.scss', series(css,reload));
watch('./src/**/*.js', series(buildES2015,reload));
watch('./src/bower_componets/**', series(bowerComponents,reload));

exports.build = series(buildES2015,html,css,bowerComponents);
exports.default = series(buildES2015,html,css,bowerComponents,startServer);
