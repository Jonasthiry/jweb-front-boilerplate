/*
 * @title App
 * @description Application entry point
 */

import AnimateScroll from './components/animate-scroll';
import BlockLink from './components/block-link';
import FormsField from './components/forms-field';
import Parallax from './components/parallax';
import Splitlines from './components/splitlines';
import SmoothScroll from './components/smooth-scroll';
import svg4everybody from 'svg4everybody';

import LazyLoad from "vanilla-lazyload";

import Cookies from "../modules/cookies/cookies"

//import header from '../modules/header';

document.addEventListener('DOMContentLoaded', function() {

  svg4everybody();
  //header();

  new LazyLoad({
      elements_selector: ".lazyload"
  });

  new Parallax();
  new Splitlines();
  new AnimateScroll();
  new BlockLink();
  new FormsField();
  new SmoothScroll();

  new Cookies();

})
