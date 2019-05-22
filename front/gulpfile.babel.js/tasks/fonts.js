/*
 * @title Fonts
 * @description A task to copy fonts
 */

// Dependencies
import { src, dest } from 'gulp';
import gulpif from 'gulp-if';
import changed from 'gulp-changed';

// Config
import { paths } from '../config';

// Task
export function fonts() {
  return src(paths.fonts.src)
    .pipe(changed(paths.fonts.dest))
    .pipe(dest(paths.dest + paths.fonts.dest))
    .pipe(gulpif( typeof paths.dest_cms !== 'undefined', dest(paths.dest_cms + paths.fonts.dest) ))
}
