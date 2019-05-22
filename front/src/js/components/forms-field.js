export default class FormsField {

  constructor() {

    $('.mc-field-group, .form-group').each((i, el) => {

      const $el = $(el);
      const $input = $el.children('input');

      $input.each(function(){
        if($(this).val()) {
          $(this).closest($el).addClass('is-active');
        }
      });

      $input.on('focus',function(){
        $(this).closest($el).addClass('is-active').addClass('is-focus');
      });

      $input.on('blur',function(){
        $(this).closest($el).removeClass('is-focus');
        if(!$(this).val()) {
          $(this).closest($el).removeClass('is-active');
        }
      });

    });

  }
  
}