$(function (){


/*
    $(".show-fixed .links li a").on("click",function(){
        $(".flex-navebar").removeClass("show-fixed");
    });

*/
    $(window).scroll(function(){
        var myScroll = $(window).scrollTop();

        if(myScroll > 40)
        {
            $(".navbar").addClass("scroll");
        }
        else
        {
            $(".navbar").removeClass("scroll");
        }
    });

    $(".togle").on("click",function(){
        $(this).toggleClass('show');
        $("#fixed-navbar").toggleClass("show-fixed");

        if($("#fixed-navbar").hasClass("show-fixed"))
        {
            $('#fixed-navbar').animate({
                left:'0',
            },500);
        }else
        {
            $('#fixed-navbar').animate({
                left:'-100%',
            },500);
        }
      

    });

    $("#links li a" ).on("click",function(){
        $(this).addClass("active").parent().siblings().find('a').removeClass("active");
    });


    $(".tewntytewnty-contianer").twentytwenty();


    // start video 

    $("#video-icon").on("click",function(){
        $(".video iframe").addClass("show");
        $("#exit").addClass("view");
        console.log("ahmed");

    });
    $("#exit").on("click",function(){
        $(".video iframe").removeClass("show");
        $("#exit").removeClass("view");
    });








});