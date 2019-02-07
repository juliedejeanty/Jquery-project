$(window).on("scroll", function(){
    let positionY = $(this).scrollTop();
    console.log(positionY);
})

$(window).on("scroll", function(){
    let positionY = $(this).scrollTop();

    if(positionY === 796){
        $("#scrolltotop").css("display","flex")
    }
    else{
        $("#scrolltotop").css("display","none")
    }

})