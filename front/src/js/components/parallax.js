 import simpleParallax from 'simple-parallax-js';

const defaults = {
  overflow: true,
  scale: 1.2,
  orientation: 'down',
  transition: 'cubic-bezier(0.23, 1, 0.32, 1)'
}

export default class Parallax {

  constructor(context = document) {

    $('[data-parallax]', context).each((i, el) => {

      const $el = $(el);

      const options = Object.assign({}, defaults, $el.data());

      new simpleParallax($el.children('img'),{
        overflow: options.overflow,
        scale: options.scale,
        orientation: options.orientation,
        transition: options.transition
      });

    });

  }
  
}