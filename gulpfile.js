const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');
const env = process.env.NODE_ENV;
const del = require("del");
const revCollector = require('gulp-rev-collector');
const html = require('./gulp-tasks/html')
const styles = require("./gulp-tasks/scss");
const assets = require("./gulp-tasks/assets");
const rev = require('gulp-rev');

const js = require('./gulp-tasks/js');
gulp.task('js', js);

gulp.task('assets', assets);
gulp.task('html', html);
gulp.task('styles', styles(browserSync));

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './public/'
    }
  })

  
  gulp.watch('src/styles/**/**.{scss,sass}', gulp.series('styles'));
  
  
  gulp.watch('src/assets/**/*.*').on('change', gulp.series('assets'));
  gulp.watch('public/assets/**/*.*').on('change', browserSync.reload);
  
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('public/*.html').on('change', browserSync.reload);
})

gulp.task("clean", () => {
  return del('public')
});

gulp.task('rev', function () {
  return gulp.src(['manifest/**/*.json', 'public/**/*.html'])
      .pipe(revCollector({
          replaceReved: true,
      }) )
      .pipe(gulp.dest('public'));
});

const tasks = (() => {
  let tasks = ['server'];
  tasks.unshift('js')
  let parallelTasks = ['styles', 'html'];
  if(env === 'production') {
    tasks = [
      'clean',
      gulp.parallel(...parallelTasks),
    ];
    tasks.push('js');
    tasks.push('rev');
    tasks.push('assets')
  }
  return tasks;
})()


gulp.task('default', gulp.series(...tasks));
