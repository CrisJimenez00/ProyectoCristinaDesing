var video = document.getElementById("video");
var play = document.getElementById("play");
function playPause() {
  if (video.paused) {
    video.play();
    play.innerHTML = '<img src="../img/iconosVideo/pause.svg" alt="pause"/>';
  } else {
    video.pause();
    play.innerHTML = '<img src="../img/iconosVideo/play.svg" alt="play"/>';
  }
}
function recarga() {
  video.load();
  video.play();
  play.innerHTML = '<img src="../img/iconosVideo/pause.svg" alt="pause"/>';
}
function stop() {
  video.load();
  video.pause();
  play.innerHTML = '<img src="../img/iconosVideo/play.svg" alt="play"/>';
}
function maximizar() {
  video.width = 1000;
}
function minimizar() {
  video.width = 250;
}
function normal() {
  video.width = 500;
}
function bajarVelocidad() {
  video.playbackRate *= 0.5;
}
function subirVelocidad() {
  video.playbackRate *= 1.5;
}
//Linea del tiempo
var progreso = document.getElementById("progreso");
video.addEventListener(
  "timeupdate",
  function (e) {
    progreso.setAttribute(
      "value",
      ((e.target.currentTime / e.target.duration) * 100).toString()
    );
  },
  false
);
progreso.addEventListener("change", function (e) {
  video.currentTime = ((e.currentTime.value * video.duration) / 100);
}, false);

//Volumen
let volumen = document.getElementById("volumen");
volumen.addEventListener("change", cambiarVolumen, false);
function cambiarVolumen(e) {
  let volumen = e.target.value;

  video.volume = volumen / 100;
}
