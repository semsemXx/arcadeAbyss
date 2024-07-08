const point1 = document.querySelector('.point1');
const circle1 = document.querySelector('.circle1');
const point2 = document.querySelector('.point2');
const circle2 = document.querySelector('.circle2');
const point3 = document.querySelector(".point3");
const circle3 = document.querySelector(".circle3");

    window.addEventListener("animationend", () => {
            point1.style.animation = 'scalingPoint 2.25s ease-in-out infinite';
            point2.style.animation = 'scalingPoint 2.25s ease-in-out infinite';
            point3.style.animation = 'scalingPoint 2.25s ease-in-out infinite';

            circle1.style.animation = 'scalingCircle 2.25s ease-in-out infinite';
            circle2.style.animation = 'scalingCircle 2.25s ease-in-out infinite';
            circle3.style.animation = 'scalingCircle 2.25s ease-in-out infinite';

    });

    const setupArrow = document.querySelector('.setupArrow');
    const arrowSetup = document.querySelector('.arrowSetup');
    const setup = document.querySelector('.setup');
    
    const tvArrow = document.querySelector('.tvArrow');
    const arrowTv = document.querySelector('.arrowTv');
    const tv = document.querySelector('.tv');
    
    arrowSetup.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'box-shadow') {
        if (window.getComputedStyle(arrowSetup).boxShadow === "none") {
          setup.classList.add("ShopAppear");
          setup.classList.remove("ShopDisappear");
          setupArrow.style.boxShadow = "0px 0px 0.2px 0.3px rgb(255, 255, 255)";
        }
      }
    });
    
    arrowSetup.addEventListener('mouseout', () => {
      setup.classList.remove("ShopAppear");
      setup.classList.add("ShopDisappear");
      setupArrow.style.boxShadow = "";
      
      
    });
    
    arrowTv.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'box-shadow') {
        if (window.getComputedStyle(arrowTv).boxShadow === "none") {
          tv.classList.add("ShopAppear");
          tv.classList.remove("ShopDisappear");
          tvArrow.style.boxShadow = "0px 0px 0.2px 0.3px rgb(255, 255, 255)";
        }
      }
    });
    
    arrowTv.addEventListener('mouseout', () => {
      tv.classList.remove("ShopAppear");
      tv.classList.add("ShopDisappear");
      tvArrow.style.boxShadow = "";
    });
    