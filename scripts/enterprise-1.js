//head�����������ɫ
$(function(){
    $('.head_top').on('mouseenter',function(){
        $('.head_top').css({
            'backgroundColor':'#061024'
        });
    });
})
//head����Ƴ�����ɫ
$(function(){
    $('.head_top').on('mouseleave',function(){
        $('.head_top').css({
            'backgroundColor':'#082a5d'
        });
    });
})
//head�������������
$(function(){    //����
    $('.head_top_left_hezuo_head').on(
        'mouseenter',function(){
            $('.common_xiala1').attr("src","images/enterprise/head/shangla.png");
            $('.head_top_left_xialaBox').css({
                'display':'block'
            })
        }
    )
})
$(function(){    //�Ƴ�
    $('.head_top_left_hezuo_head ').on('mouseleave',function(){
        $('.common_xiala1').attr("src","images/enterprise/head/xiala.png")
        $('.head_top_left_xialaBox').css({
            'display':'none'
        });
    })
})

//�ڶ���ͼ����
$(function(){
    $('.head_top_left_wendangBigbox').on(
        'mouseenter',function(){
            $('.common_xiala2').attr("src","images/enterprise/head/shangla.png")
            $('.head_top_left_wendangxiala').css({
                'display':'block'
            })
        }
    )
})
$(function(){
    $('.head_top_left_wendangBigbox').on('mouseleave',function(){
        $('.common_xiala2').attr("src","images/enterprise/head/xiala.png")
        $('.head_top_left_wendangxiala').css({
            'display':'none'
        })
    })
})

//������ͼ����
$(function(){
    $('.head_top_right_bangzhuBigbox').on(
        'mouseenter',function(){
            $('.common_xiala3').attr("src","images/enterprise/head/shangla.png")
            $('.head_top_right_bangzhuBox').css({
                'display':'block'
            })
        }
    )
})
$(function(){
    $('.head_top_right_bangzhuBigbox').on('mouseleave',function(){
        $('.common_xiala3').attr("src","images/enterprise/head/xiala.png")
        $('.head_top_right_bangzhuBox').css({
            'display':'none'
        });
    })
})
//head��ҵ�������봥������������Ч
//��¼��
$(function() {
    var flag = true;
    $('#head_login_box2_a').on('click',function() {
        if (flag) {
            $('#head_login_box1').css('display', 'none');
            $('.head_login_box3').css('display', 'block');
            flag = false;
            $(this).animate({
                backgroundPositionX: -260,
                backgroundPositionY: -260
            }, 300)
        } else {
            $('#head_login_box1').css('display', 'block');
            $('.head_login_box3').css('display', 'none');
            flag = true;
            $(this).animate({
                backgroundPositionX: -199,
                backgroundPositionY: -199
            }, 300)
        }
    })
})