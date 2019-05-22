/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: '../static',
  //dest_cms: '../public/wp-content/themes/ak-euriphi-2019',
  styles: {
    src: 'src/scss/main.scss',
    watch: [
      'src/scss/**/*.scss',
      'src/modules/**/*.scss'
    ],
    dest: '/assets/css'
  },
  scripts: {
    src: './src/js/app.js',
    watch: [
      'src/js/**/*.js',
      'src/modules/**/*.js'
    ],
    dest: '/assets/js',
  },
  templates: {
    src: 'src/views/pages/*.twig',
    watch: [
      'src/views/**/*.twig',
      'src/modules/**/*.twig',
      'src/modules/**/*.json',
      'src/datas/*.json'
    ],
    dest: '/'
  },
  datas: {
    src: 'src/modules/**/*.json',
    dest: 'src/datas'
  },
  images: {
    src: 'src/assets/img/**/*',
    dest: '/assets/img',
    srcsets: {
      'wide': {
        'width': 1440,
        'set': [ 'wide', 'large', 'medium', 'thumbnail' ]
      },
      'large': {
        'width': 980,
        'set': [ 'large', 'medium', 'thumbnail' ]
      },
      'medium': {
        'width': 740,
        'set': [ 'medium', 'thumbnail' ]
      },
      'thumbnail': {
        'width': 480,
        'set': [ 'thumbnail' ]
      }
    }
  },
  svg: {
    src: 'src/assets/svg/*.svg',
    dest: '/assets/img'
  },
  fonts: {
    src: 'src/assets/fonts/**/*',
    dest: '/assets/fonts'
  }
};

export const isProd = process.env.NODE_ENV === 'production';
