/*
 * @title Styles
 * @description A task to compile templates via Twig.js
 */

// Dependencies
import { src, dest, series } from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import errorHandler from '../util/errorHandler.js';
import data from 'gulp-data';
import fs from 'fs';
import path from 'path';
import mergeJson from 'gulp-merge-json';
import del from 'del';
import htmlmin from 'gulp-htmlmin';

// Config
import { paths } from '../config';

// Include extensions
var lazyImgExt = require( '../util/lazy_img' );

// Task
export function createTempData() {
  return src(paths.datas.src)
    .pipe(mergeJson({
      fileName: 'temp.json',
      edit: (json, file) => {
        // Extract the filename and strip the extension
        var filename = path.basename(file.path),
        primaryKey = filename.replace(path.extname(filename), '');

        // Set the filename as the primary key for our JSON data
        var data = {};
        data[primaryKey] = json;

        return data;
      }
    }))
    .pipe(dest(paths.datas.dest));
};

export function createHtml() {
  return src(paths.templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(data(function(file) {
      var pathTempData = './src/datas/temp.json';
      return (fs.existsSync(pathTempData)) ? JSON.parse(fs.readFileSync(pathTempData)) : {};
    }))
    .pipe(data(function(file) {
      var pathGlobalData = './src/datas/global.json';
      return (fs.existsSync(pathGlobalData)) ? JSON.parse(fs.readFileSync(pathGlobalData)) : {};
    }))
    .pipe(data(function(file) {
      var pathPageData = './src/datas/' + path.basename(file.path).slice(0, -5) + '.json';
      return (fs.existsSync(pathPageData)) ? JSON.parse(fs.readFileSync(pathPageData)) : {};
    }))
    .pipe(twig({
      functions: [
        lazyImgExt( paths.images.srcsets )
      ]
    }))
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.dest + paths.templates.dest))
};

export function deleteTempData() {
  return del('src/datas/temp.json');
}

export const templates = series(createTempData, createHtml, deleteTempData);
