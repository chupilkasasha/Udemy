$(document).ready(function () {

  $('.main_btna,.main_btn').on('click', function () {
    $('.overlay').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 500);

    $('.modal').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 1500);
  });

  $('.close').on('click', function () {
    $('.modal').slideToggle({
      opacity: 'toggle',
      height: 'toggle'

    }, 2000);
    $('.overlay').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 1000);
  });

});