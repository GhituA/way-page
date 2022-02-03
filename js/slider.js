
$(document).ready(function(){
  $('.slider-wrapper').slick({
    arrows: false,
    asNavFor: '.buttons',
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.buttons').slick({
    arrows: false,
    slidesToShow: 4,
    asNavFor: '.slider-wrapper',
    focusOnSelect: true
  });

});
