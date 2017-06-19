/**
 * Created by 20807 on 2017/6/3.
 */

$(function () {

  var num = 0;
  setInterval(function () {
    num++
    if (num < 3) {
      $(".pic_" + num).animate({
        opacity: 0
      }, 2000);
    } else {
      $(".pic_" + num).animate({
        opacity: 0
      }, 2000)

      $(".pic_1").delay(1000).animate({
        opacity: 1
      }, 1000);
      $(".pic_2").delay(1000).animate({
        opacity: 1
      }, 1000);
      $(".pic_3").delay(1000).animate({
        opacity: 1
      }, 1000);

      num = 0;
    }
  }, 5000)

  //-------------------------------------------------
  $(".back_link .father").on("mouseenter", function () {
    $(".back_link a:eq(1)").stop().animate({
      "opacity": 0
    });
    $(".father .fat_t a").stop().slideDown(500);
    $(".father .fat_b a").stop().slideDown(500);
  }).on("mouseleave", function () {
    $(".father .fat_t a").stop().slideUp();
    $(".father .fat_b a").stop().slideUp();
    $(".back_link a:eq(1)").delay().stop().animate({
      "opacity": 1
    }, 1500);
  })
})

//µÇÂ¼¿ò
$(function () {
  var flag = true
  // µã»÷ÓÒÉÏ½Ç¶þÎ¬Âë ÇÐ»»µÇÂ¼ ¿ªÊ¼
  $('#_box2_a').on('click', function () {
    if (flag) {
      $('#_box1').css('display', 'none');
      $('._box3').css('display', 'block');
      flag = false;
      $(this).animate({
        backgroundPositionX: -260,
        backgroundPositionY: -260
      }, 300)
    } else {
      $('#_box1').css('display', 'block');
      $('._box3').css('display', 'none');
      flag = true;
      $(this).animate({
        backgroundPositionX: -201,
        backgroundPositionY: -199
      }, 300)
    }
  })
  //µã»÷ÓÒÉÏ½Ç¶þÎ¬Âë ÇÐ»»½áÊø

  //µã»÷Ð¡²æ¹Ø±Õ
  $('#_box_close').on('click', function () {
    $('.login-bg').hide();
  })

  //µã»÷µÇÂ¼ÏÔÊ¾ÕÚÕÖ²ãºÍµÇÂ¼¿ò
  $('#logo_r a').on('click', function () {
    $('.login-bg').show();
  })
})