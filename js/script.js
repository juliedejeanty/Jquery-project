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
        $("nav").css("height","50px")
        $("nav").css("height","50px")
    }
})


//lorsque position y est supérieur à 100
    // réduire height de la nav
    // position fixe en haut de la nav