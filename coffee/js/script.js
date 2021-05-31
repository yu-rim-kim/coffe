$(function(){
// 메뉴
    $(".sub").hide(0);

    $(".nav li").hover(function(){
        $(".sub, .subback").stop().slideDown();
    }, function(){
        $(".sub, .subback").stop().slideUp();
    })//

    // 메인이미지

    var n=0 ; //         0       1        2      3      4 
    // main_visual left  0     -100%     -200%  -300%    -400%
    var time = setInterval( moving , 2500);
    function moving(){
        if( n < 4){
            n++;
        } else{
            n=0;
        }
        console.log("n : " , n);
        $(".dots ul li a").removeClass("act")  ;      
        $(".dots ul li").eq(n).find("a").addClass("act");
        var pos = n *(-100) + "%";
        $(".main_visual").animate({left : pos}, 500);
    }//moving

    $(".dots ul li , .control a").hover(function(){
        clearInterval(time);
    }, function(){
        time = setInterval( moving , 2500);
    })//hover
    
    $(".dots ul li a").click(function(){
        $(".dots ul li a").removeClass("act");
        $(this).addClass("act");
        n= $(this).parent().index();
        console.log("nnnn : " , n);
        pos =  n *(-100) + "%";
        $(".main_visual").animate({left : pos}, 500);

    })//click

    $(".prev").click(function(){
        if( n >0  ){
            n--;
        } else{
            return false
        }
        $(".dots ul li a").removeClass("act")  ;      
        $(".dots ul li").eq(n).find("a").addClass("act");
        pos = n *(-100) + "%";
        $(".main_visual").animate({left : pos}, 500);
    })//prev

    $(".next").click(function(){
        if(n < 4){
            n++;
        } else{
            return false
        }
        $(".dots ul li a").removeClass("act")  ;      
        $(".dots ul li").eq(n).find("a").addClass("act");
        pos = n *(-100) + "%";
        $(".main_visual").animate({left : pos}, 500);
    })//next

    // 체크box

    $(".check").click(function(){
        $(".ch_on").toggleClass("on");
    })//check


    // 페이스북 인스타그램 tab

    $(".cont5_inner ul li").click(function(e){
        e.preventDefault();
        $(".cont5_inner ul li").removeClass("on")
        $(this).addClass("on")
    })

    $(".quick_inner .send button").click(function(){
        alert("이름을 입력하세요")
    })//$(".quick_inner .send button").click

    $(".top_banner .close").click(function(){
        $(".top_banner").hide()
    })

})//jquery