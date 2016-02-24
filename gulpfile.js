var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    addsrc = require('gulp-add-src');

gulp.task('scripts', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'src/js/**/*.js'
        ])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('web/dist/js'));
});

gulp.task('sass', function() {
    gulp.src([
            'src/sass/main.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(addsrc.prepend('node_modules/bootstrap/dist/css/bootstrap.css'))
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('web/dist/css'));
});

gulp.task('fonts', function() {
    gulp.src([
            'node_modules/bootstrap/dist/fonts/*',
            'src/fonts/*'
        ])
        .pipe(gulp.dest('web/dist/fonts'));
});

gulp.task('default', function() {
    gulp.run('scripts', 'sass', 'fonts');
});

gulp.task('watch', function() {
    gulp.run('default');

    gulp.watch('src/sass/**/*.scss', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('sass');
    });

    gulp.watch('src/js/**/*.js', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('scripts');
    });
});
