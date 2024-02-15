const continuarBtn = document.getElementById('continuarBtn');
const confirmacion = document.getElementById('confirmacion');
const contenido = document.getElementById('contenido');
const video = document.getElementById('video');
const videoPlay = document.getElementById('myVideo');
const confirmarBtn = document.getElementById('confirmarBtn');
const noBtn = document.getElementById('noBtn');
const siBtn = document.getElementById('siBtn');
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

confirmacion.style.display = 'none';
video.style.display = 'none';

siBtn.onclick = function() {
    modal.style.display = "block";
  }

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

continuarBtn.addEventListener('click', function() {
    contenido.style.display = 'none';
    confirmacion.style.display = 'block';
    videoPlay.play();

});

confirmarBtn.addEventListener('click', function() {
    confirmacion.style.display = 'none';
    video.style.display = 'block';
});

noBtn.addEventListener('click', function() {
    // Generar coordenadas aleatorias dentro del div
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Restamos 100 para asegurarnos de que el botón no se salga del borde de la ventana
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Restamos 100 para asegurarnos de que el botón no se salga del borde de la ventana

    // Establecer las coordenadas aleatorias como posición del botón "No"
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});



