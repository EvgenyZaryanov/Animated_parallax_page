$(document).ready(function () {
  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();
    var width = $(this).outerWidth();
    var height = $('.content').outerHeight();
    var height_block = $('.parallax').outerHeight();
    var percent = (scroll / height) * 100;
    var percent_block = (scroll / height_block) * 100;
    var opacity = 1 - (1 / 100) * percent_block;

    var zoom_1 = 1 + (width / 10000) * percent_block;
    $('.parallax__fog').css('transform', 'scale(' + zoom_1 + ')');
    $('.parallax__fog').css('opacity', opacity);

    var zoom_2 = 1 + (width / 5000000) * percent;
    $('.parallax__mountain-1').css('transform', 'scale(' + zoom_2 + ')');

    var horisontal = (width / 2000) * percent_block;
    var zoom_3 = 1 + width * 0.000005 * percent_block;
    $('.parallax__mountain-2').css(
      'transform',
      'translate3d(' + horisontal + 'px,0,0) scale(' + zoom_3 + ')'
    );

    var horisontal_2 = (width / 1500) * percent_block;
    var zoom_4 = 1 + width * 0.00001 * percent_block;
    $('.parallax__mountain-3').css(
      'transform',
      'translate3d(' + horisontal_2 + 'px,0,0) scale(' + zoom_4 + ')'
    );
  });
});
