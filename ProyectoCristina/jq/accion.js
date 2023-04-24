const video = document.getElementById("video");
const barraProgreso = document.getElementById("progreso");

const play = document.getElementById("play");

const stopButton = document.getElementById("stop");

const reset = document.getElementById("reset");
const subirVelocidad = document.getElementById("fast");
const bajarVelocidad = document.getElementById("slow");

const mute = document.getElementById("mute");
const volume = document.getElementById("volume");

const fullscreen = document.getElementById("maximizar");

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    play.innerHTML = '<img src="../img/iconosVideo/pause.svg" alt="pause"/>';
  } else {
    video.pause();
    play.innerHTML = '<img src="../img/iconosVideo/play.svg" alt="play"/>';
  }
});

subirVelocidad.addEventListener("click", function () {
  video.playbackRate *= 1.5;
});

reset.addEventListener("click", function () {
  video.load();
  video.play();
  play.innerHTML = '<img src="../img/iconosVideo/pause.svg" alt="pause"/>';
});
bajarVelocidad.addEventListener("click", function () {
  video.playbackRate *= 0.5;
});
stopButton.addEventListener("click", function () {
  video.load();
  video.pause();
  play.innerHTML = '<img src="../img/iconosVideo/play.svg" alt="play"/>';
});
let prevVolume = 100;
mute.addEventListener("click", function () {
  if (video.volume !== 0) {
    prevVolume = video.volume;
    video.volume = 0;
    muteo.setAttribute("src", "../img/iconosVideo/silencio.svg");
  } else {
    video.volume = prevVolume;
    muteo.setAttribute("src", "../img/iconosVideo/volumen.svg");
  }

  const muteo = document.getElementById("mute-image");

  if (video.volume === 0) {
    muteo.setAttribute("src", "../img/iconosVideo/silencio.svg");
  } else {
    muteo.setAttribute("src", "../img/iconosVideo/volumen.svg");
  }
});
volume.addEventListener("change", function (e) {
  video.volume = e.currentTarget.value / 100;
  const muteo = document.getElementById("mutear");

  if (video.volume === 0) {
    muteo.setAttribute("src", "../img/iconosVideo/silencio.svg");
  } else {
    muteo.setAttribute("src", "../img/iconosVideo/volumen.svg");
  }
});

fullscreen.addEventListener("click", function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
});
