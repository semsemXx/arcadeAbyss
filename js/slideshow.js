const logoContainer = document.querySelector(".logocontainer");

let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  const currentScrollY = window.scrollY;
  const translateX = -currentScrollY * 0.8; 

  logoContainer.style.transform = `translateX(${translateX}px)`;

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});