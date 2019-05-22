import * as Cookies from "js-cookie";

export default function() {

  $(document).on('click','[href="#js-accept-cookies"]',function(){
    $('.cookies').addClass('is-remove');
    Cookies.set('legal_banner_status', 'accept', { expires: 7 });
    setTimeout(function(){
      $('.cookies').remove();
    },1100);
  });

  if (Cookies.get('legal_banner_status')) {
    $('.cookies').remove();
  }

}