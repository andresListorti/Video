// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const boton = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

boton.addEventListener("click", function () {
  if (!boton.classList.contains("slide")) {
    boton.classList.add("slide");
    videoContainer.pause();
  } else {
    boton.classList.remove("slide");
    videoContainer.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
