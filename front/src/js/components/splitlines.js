require('../vendors/jquery.splitlines.js');

export default class Splitlines {

  constructor(context = document) {

    $('[data-splitlines]').each((i, el) => {

      const $el = $(el);

      $el.splitLines({
        tag:'<span class="segment"><span class="segment-text">',
        width: $el.width(),
        keepHtml: true
      });
  });

  }
  
}