$(function() {
  var imgHeight = $('.main').outerHeight();
  var fvHeight = $('.fv').outerHeight();
  var line = $('.header_nav-line');
  var navTxt = $('.header_nav-txt');
  
  // mainクラスより下にスクロール時イベント
  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight) {
      line.removeClass('blackline');
      navTxt.removeClass('blacktxt');
    } else {
      line.addClass('blackline');
      navTxt.addClass('blacktxt');
    }
  });

  // fvより下にスクロール時イベント
  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < fvHeight) {
      $('path').removeClass('blackpath');
    } else {
      $('path').addClass('blackpath');
    }
  });

  // メニューボタン押下イベント
  var lineOne = $('.header_nav-line.line1');
  var lineTwo = $('.header_nav-line.line2');
  var lineThree = $('.header_nav-line.line3');
  var modal = $('.modal');

  $('.header_nav').click(function() {
    $('html, body').animate({scrollTop: 0});
    $('body').toggleClass('fixed');
    lineOne.toggleClass('crossdown');
    lineTwo.toggleClass('crossnone');
    lineThree.toggleClass('crossup');
    modal.toggleClass('open');
    navTxt.toggleClass('txtnone');

  });
});