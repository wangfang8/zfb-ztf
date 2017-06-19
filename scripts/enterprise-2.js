/**
 * Created by 王珍珍 on 2017/6/3.
 */
//商业合作特效开始
$(function () {
    $(".expand_left,.expand_right").on("mouseenter", function () {
        $(this).css("border","1px solid #108ee9");
        $(this).find('.suc').css({
            color:'#108ee9',
            'border-radius': '4px',
            'border': '1px solid #108ee9'
        })
    });
    $(".expand_left,.expand_right").on('mouseleave', function () {
        $(this).css("border",'1px solid #fff');
        $(this).find('.suc').css({
            color:'#38425c',
            border:'1px solid #fff'
        })
    })
//商业合作特效结束

    //快速开发特效开始
    $('.develop_content_l').hover(function () {
        $(this).css("border","1px solid #108ee9");
        $('.develop_content_l_p>img').hide(200);
        $('.develop_arrow').show()
    }, function () {
        $(this).css("border",'1px solid #fff');
        $('.develop_content_l_p>img').show(200);
        $('.develop_arrow').hide()
    })
    ////快速开发特效结束

})



