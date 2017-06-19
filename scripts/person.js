/**
 * Created by MDD on 2017/6/3.
 */
var jq = $.noConflict();

$(window).on('load', function () {
  //定义一个状态数组
  var arr = [1,1,1,1,1,1,1];

  //头部顶部栏下拉列表
  $('#head_top_service').hover(function () {
    $('.head_top_downList').show();
  }, function () {
    $('.head_top_downList').hide();
  });

  //头部导航栏下拉列表
  $('.head_nav_list_press').on('click', function () {
    $('.head_nav_downlist').hide();
    $(this).children('.head_nav_downlist').show();
  });

  $('.icon-close').on('click', function (e) {
    $(this).parent().parent().hide();
    e.stopPropagation();
  });

  //场景模块切换
  $('.dots').children().on('click', function () {
    if ($('.view' + ($(this).index() + 1))[0] == $('.show')[0]) return;
    if ($(this).index() == $('.dots').children().length - 1) {
      $('.nextBtn').hide();
    } else {
      $('.nextBtn').show();
    }
    if ($(this).index() == 0) {
      $('.head_nav_log').hide(500);
    } else {
      $('.head_nav_log').show(500);
    }
    changeView(this);
  });

  //按向下按钮切换
  $('.nextBtn').on('click', function () {
    $('.dots_chosen').next().trigger('click');
  });

  //场景切换的函数
  function changeView(elem) {
    $('.show').removeClass('show').stop(false, true).slideUp(800);
    $('.dots_chosen').removeClass('dots_chosen');
    $(elem).addClass('dots_chosen');
    $('.view' + ($(elem).index() + 1)).addClass('show').stop(false, true).slideDown(800, function () {
    });
    //停止视频
    if($('.dots_chosen').index() != 0){
      stopVideoPlaying();
    }
    //选择view2的时候的特效
    if($('.dots_chosen').index() == 1 && arr[1]){
      arr[1] = 0;
      $('.view2_words').animate({
        opacity: 1
      }, 7000);
      bgMoveIn(jq('.view2_bg'), {
        width: '100%',
        left: '0%',
        height: '100%',
        top: '0%'
      }, 7000);
    }

    //选择view3的时候的特效
    if($('.dots_chosen').index() == 2 && arr[2]){
      arr[2] = 0;
      $('.view3_phone').animate({
        top: '57%',
        left: '20%'
      }, 1000, function(){
        $('.view3_scan').animate({
          top: '-12%',
          left: '11%'
        }, 800, function(){
          $('.view3_words').show(800);
        });
      });
    }

    //选择view4的时候的特效
    if($('.dots_chosen').index() == 3 && arr[3]){
      arr[3] = 0;
      bgMoveIn(jq('.view4_bg'), {
        width: '110%',
        left: '-5%',
        height: '110%',
        top: '-5%'
      }, 10000);
      $('.view4_words').animate({},2000,function(){
        $(this).fadeIn(5000);
      });
    }

    //选择view5的时候的特效
    if($('.dots_chosen').index() == 4 && arr[4]){
      arr[4] = 0;
     $('.view5_words').show(1000, function(){
       $('.view5').animate({
         opacity: 1
       }, 3000);
     });
    }

    //选择view6的时候的特效
    if($('.dots_chosen').index() == 5 && arr[5]){
      arr[5] = 0;
      bgMoveIn(jq('.view6_bg'), {
        width: '100%',
        left: '0%',
        height: '100%',
        top: '0%'
      }, 10000);
      $('.view6_words').animate({},2000,function(){
        $(this).slideDown(3000);
      });
    }
  }

  //点击播放按钮播放视频
  $('.icon-video').on('click', function () {
    $(this).hide();
    $('.view1_pic').hide();
    $('.view1_mask').css('backgroundColor', 'rgba(0,0,0,0)');
    $('.view1_video').show().trigger('play');
  });

  //场景模块1函数
  function view1Play() {
    $('.icon-video').trigger('click');

  }

  view1Play();

  //停止视频
  function stopVideoPlaying(){
    $('.view1_video')[0].currentTime = 0;
    $('.view1_video').trigger('pause');
  }

  //视频停止后
  $('.view1_video').on('error pause', function(){
    $('.icon-video').show();
    $('.view1_pic').show();
    $('.view1_mask').css('backgroundColor', 'rgba(0,0,0,0.35)');
  });

  //背景图片逐渐移近
  function bgMoveIn($pic,css,time){
    $pic.animate(css, time);
  }
});