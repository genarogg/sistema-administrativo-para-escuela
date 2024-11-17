import { $ } from "@fn/domUtils";

const scrollHeader = () => {
  // Efecto pegajoso para el header usando el movimiento del scroll
  try {
    if (window.innerWidth <= 1000) return;
    const desktopHeader = $("desktopHeader");

    if (!desktopHeader) return;

    const altura = desktopHeader.getBoundingClientRect().top;

    if (window.scrollY > altura) {
      desktopHeader.classList.add("scrolled");
    } else {
      desktopHeader.classList.remove("scrolled");
    }
  } catch (e) {
    console.error(e);
  }
};

export default scrollHeader;
