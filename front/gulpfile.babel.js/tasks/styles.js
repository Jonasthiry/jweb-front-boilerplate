/*
 * @title Styles
 * @description A task to compile Sass to CSS
 */

// Dependencies
import { src, dest, series } from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import errorHandler from '../util/errorHandler.js';

import { reload } from '../tasks/server';
import browserSync from 'browser-sync'

// Config
import { paths, isProd } from '../config';

export function styles() {
  return src(paths.styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(gulpif(!isProd, sourcemaps.init() ))
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: [
        'node_modules'
      ],
      outputStyle: 'compressed'
    }))
    .pipe(postcss([
      autoprefixer({ browsers: 'last 2 versions' })
    ]))
    .pipe(gulpif(!isProd, sourcemaps.write('.') ))
    .pipe(dest(paths.dest + paths.styles.dest))
    .pipe(gulpif( typeof paths.dest_cms !== 'undefined', dest(paths.dest_cms + paths.styles.dest) ))
    .pipe(browserSync.stream())
}