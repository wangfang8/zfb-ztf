/**
 * Created by Administrator on 2017/6/4.
 */
/*导航区域鼠标移入显示下边框*/
$(function () {
  $('#nav-List').find('a').hover(function () {
    $(this).addClass('down-Border');
  }, function () {
    $('#nav-List').find('a').removeClass('down-Border');
    $('#nav-List li:first').find('a').addClass('down-Border');
  })

  /*服务模块鼠标移入动画开始*/
  $('#serverList .ser-Item').hover(function () {
    $(this).addClass('ser-border').siblings().removeClass('ser-border');
    $(this).find('img').css({  //更改图片大小
      width: 100,
      height: 100
    });
    $(this).find('.ser-Link').css({  //我要接入显示
      display: 'block'
    });
    $(this).find('.ser-Item1').stop().animate({   // 图片向上移动
      'margin-top': -20
    }, 100)
  }, function () {    // 鼠标移出事件
    $('#serverList .ser-Item').removeClass('ser-border');
    $(this).find('img').css({       // 图片恢复原状
      width: 120,
      height: 120
    });
    $(this).find('.ser-Link').css({     // 我要接入按钮消失
      display: 'none'
    })
    $('.ser-Item1').stop().animate({
      'margin-top': 0
    }, 100)
  })//鼠标移入结束
  // 广告区域的a标签背景图片
  $('.ad-List a').css({
    width:$(window).width()
  })
  // 广告区轮播图开始
    //1.获取元素
  var $ul = $('.ad-List ul');
  var $lis = $('.ad-List ul li');
  var w = $(window).width();
  //$lis.width(w);
  var num = 0
    //2.设置定时器

  //$ul.append($lis.find('.ad-One'));
  setInterval (play,3000);
    //3.封装自动轮播
  function play(){
    if( num ==$lis.length-1){
      $ul.css({
        'left':0
      })
      num =0;
    }
    num++;
    $ul.stop().animate({
      left:-w*num
    },1000)
  }
  //4.动态创建小圆点
  // 广告区轮播图结束
}) // 入口函数结束

