document.addEventListener('DOMContentLoaded', () => {
  const ourApproach = document.querySelector(".ourapproach");
  const lines = document.querySelectorAll('.line2');
  const scroll = 4288.7; 
  const maxScroll = 610; 
  
  window.addEventListener("scroll", () => {
      let windowHeight = window.innerHeight;

      if (ourApproach.getBoundingClientRect().bottom <= windowHeight) {
          let windowScroll = window.scrollY - scroll;
          
          if (windowScroll > maxScroll) {
              return; 
          }
          lines.forEach((line, index) => {
              const baseRotation = -20.25 + (index * 2.5);
              const adjustedRotation = baseRotation + (windowScroll * 0.2); 
              line.style.transform = `rotate(${adjustedRotation}deg)`;
          });
      }
  });
});