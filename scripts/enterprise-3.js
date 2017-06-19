
$(function() {
    //###为什么选择我 why栏目 事件开始
    //###鼠标移入显示两侧按钮
    $('.why_map').on('mouseenter',function() {
        $('#why_arr').css('display','block');
        if(parseInt($('.why_list').css('left'))==0){
            $('.why_arr_l').css({
                opacity:0.1
            })
        }
    })
    $('.why_map').on('mouseleave',function() {
        $('#why_arr').css('display','none');
    })
    //######鼠标单击左侧按钮，轮播图滚动
    $('.why_arr_l').on('click',function() {
        if(parseInt($('.why_list').css('left'))==-310){
            $('.why_list').animate({
                left:0
            });
            $('.why_arr_l').css({
                opacity:0.1
            });
            $('.why_arr_r').css({
                opacity:0.3
            })
        };
    })
    //######鼠标单击右侧按钮，轮播图滚动
    $('.why_arr_r').on('click',function() {
        if(parseInt($('.why_list').css('left'))==0){
            $('.why_list').animate({
                left:-310
            });
            $('.why_arr_l').css({
                opacity:0.3
            });
            $('.why_arr_r').css({
                opacity:0.1
            })
        };
    })
    //####鼠标点击新盒子 a标签跳转  
    $('.why_list a').on('click',function() {
        alert("最美的你不是生如夏花,而是在时间的长河里,波澜不惊!")
    })
    //###鼠标移入第一个盒子 old盒子隐藏 new盒子出现 移出时则相反
    $('.why_one').on('mouseenter',function() {
        $('#why_one_old').css('display','none').stop().next().animate({left:0},500)
    });
    $('.why_one').on('mouseleave',function() {
        $('#why_one_new').stop(true,true).animate({left:"-310px"},0);
        $('#why_one_old').css('display','block')
    });
    //###鼠标移入第二个盒子 old盒子隐藏 new盒子出现 移出时则相反
    $('.why_two').on('mouseenter',function() {
        $('#why_two_old').css('display','none').stop().next().animate({left:0},500)
    });
    $('.why_two').on('mouseleave',function() {
        $('#why_two_new').stop(true,true).animate({left:"-310px"},0);
        $('#why_two_old').css('display','block')
    });
    //###鼠标移入第三个盒子 old盒子隐藏 new盒子出现 移出时则相反
    $('.why_three').on('mouseenter',function() {
        $('#why_three_old').css('display','none').stop().next().animate({left:0},500)
    });
    $('.why_three').on('mouseleave',function() {
        $('#why_three_new').stop(true,true).animate({left:"-310px"},0);
        $('#why_three_old').css('display','block')
    });
    //###鼠标移入第四个盒子 old盒子隐藏 new盒子出现 移出时则相反
    $('.why_four').on('mouseenter',function() {
        $('#why_four_old').css('display','none').stop().next().animate({left:0},500)
    });
    $('.why_four').on('mouseleave',function() {
        $('#why_four_new').stop(true,true).animate({left:"-310px"},0);
        $('#why_four_old').css('display','block')
    });
    //###鼠标移入第五个盒子 old盒子隐藏 new盒子出现 移出时则相反
    $('.why_five').on('mouseenter',function() {
        $('#why_five_old').css('display','none').stop().next().animate({left:0},500)
    });
    $('.why_five').on('mouseleave',function() {
        $('#why_five_new').stop(true,true).animate({left:"-310px"},0);
        $('#why_five_old').css('display','block')
    });
    //###底部小蚂蚁 
    $('#xiaomayi_close').on('click',function(){
        $(".xiaomayi").css('display','none')
    })
})
