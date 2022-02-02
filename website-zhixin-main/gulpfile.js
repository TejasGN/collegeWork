const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();

// Sass Task
scssTask = () => {
    return src('css/styles.scss')
        .pipe(sass())
        .pipe(dest('css'));      
}

// Browsersync Tasks
browserSyncServe = (cb) => {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

browserSyncReload = (cb) => {
    browsersync.reload();
    cb();
}

// Watch Task
watchTask = () => {
    watch('*.html', browserSyncReload);
    watch(['css/*.scss', 'js/*.js'], series(scssTask, browserSyncReload));
}

// Default Task
exports.default = series(
    scssTask,
    browserSyncServe,
    watchTask
);