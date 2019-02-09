$(window).on("scroll", function(){
    let positionY = $(this).scrollTop();
    console.log(positionY);

    if(positionY > 296){
        $("#scrolltotop").css("opacity", 1);
    }
    else if(positionY < 296){
        $("#scrolltotop").css("opacity", 0);
    }

    if(positionY > 100){
        $("nav").css("height","30px")
        $(".logo").css("width","50px")
        $(".logo").css("height","50px")
        $(".logo").css("margin-top","2px")
    }

    else if(positionY <100){
        $("nav").css("height","80px")
        $(".logo").css("width","60px")
        $(".logo").css("height","60px")
    }

    if(positionY > 0){
        $("nav").css("position","fixed")
        $("nav").css("width","100%")
    }

})


//lorsque position y est supérieur à 100
    // réduire height de la nav
    // position fixe en haut de la nav