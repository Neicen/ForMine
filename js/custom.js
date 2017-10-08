$(document).ready(function () {
	
    /***************** scroll-导航栏折叠效果 ******************/
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /***************** Owl Carousel-幻灯片插件的使用 ******************/
    $("#owl-hero").owlCarousel({
        navigation: true, //是否显示上一个和下一个按钮
        slideSpeed: 300,	//滑动间隔时间
        paginationSpeed: true, //是否支持分页
        singleItem: true,	//单个显示
        transitionStyle: "fadeUp",
        autoPlay: true, //旋转木马是否自动播放
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] //按钮字体
    });

    /***************** Full Width Slide(自适应高度) ******************/
    var slideHeight = $(window).height();
    $('#owl-hero .item').css('height', slideHeight);
    $(window).resize(function () {
        $('#owl-hero .item').css('height', slideHeight);
    });
    
    /*播放视频*/
    $(".bt-video").click(function(){
    	$(this).css("display","none");
    	var objVideo = $
    })
    
    /***************** Wow.js-当页面滚动到这个地方出现动画或者设置值 ******************/    
    new WOW().init();
    
    /***************** Preloader ******************/    
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });
})