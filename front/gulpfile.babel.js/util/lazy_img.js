/**
 * Image helper function to automatically build lazy image tags with srcset.
 *
 * @example For purely static images, directly inside twig file
 *
 *  lazy_img("assets/images/myimage-wide.jpg", 'large', "My alt text")
 *
 * @example For static and dynamic images, configurable inside JSON files
 *
 *  JSON => picture: {
 *    src: "assets/images/myimage-wide.jpg",
 *    alt: "My alt text"
 *  }
 *
 *  lazy_img(picture, 'large')
 *
 * @example You can also directly use the original image, without any resizing
 *
 *  lazy_img("assets/images/myimage.jpg")
 *
 *  or with JSON DATA
 *
 *  JSON => picture: {
 *    src: "assets/images/myimage-wide.jpg",
 *    alt: "My alt text"
 *  }
 *
 *  lazy_img(picture)
 *
 *  @WARNING DO NOT do the following, as it will break the PHP twin function :
 *
 *  JSON => picture: {
 *    src: "assets/images/myimage-wide.jpg",
 *    alt: "My alt text"
 *  }
 *
 *  lazy_img(picture.src, 'large')
 */
module.exports = function (sizes) {
  function lazy_img (image, size, alt) {
    if ((image instanceof Object) && !(image instanceof Array)) {
      alt = image.alt;
      image = image.src;
    }

    if (!alt) {
      alt = 'An image';
    }

    var attributes = {
      'src': 'assets/img/blank.gif',
      'class': 'lazyload',
      'alt': alt
    };

    if (size) {
      attributes = Object.assign(attributes, build_data_src_attributes(image, size));
    } else {
      attributes = Object.assign(attributes, {
        'data-src': image
      });
    }

    var html = '<img ';
    for (var name in attributes) {
      if (name === '_keys') {
        continue;
      }

      html += name + '="' + attributes[name] + '" ';
    }
    html += '/>';

    return html;
  }

  function build_data_src_attributes(src, size) {
    var width = sizes[size].width;
    var set = sizes[size].set || [];
    var sizePrefix = '-' + width + 'px';

    var srcParts = src.split('.');
    var extension = srcParts.pop();
    var dataSrc = srcParts.join('.') + sizePrefix + '.' + extension;

    var dataSrcSet = set.map(function (size) {
      var width = sizes[size].width;
      var sizePrefix = '-' + width + 'px';
      var dataSrc = srcParts.join('.') + sizePrefix + '.' + extension;

      return dataSrc + ' ' + width + 'w';
    }).join(', ');

    var srcAttributes = {};

    if (dataSrc) {
      srcAttributes[ 'data-src' ] = dataSrc;
    }

    if (dataSrcSet) {
      srcAttributes[ 'data-srcset' ] = dataSrcSet;
    }

    return srcAttributes;
  }

  return {
    name: 'lazy_img',
    func: lazy_img
  }
};