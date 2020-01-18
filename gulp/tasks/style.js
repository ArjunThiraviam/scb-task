var gulp = require('gulp');
var concat = require('gulp-concat');

const CSS_PATH = './../../app/assets/styles/**/*.css'

gulp.task('styles', function() {
    console.log('style task running');
    return gulp.src(CSS_PATH)
    .pipe(concat(styles.css))
    .pipe(gulp.dest('./../../dist'))
})