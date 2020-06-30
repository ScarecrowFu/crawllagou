$(window).load(function(){
    $(".loading").fadeOut()
});

/****/
$(document).ready(function(){
    var whei=$(window).width();
    $("html").css({fontSize:whei/20});
    $(window).resize(function(){
        var whei=$(window).width();
        $("html").css({fontSize:whei/20})
    });
});


var t = null;
t = setTimeout(time,1000);//開始运行
function time()
{
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y=dt.getFullYear();
    var mt=dt.getMonth()+1;
    var day=dt.getDate();
    var h=dt.getHours();//获取时
    var m=dt.getMinutes();//获取分
    var s=dt.getSeconds();//获取秒
    document.getElementById("showTime").innerHTML = y+"年"+mt+"月"+day+"-"+h+"时"+m+"分"+s+"秒";
    t = setTimeout(time,1000); //设定定时器，循环运行
}
