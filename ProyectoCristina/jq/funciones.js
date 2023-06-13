//Para slide
$(document).ready(function () {
  var slider;

  function initSlider() {
    // Obtiene la altura de la imagen con menor altura


    slider = $('.bxslider').bxSlider({
      mode: 'fade',
      fast: 1000000,
      adaptiveHeight: false,
    });
  }

  initSlider();

  $('#slider-next').click(function () {
    slider.goToNextSlide();
    return false;
  });


  //MENU
  $('#slider-count').click(function () {
    var count = slider.getSlideCount();
    return false;
  });

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

  $(window).resize(function () {
    $("div.menu .hamburger-lines .line1").css("transform", "rotate(-0deg)");
    $("div.menu .hamburger-lines .line2").css("transform", "scaleY(1)");
    $("div.menu .hamburger-lines .line3").css("transform", "rotate(0deg)");
    $("nav.menu").stop().animate({ left: "-75vw" }, 1000);
    $("body").css("overflow", "auto");
    fuera = false;

  });

  // Añadir cursor pointer al elemento del menú
  $("nav.menu > ul > li.item > span").css("cursor", "pointer");

  // Mostrar y ocultar submenú al hacer clic en ">"
  $("nav.menu > ul > li.item > span").click(function (e) {
    e.preventDefault();
    var submenu = $(this).parent().next("li").find("ul");
    var icon = $(this);

    if (submenu.is(":visible")) {
      submenu.slideUp();
      icon.html(">");
    } else {
      submenu.slideDown();
      icon.html("-");
    }
  });


  /*Animacion icono del corazon */
  $(".icono-corazon").click(function () {
    let imagen = $(this).attr("src");
    if (imagen == "img/iconos/corazon.svg") {
      //Para que cambia
      $(this).attr("src", "img/iconos/corazonrelleno.svg");
    } else {
      //Para que vuelva a su versión original
      $(this).attr("src", "img/iconos/corazon.svg");
    }
  });
  $(".icono-dinero").click(function () {
    let imagen = $(this).attr("src");
    if (imagen == "../img/iconos/euro.svg") {
      //Para que cambia
      $(this).attr("src", "../img/iconos/moneda.svg");
    } else {
      //Para que vuelva a su versión original
      $(this).attr("src", "../img/iconos/euro.svg");
    }
  });
  var volverArribaVisible = false; // Variable para controlar la visibilidad del botón

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300 && !volverArribaVisible) {
      // Si el scroll es mayor a 300 y el botón no es visible
      $("#volverarriba").stop(true, false).fadeIn(900);
      volverArribaVisible = true; // Actualizar la variable de visibilidad
    } else if ($(window).scrollTop() <= 300 && volverArribaVisible) {
      // Si el scroll es menor o igual a 300 y el botón es visible
      $("#volverarriba").stop(true, false).fadeOut(900);
      volverArribaVisible = false; // Actualizar la variable de visibilidad
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
    e.preventDefault(); // Evitar comportamiento predeterminado del enlace
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow",
      function () {
        volverArribaVisible = false; // Actualizar la variable de visibilidad al llegar a la cabecera
      }
    );
  });
  //Final del document ready
});


$(document).ready(function () {

});