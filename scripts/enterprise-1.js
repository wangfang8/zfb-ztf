//head最顶部移入鼠标变色
$(function(){
    $('.head_top').on('mouseenter',function(){
        $('.head_top').css({
            'backgroundColor':'#061024'
        });
    });
})
//head最顶部移除鼠标变色
$(function(){
    $('.head_top').on('mouseleave',function(){
        $('.head_top').css({
            'backgroundColor':'#082a5d'
        });
    });
})
//head最顶部触发上下拉
$(function(){    //移入
    $('.head_top_left_hezuo_head').on(
        'mouseenter',function(){
            $('.common_xiala1').attr("src","images/enterprise/head/shangla.png");
            $('.head_top_left_xialaBox').css({
                'display':'block'
            })
        }
    )
})
$(function(){    //移出
    $('.head_top_left_hezuo_head ').on('mouseleave',function(){
        $('.common_xiala1').attr("src","images/enterprise/head/xiala.png")
        $('.head_top_left_xialaBox').css({
            'display':'none'
        });
    })
})

//第二个图下拉
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

//第三个图下拉
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
//head商业合作移入触发下拉盒子特效
//登录框
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