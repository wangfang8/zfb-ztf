$(function() {
    var flag = true
    // 点击右上角二维码 切换登录 开始
    $('#_box2_a').on('click',function() {
        if(flag){
            $('#_box1').css('display','none');
            $('._box3').css('display','block');
            flag=false;
            $(this).animate({
                backgroundPositionX:-260,
                backgroundPositionY:-260
            },300)
        }else{
            $('#_box1').css('display','block');
            $('._box3').css('display','none');
            flag=true;
            $(this).animate({
                backgroundPositionX:-201,
                backgroundPositionY:-199
            },300)
        }
    })
    //点击右上角二维码 切换结束
    $('#_box_close').on('click',function(){
        $(this).parent().css("display",'none')
    })



})