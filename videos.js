function abrirVideo(ruta) {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("videoPlayer");
  video.src = ruta;
  overlay.style.display = "flex";
  video.play();
  overlay.addEventListener("click", function (e){
    if(e.target === overlay){
      cerrarVideo();
    }
  })
}

function cerrarVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("videoPlayer");
  overlay.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

function abrirIframe(url) {
  const overlay = document.getElementById("iframeOverlay");
  const iframe = document.getElementById("miIframe");

  iframe.src = url;
  overlay.style.display = "flex";
}

function cerrarIframe() {
  const overlay = document.getElementById("iframeOverlay");
  const iframe = document.getElementById("miIframe");

  overlay.style.display = "none";
  iframe.src = "";
}

document.getElementById("iframeOverlay").addEventListener("click", cerrarIframe);

const boton = document.getElementById("arriba");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { 
        boton.classList.add("show"); // Mostrar cuando bajas más de 300px
      } else {
        boton.classList.remove("show"); // Ocultar cuando subes
      }
    });