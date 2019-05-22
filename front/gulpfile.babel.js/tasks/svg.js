/*
 * @title Svg
 * @description A task to create svg sprite
 */

// Dependencies
import { src, dest } from 'gulp';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import svgSprite from 'gulp-svg-sprite';
import errorHandler from '../util/errorHandler.js';

// Config
import { paths } from '../config';

// Task
export function svg() {
  return src(paths.svg.src)
    .pipe(plumber({errorHandler}))
    .pipe(changed(paths.svg.dest))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: './',
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest(paths.dest + paths.svg.dest))
    .pipe(gulpif( typeof paths.dest_cms !== 'undefined', dest(paths.dest_cms + paths.svg.dest) ))
}