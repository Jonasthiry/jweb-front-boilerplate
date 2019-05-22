/*
 * @title Images
 * @description A task to copy images
 */

// Dependencies
import { src, dest } from 'gulp';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import errorHandler from '../util/errorHandler.js';

// Config
import { paths } from '../config';

// Task
export function images() {
  return src(paths.images.src)
    .pipe(plumber({errorHandler}))
    .pipe(changed(paths.images.dest))
    .pipe(dest(paths.dest + paths.images.dest))
    .pipe(gulpif( typeof paths.dest_cms !== 'undefined', dest(paths.dest_cms + paths.images.dest) ))
}