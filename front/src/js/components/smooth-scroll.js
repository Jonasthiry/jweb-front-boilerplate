import 'jquery-easing';

export default class SmoothScroll {

  constructor(context = document) {

    $(document).on('click','.header-navigation [href*="#"]',function(){

      $(this).blur();

      var the_id = $(this).attr('href');

      var new_id = the_id.slice(the_id.indexOf('#'),the_id.length);

      setTimeout(function(){
        $('html, body').animate({
          scrollTop:$(new_id).offset().top - 85
        }, 1500, 'easeInOutQuart');
      },200);

      if($('body').hasClass('open-menu')) {
        $('body').removeClass('open-menu');
      }

      return false;

    });

  }
  
}