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


////////SLIDER//////////


//établir une variable correspondant à la slide active donc la slide initiale 
var slideActive = 1;
//Montrer la slide "active" 
showSlides(slideActive);

// au clic sur flèche (voir html) la valeur de n change, donne n-1 si clic sur prev 
// et donne n+1 si clic sur after. n dépend une fois de plus de la première image
function plusSlides(n) {
  showSlides(slideActive += n);
}

// Indique quel rond doit être plus foncé. Cela dépend de n et donc de l'image considérée comme "active". 
function currentSlide(n) {
  showSlides(slideActive = n);
}

// établir une fonction permettant de montrer n, soit la slide concernée en fonction de notre clic
function showSlides(n) {
  var i;
  //Faire en sorte que la variable "slides" soit en fonction des slides du html donc des images et texte 
  var slides = document.getElementsByClassName("mySlides");
  //Faire en sorte que la variable "ronds" soit en fonction des ronds définis dans le html
  var ronds = document.getElementsByClassName("rond");
  //si n est supérieur au nombre de slide donc au nombre d'image présent dans le html,
  // la slide visible au clic sur suivant doit être la slide 1, soit la slide initiale. 
  //Sinon; il n'y aurait rien et n continuerait d'augmenter sans pour autant revenir à n=1
  if (n > slides.length) {slideActive = 1} 
  //si n est inférieur à 1 donc aller sur la dernière slide donc le plus grand nombre de n 
  // ici le plus grand nombre de n est matérialisé par la longeur du slider. 
  if (n < 1) {slideActive = slides.length}
  console.log(n);


  //Faire en sorte que les images ne se mettent pas côte à côte mais que l'image précédent disparaisse
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  
  slides[slideActive-1].style.display = "block"; 
  ronds[slideActive-1].className += " active";
}


//lorsque position y est supérieur à 100
    // réduire height de la nav
    // position fixe en haut de la nav