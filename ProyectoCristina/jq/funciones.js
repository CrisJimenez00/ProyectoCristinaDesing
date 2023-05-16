//Para slide
$(document).ready(function(){
  var slider = $('.bxslider').bxSlider({
    mode: 'fade',
    fast:1000000,
    adaptiveHeight: true,
    adaptiveHeightSpeed: 450,
  });
  
  $('#slider-next').click(function(){
    slider.goToNextSlide();
    return false;
  });
  
  $('#slider-count').click(function(){
    var count = slider.getSlideCount();
    return false;
  });
});

//MENÚ
$(document).ready(function () {
  $("div.menu").hover(function (e) {
    $(this).css("cursor", "pointer");
  });

  //Para el menú desplegable
  let fuera = false;
  let fueraSubMenu = false;
  $("div.menu").click(function () {
    if (!fuera) {
      //Para darle dinamismo a la hamburguesa
      $("div.menu .hamburger-lines .line1").css("transform", "rotate(54deg)");
      $("div.menu .hamburger-lines .line2").css("transform", "scaleY(0)");
      $("div.menu .hamburger-lines .line3").css("transform", "rotate(-54deg)");
      //Para darle dinamismo al menú
      $("nav.menu").stop().animate({ left: "0" }, 1000);
      $("body").css("overflow", "hidden");
      fuera = true;
    } else {
      $("div.menu .hamburger-lines .line1").css("transform", "rotate(-0deg)");
      $("div.menu .hamburger-lines .line2").css("transform", "scaleY(1)");
      $("div.menu .hamburger-lines .line3").css("transform", "rotate(0deg)");
      $("nav.menu").stop().animate({ left: "-75vw" }, 1000);
      $("body").css("overflow", "auto");
      fuera = false;
    }
  });
  //Sub menus
  $("nav.menu > ul > li > span").hover(function (e) {
    $("nav.menu > ul > li > span").css("cursor", "pointer");
  });
  $("nav.menu > ul > li > span").click(function () {
    if ($(this).parent().next().is(":visible")) {
      $(this).html(">");
      $(this).parent().next().slideUp();
    } else {
      $(this).parent().next().stop().slideDown();
      $(this).html("-");
    }
  });
  let fondo = true;
  /*Animacion icono del corazon */
  $(".icono-corazon").click(function () {
    if (fondo) {
      //Para que cambia
      $(this).attr("src", "img/iconos/corazonrelleno.svg");
      fondo = false;
    } else {
      //Para que vuelva a su versión original
      $(this).attr("src", "img/iconos/corazon.svg");
      fondo = true;
    }
  });
});
/*Botn de scroll */
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $("#volverarriba").fadeIn(900);
  } else {
    $("#volverarriba").fadeOut(900);
  }
  $("#cambio-pagina li").hover(
    function () {
      // over
      $(this).css("background-color", "#e28788");
      $(this).css("color", "black");
    },
    function () {
      // out
      $(this).css("color", "#e28788");
      $(this).css("background-color", "white");
    }
  );
});

$("#volverarriba").click(function (e) {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "slow"
  );
});
