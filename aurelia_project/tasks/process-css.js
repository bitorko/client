import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';
import bourbon from 'bourbon';
import neat from 'bourbon-neat';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [].concat(bourbon.includePaths, neat.includePaths)
    }).on('error', sass.logError))
    .pipe(build.bundle());
}
