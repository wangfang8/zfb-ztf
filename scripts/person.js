/**
 * Created by MDD on 2017/6/3.
 */
var jq = $.noConflict();

$(window).on('load', function () {
  //����һ��״̬����
  var arr = [1,1,1,1,1,1,1];

  //ͷ�������������б�
  $('#head_top_service').hover(function () {
    $('.head_top_downList').show();
  }, function () {
    $('.head_top_downList').hide();
  });

  //ͷ�������������б�
  $('.head_nav_list_press').on('click', function () {
    $('.head_nav_downlist').hide();
    $(this).children('.head_nav_downlist').show();
  });

  $('.icon-close').on('click', function (e) {
    $(this).parent().parent().hide();
    e.stopPropagation();
  });

  //����ģ���л�
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

  //�����°�ť�л�
  $('.nextBtn').on('click', function () {
    $('.dots_chosen').next().trigger('click');
  });

  //�����л��ĺ���
  function changeView(elem) {
    $('.show').removeClass('show').stop(false, true).slideUp(800);
    $('.dots_chosen').removeClass('dots_chosen');
    $(elem).addClass('dots_chosen');
    $('.view' + ($(elem).index() + 1)).addClass('show').stop(false, true).slideDown(800, function () {
    });
    //ֹͣ��Ƶ
    if($('.dots_chosen').index() != 0){
      stopVideoPlaying();
    }
    //ѡ��view2��ʱ�����Ч
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

    //ѡ��view3��ʱ�����Ч
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

    //ѡ��view4��ʱ�����Ч
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

    //ѡ��view5��ʱ�����Ч
    if($('.dots_chosen').index() == 4 && arr[4]){
      arr[4] = 0;
     $('.view5_words').show(1000, function(){
       $('.view5').animate({
         opacity: 1
       }, 3000);
     });
    }

    //ѡ��view6��ʱ�����Ч
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

  //������Ű�ť������Ƶ
  $('.icon-video').on('click', function () {
    $(this).hide();
    $('.view1_pic').hide();
    $('.view1_mask').css('backgroundColor', 'rgba(0,0,0,0)');
    $('.view1_video').show().trigger('play');
  });

  //����ģ��1����
  function view1Play() {
    $('.icon-video').trigger('click');

  }

  view1Play();

  //ֹͣ��Ƶ
  function stopVideoPlaying(){
    $('.view1_video')[0].currentTime = 0;
    $('.view1_video').trigger('pause');
  }

  //��Ƶֹͣ��
  $('.view1_video').on('error pause', function(){
    $('.icon-video').show();
    $('.view1_pic').show();
    $('.view1_mask').css('backgroundColor', 'rgba(0,0,0,0.35)');
  });

  //����ͼƬ���ƽ�
  function bgMoveIn($pic,css,time){
    $pic.animate(css, time);
  }
});