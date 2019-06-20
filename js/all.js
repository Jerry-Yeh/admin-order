$(document).ready(function () {
  // 導覽列按鈕
  $('.js-m-navbar__button').on('click', function (e) {
    $('.js-m-navbar__list').toggleClass('is-active')
  });

  // 標題選單
  $('.js-p-info__condition__unit').hover(function (e) {
    $(this).children('ul').toggleClass('is-hover');
  });

  // 數據細節
  $('.js-m-transaction__item__rate').hover(function (e){
    $(this).children("div").toggleClass('is-hover');
  });

  // 訂單頁狀態
  $('.m-select__selector').hover(function(e){
    $(this).children('ul').toggleClass('is-hover');
  });

  // 訂單頁選單
  $('.js-p-order__edit').hover(function(e){
    $(this).children('ul').toggleClass('is-hover');
  });

  // 訂單頁狀態按鈕
  $('.js-e-order-status').click(function (){
    $(this).next('ul').toggleClass('is-hover');
  });

  $('.js-m-list').click(function (e){
    $(this).toggleClass('is-hover');
  });

  $('.js-paid').click(function (e){
    $(this).parent().siblings().attr('class', 'e-btn e-btn--rise js-e-btn').text('PAID').append('<i class="fas fa-caret-down"></i>').fadeToggle(1000);
  });

  $('.js-unpaid').click(function (e){
    $(this).parent().siblings().attr('class', 'e-btn e-btn--primary-300 js-e-btn').text('UNPAID').append('<i class="fas fa-caret-down"></i>');
  });

  $('.js-shipping').click(function (e){
    $(this).parent().siblings().attr('class', 'e-btn e-btn--shipping js-e-btn').text('SHIPPING').append('<i class="fas fa-caret-down"></i>');
  });

  $('.js-done').click(function (e){
    $(this).parent().siblings().attr('class', 'e-btn e-btn--net js-e-btn').text('DONE').append('<i class="fas fa-caret-down"></i>');
  });

  // 商品頁狀態按鈕
  $('.js-e-product-status').click(function (){
    $(this).next('ul').toggleClass('is-hover');
  });

  $('.js-published').click(function (e){
    console.log('ready');
    $(this).parent().siblings().attr('class', 'e-btn e-btn--rise js-e-btn').text('PUBLISHED').append('<i class="fas fa-caret-down"></i>');
  });

  $('.js-unpublished').click(function (e){
    $(this).parent().siblings().attr('class', 'e-btn e-btn--primary-300 js-e-btn').text('UNPUBLISHED').append('<i class="fas fa-caret-down"></i>');
  });

  // 關閉 modal 
  $('.js-m-modal__header__cancel').click(function(e){
    $('.js-m-modal').toggleClass('m-modal--show');
  });
});

// 圖表
var chart = c3.generate({
  bindto: '.js-p-chart__chart',
  data: {
    columns: [
      ['revenue', 7200, 7000, 5500, 7200, 5800, 6100, 7500, 7400],
      ['cost', 500, 500, 2500, 3000, 2500, 500, 1000, 2000],
      ['net', 6000, 5500, 2000, 4000, 3800, 5500, 6500, 5000]
    ],
    colors: {
      'revenue': '#7ED321',
      'cost': '#D0021B',
      'net': '#4A90E2'
    }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN']
    }
  },
  legend: {
    hide: true,
  },
});



