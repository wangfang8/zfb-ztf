/**
 * Created by Administrator on 2017/6/4.
 */
/*�����������������ʾ�±߿�*/
$(function () {
  $('#nav-List').find('a').hover(function () {
    $(this).addClass('down-Border');
  }, function () {
    $('#nav-List').find('a').removeClass('down-Border');
    $('#nav-List li:first').find('a').addClass('down-Border');
  })

  /*����ģ��������붯����ʼ*/
  $('#serverList .ser-Item').hover(function () {
    $(this).addClass('ser-border').siblings().removeClass('ser-border');
    $(this).find('img').css({  //����ͼƬ��С
      width: 100,
      height: 100
    });
    $(this).find('.ser-Link').css({  //��Ҫ������ʾ
      display: 'block'
    });
    $(this).find('.ser-Item1').stop().animate({   // ͼƬ�����ƶ�
      'margin-top': -20
    }, 100)
  }, function () {    // ����Ƴ��¼�
    $('#serverList .ser-Item').removeClass('ser-border');
    $(this).find('img').css({       // ͼƬ�ָ�ԭ״
      width: 120,
      height: 120
    });
    $(this).find('.ser-Link').css({     // ��Ҫ���밴ť��ʧ
      display: 'none'
    })
    $('.ser-Item1').stop().animate({
      'margin-top': 0
    }, 100)
  })//����������
  // ��������a��ǩ����ͼƬ
  $('.ad-List a').css({
    width:$(window).width()
  })
  // ������ֲ�ͼ��ʼ
    //1.��ȡԪ��
  var $ul = $('.ad-List ul');
  var $lis = $('.ad-List ul li');
  var w = $(window).width();
  //$lis.width(w);
  var num = 0
    //2.���ö�ʱ��

  //$ul.append($lis.find('.ad-One'));
  setInterval (play,3000);
    //3.��װ�Զ��ֲ�
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
  //4.��̬����СԲ��
  // ������ֲ�ͼ����
}) // ��ں�������

