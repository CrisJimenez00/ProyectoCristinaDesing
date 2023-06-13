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

  //formularios
  //login
  // Función para validar los campos del formulario
  function validarFormulario() {
    var usuario = $('#usuario').val();
    var clave = $('#clave').val();
    var mensajeError = '';
    var mensajeUsuario = $('#mensaje-usuario');
    var mensajeClave = $('#mensaje-clave');

    mensajeUsuario.text('');
    mensajeClave.text('');

    if (usuario.length < 8 || usuario.length > 20) {
      mensajeError = 'El usuario debe tener entre 8 y 20 caracteres.';
      mensajeUsuario.text(mensajeError);
    }

    if (usuario.indexOf('@') === -1) {
      mensajeError = 'El usuario debe contener un símbolo @.';
      mensajeUsuario.text(mensajeError);
    }

    if (clave.length < 6 || clave.length > 20) {
      mensajeError = 'La contraseña debe tener entre 6 y 20 caracteres.';
      mensajeClave.text(mensajeError);
    }

    if (usuario === '') {
      mensajeError = 'El campo de usuario no puede estar vacío.';
      mensajeUsuario.text(mensajeError);
    }

    if (clave === '') {
      mensajeError = 'El campo de contraseña no puede estar vacío.';
      mensajeClave.text(mensajeError);
    }

    // Mostrar mensajes de error o enviar el formulario
    if (mensajeError !== '') {
      return false; // Evitar el envío del formulario si hay errores
    } else {
      // Aquí puedes agregar lógica adicional antes de enviar el formulario
      return true; // Permitir el envío del formulario
    }
  }

  // Escuchar el evento de envío del formulario
  $('#formulario').submit(function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Validar el formulario antes de enviarlo
    if (validarFormulario()) {
      // Aquí puedes agregar lógica adicional antes de enviar el formulario
      this.submit(); // Enviar el formulario
    }
  });



  //usuario nuevo
  $('#formulario-alta').submit(function (e) {
    e.preventDefault();
    // Limpiar mensajes de error
    $('.mensaje-error').text('');

    // Obtener los valores de los campos
    var usuario = $('#usuario').val();
    var nombreUsuario = $('#nombre-usuario').val();
    var nombrePersona = $('#nombre-persona').val();
    var clave = $('#clave').val();
    var claveRepetida = $('#clave-repetida').val();

    // Validar campos vacíos
    if (usuario === '') {
      $('#mensaje-usuario').text('El campo de correo electrónico no puede estar vacío');
      return;
    }
    // Validar correo electrónico
    if (!usuario.includes('@')) {
      $('#mensaje-usuario').text('El correo electrónico debe contener un "@"');
      return;
    }

    if (nombreUsuario === '') {
      $('#mensaje-nombre-usuario').text('El campo de nombre de usuario no puede estar vacío');
      return;
    }
    // Validar nombre de usuario
    if (nombreUsuario.length < 8) {
      $('#mensaje-nombre-usuario').text('El nombre de usuario debe tener al menos 8 caracteres');
      return;
    }

    if (nombrePersona === '') {
      $('#mensaje-nombre-persona').text('El campo de nombre no puede estar vacío');
      return;
    }
    // Validar nombre de persona
    if (nombrePersona.length < 6) {
      $('#mensaje-nombre-persona').text('El nombre debe tener al menos 6 caracteres');
      return;
    }

    if (clave === '') {
      $('#mensaje-clave').text('El campo de contraseña no puede estar vacío');
      return;
    }

    if (claveRepetida === '') {
      $('#mensaje-clave').text('El campo de repetir contraseña no puede estar vacío');
      return;
    }
    // Validar contraseñas
    if (clave !== claveRepetida) {
      $('#mensaje-clave').text('Las contraseñas no coinciden');
      return;
    }


    // Si todos los campos son válidos, enviar el formulario
    $('#formulario-alta')[0].submit();

  });

  //Final del document ready
});