$(function () {
  var flag = true
  // 点击右上角二维码 切换登录 开始
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
  //点击右上角二维码 切换结束

  //点击小叉关闭
  $('#_box_close').on('click', function () {
    $('.login-bg').hide();
  })

  //点击登录显示遮罩层和登录框
  $('.view1_mask_layMid_signup').on('click', function () {
    $('.login-bg').show();
  })

  //点击立即注册跳到注册页面 这里是button
  $('.view1_mask_layMid_login').on('click', function () {
    window.open('login.html')
  })


  //点击右上角登录显示登录框
  $('.head_nav_log>button').on('click', function () {
    $('.login-bg').show();
  })
})